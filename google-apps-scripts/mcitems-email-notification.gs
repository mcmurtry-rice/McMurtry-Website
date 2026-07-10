// ========== CONFIGURATION ==========

// Update these field names to match your exact Google Form question text
var FORM_FIELD_MAPPING = {
  NAME: 'Name',
  NET_ID: 'Net ID',
  ITEM: '1) Which item would you like to checkout?',
  APPROVER_EMAIL: '2) Please select the corresponding email address for the item that you\'ve selected (doing so will allow this form to send an email to the selected approver so they can approve your request):',
  RESERVATION_DATE: '3) On which date would you like to reserve/request this item?',
  CHECKOUT_TIME: '4) At what time would you like to check it out?',
  RETURN_TIME: '5) When would you return it?',
  PURPOSE: '6) What do you plan to use said item for?',
  AGREEMENT: '7) By checking this box I agree to take great care of this item, and that if this item is broken or no longer usable, I will pay the replacement cost as noted on this form.',
  ADDITIONAL_NOTES: 'Anything else you\'d like to include in your request?'
};

// Map approver emails to names and item locations
var APPROVERS = {
  'bgg1@rice.edu': { name: 'Berny Guerra Arthur', location: 'Committee Closet' },
  'gd33@rice.edu': { name: 'Approver (Commons/Music Room/Gym)', location: 'Commons/Music Room/Gym' },
  'jg225@rice.edu': { name: 'Approver (Tech Closet)', location: 'Tech Closet' },
  'jbf2@rice.edu': { name: 'Approver (Magister\'s)', location: 'Magister\'s' },
  'mcminnovationspace@gmail.com': { name: 'McMakerspace Team', location: 'McMakerspace' },
  'as610@rice.edu': { name: 'TESTER Antony Saleh', location: 'TESTTESTTEST' },
};

var WEBSITE_LINKS = {
  MCITEMS_PAGE: 'https://mcmurtrycollege.org/resources/mcitemscheckout'
};

var CONTACT_EMAIL = 'mcmsecretary@gmail.com';
var ADMIN_EMAIL = 'as610@rice.edu'; // Admin email for error notifications
var TIMEZONE = 'America/Chicago'; // Houston timezone

// IMPORTANT: After deploying as Web App, replace with your deployment URL
// Deploy: Deploy > New deployment > Web app > Execute as: Me, Access: Anyone with link
var WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbzsox-S1IQKFajL43OOtrQFy9Bim6cr73b5sG6OszWKEZ6Ok1fWGjC-X6daWbVgdtQW/exec';

// Spreadsheet ID for storing McItems requests
// Get ID from URL: https://docs.google.com/spreadsheets/d/SPREADSHEET_ID_HERE/edit
// Leave as empty string if not yet created - requests will still be emailed but not logged
var REQUESTS_SHEET_ID = '1GNlIxRFkbQoyEVGoi0uOd94wLLjumYPeHPzNhSvzK-Q';

// ========== UTILITY FUNCTIONS ==========

/**
 * Format date/time to Houston timezone (readable format)
 */
function formatToHoustonTime(date) {
  if (!date) return 'N/A';
  var dateObj = date instanceof Date ? date : new Date(date);
  return Utilities.formatDate(dateObj, TIMEZONE, 'MMM dd, yyyy hh:mm a z');
}

/**
 * Format date for display in emails and web pages (more readable)
 */
function formatDateForEmail(dateString) {
  if (!dateString || dateString === 'N/A') return 'N/A';

  // If it's already a formatted string (contains letters), return as-is
  if (typeof dateString === 'string' && /[a-zA-Z]/.test(dateString)) {
    return dateString;
  }

  try {
    var date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return dateString;
    }
    return Utilities.formatDate(date, TIMEZONE, 'EEEE, MMMM dd, yyyy');
  } catch (e) {
    Logger.log('Error formatting date: ' + e.toString() + ' for input: ' + dateString);
    return dateString;
  }
}

// ========== WEB APP HANDLERS ==========

/**
 * Handle GET requests (Approve / Decline buttons)
 */
function doGet(e) {
  var action = e.parameter.action;
  var requestId = e.parameter.id;

  if (!requestId) {
    return HtmlService.createHtmlOutput('<h3 style="color:red;">Invalid request.</h3>')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  }

  if (action === 'approve') {
    return HtmlService.createHtmlOutput(buildApprovalPage(requestId, WEB_APP_URL))
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  }

  if (action === 'decline') {
    markDeclined(requestId);
    return HtmlService.createHtmlOutput('\
      <div style="font-family:Arial;padding:30px;text-align:center;">\
        <h2 style="color:#8B6FC7;">Request Declined</h2>\
        <p>The McItems checkout request has been declined.</p>\
        <p>The student will be notified.</p>\
      </div>\
    ').setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  }

  return HtmlService.createHtmlOutput('<h3>Unknown action.</h3>')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/**
 * Handle POST requests (Approval form submission with pickup instructions)
 */
function doPost(e) {
  var htmlOutput;
  try {
    var requestId = e.parameter.requestId;
    var instructions = e.parameter.instructions;
    var request = getRequest(requestId);

    if (request) {
      markApproved(requestId, instructions);
      sendApprovalEmailToStudent(request, instructions);
    }

    htmlOutput = HtmlService.createHtmlOutput(
      '<html><body style="font-family: Arial; text-align: center; padding-top: 50px;">' +
      '<h1 style="color: #28a745;">✓ Request Approved</h1>' +
      '<p>Pickup instructions have been sent to the student. You may close this tab.</p>' +
      '</body></html>'
    );
  } catch (error) {
    htmlOutput = HtmlService.createHtmlOutput('<html><body><h2>Error</h2><p>' + error.toString() + '</p></body></html>');
  }

  return htmlOutput.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/**
 * Build the approval page HTML (where approver enters pickup instructions)
 */
function buildApprovalPage(requestId, webAppUrl) {
  var request = getRequest(requestId);

  if (!request) {
    return '<h3 style="color:red;">Request not found.</h3>';
  }

  if (request.status !== 'PENDING') {
    return '\
      <div style="font-family:Arial;padding:30px;text-align:center;">\
        <h3 style="color:#dc3545;">Request Already ' + request.status + '</h3>\
        <p>This request was already processed.</p>\
      </div>\
    ';
  }

  return '\
    <html>\
    <head>\
      <meta name="viewport" content="width=device-width, initial-scale=1.0">\
      <style>\
        body {\
          font-family: Arial, sans-serif;\
          padding: 30px;\
          background: #f5f5f5;\
          margin: 0;\
        }\
        \
        .container {\
          max-width: 500px;\
          margin: 0 auto;\
          background: white;\
          padding: 30px;\
          border-radius: 8px;\
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\
        }\
        \
        h2 {\
          color: #8B6FC7;\
          margin-top: 0;\
          font-size: 24px;\
        }\
        \
        .details {\
          background: #f9f9f9;\
          padding: 15px;\
          border-left: 4px solid #8B6FC7;\
          margin: 20px 0;\
        }\
        \
        .details p {\
          margin: 5px 0;\
        }\
        \
        form {\
          width: 100%;\
        }\
        \
        label {\
          font-weight: bold;\
          font-size: 16px;\
          margin-bottom: 8px;\
          display: block;\
        }\
        \
        textarea {\
          font-size: 16px;\
          padding: 10px;\
          width: 100%;\
          border: 2px solid #8B6FC7;\
          border-radius: 4px;\
          margin-bottom: 15px;\
          box-sizing: border-box;\
          font-family: Arial, sans-serif;\
          min-height: 100px;\
          resize: vertical;\
        }\
        \
        button {\
          background: #28a745;\
          color: #fff;\
          padding: 12px 24px;\
          border: none;\
          border-radius: 5px;\
          font-size: 16px;\
          cursor: pointer;\
          font-weight: bold;\
          width: 100%;\
          box-sizing: border-box;\
        }\
        \
        button:hover {\
          background: #218838;\
        }\
        \
        @media (max-width: 600px) {\
          body {\
            padding: 15px;\
          }\
          \
          .container {\
            padding: 20px;\
          }\
          \
          h2 {\
            font-size: 20px;\
          }\
          \
          textarea, button {\
            font-size: 16px;\
          }\
        }\
      </style>\
    </head>\
    \
    <body>\
      <div class="container">\
        <h2>McItems Checkout Approval</h2>\
        \
        <div class="details">\
          <p><strong>Student:</strong> ' + request.studentEmail + '</p>\
          <p><strong>Name:</strong> ' + request.studentName + '</p>\
          <p><strong>Item:</strong> ' + request.item + '</p>\
          <p><strong>Date:</strong> ' + formatDateForEmail(request.reservationDate) + '</p>\
          <p><strong>Checkout Time:</strong> ' + request.checkoutTime + '</p>\
          <p><strong>Return Time:</strong> ' + request.returnTime + '</p>\
          <p><strong>Purpose:</strong> ' + request.purpose + '</p>\
        </div>\
        \
        <form method="post" action="' + webAppUrl + '">\
          <input type="hidden" name="requestId" value="' + requestId + '" />\
          \
          <label for="instructions">Pickup Instructions (where and how to get the item):</label>\
          <textarea id="instructions" name="instructions" required placeholder="e.g., Come to the Committee Closet on the 1st floor. I\'ll be there at 3pm to hand it off."></textarea>\
          \
          <button type="submit">✓ Approve & Email Student</button>\
        </form>\
      </div>\
    </body>\
    </html>\
  ';
}

// ========== MAIN FUNCTION ==========

/**
 * Triggered when the McItems Check Out form is submitted
 * Sends notification email to the appropriate approver
 */
function onFormSubmit(e) {
  try {
    // Get form response
    var itemResponses = e.response.getItemResponses();
    var responses = {};

    // Parse all responses into an object
    itemResponses.forEach(function(itemResponse) {
      var question = itemResponse.getItem().getTitle();
      var answer = itemResponse.getResponse();
      responses[question] = answer;
    });

    var studentEmail = e.response.getRespondentEmail();

    if (!studentEmail) {
      throw new Error('Unable to retrieve student email from form response');
    }

    sendCheckoutRequestEmail(responses, studentEmail);
  } catch (error) {
    Logger.log('Error in onFormSubmit: ' + error.toString());
    sendErrorNotification(error);
  }
}

// ========== EMAIL TEMPLATES ==========

/**
 * Send checkout request notification to the approver
 */
function sendCheckoutRequestEmail(responses, studentEmail) {
  var studentName = responses[FORM_FIELD_MAPPING.NAME] || 'N/A';
  var netId = responses[FORM_FIELD_MAPPING.NET_ID] || 'N/A';
  var item = responses[FORM_FIELD_MAPPING.ITEM] || 'N/A';
  var approverEmail = responses[FORM_FIELD_MAPPING.APPROVER_EMAIL] || '';
  // var approverEmail = "as610@rice.edu"
  var reservationDate = responses[FORM_FIELD_MAPPING.RESERVATION_DATE] || 'N/A';
  var checkoutTime = responses[FORM_FIELD_MAPPING.CHECKOUT_TIME] || 'N/A';
  var returnTime = responses[FORM_FIELD_MAPPING.RETURN_TIME] || 'N/A';
  var purpose = responses[FORM_FIELD_MAPPING.PURPOSE] || 'N/A';
  var additionalNotes = responses[FORM_FIELD_MAPPING.ADDITIONAL_NOTES] || 'N/A';

  if (!approverEmail || approverEmail === '') {
    throw new Error('Approver email is missing from form response');
  }

  var approver = APPROVERS[approverEmail] || { name: approverEmail, location: 'Unknown' };

  // Generate unique request ID
  var requestId = Utilities.getUuid();

  // Save request to Google Sheet (if configured)
  saveRequest({
    id: requestId,
    studentEmail: studentEmail,
    studentName: studentName,
    netId: netId,
    item: item,
    approverEmail: approverEmail,
    approverName: approver.name,
    location: approver.location,
    reservationDate: reservationDate,
    checkoutTime: checkoutTime,
    returnTime: returnTime,
    purpose: purpose,
    additionalNotes: additionalNotes,
    status: 'PENDING',
    timestamp: formatToHoustonTime(new Date())
  });

  var subject = 'McItems Checkout Request: ' + item + ' - ' + studentName;

  var htmlBody = '<html>' +
    '<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">' +
    '<div style="max-width: 600px; margin: 0 auto; padding: 20px;">' +
    '<h2 style="color: #8B6FC7; border-bottom: 3px solid #8B6FC7; padding-bottom: 10px;">' +
    'McItems Checkout Request</h2>' +
    '<p>Dear ' + approver.name + ',</p>' +
    '<p>A student has submitted a request to check out an item from <strong>' + approver.location + '</strong>.</p>' +
    '<div style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #8B6FC7; margin: 20px 0;">' +
    '<h3 style="margin-top: 0; color: #8B6FC7;">Request Details</h3>' +
    '<p><strong>Student:</strong> ' + studentName + ' (' + netId + ')</p>' +
    '<p><strong>Contact:</strong> ' + studentEmail + '</p>' +
    '<p><strong>Item:</strong> ' + item + '</p>' +
    '<p><strong>Date:</strong> ' + formatDateForEmail(reservationDate) + '</p>' +
    '<p><strong>Checkout Time:</strong> ' + checkoutTime + '</p>' +
    '<p><strong>Return Time:</strong> ' + returnTime + '</p>' +
    '<p><strong>Purpose:</strong> ' + purpose + '</p>' +
    (additionalNotes !== 'N/A' ? '<p><strong>Additional Notes:</strong> ' + additionalNotes + '</p>' : '') +
    '</div>' +
    '<div style="margin: 30px 0; text-align: center;">' +
    '<a href="' + WEB_APP_URL + '?action=approve&id=' + requestId + '"' +
    ' style="background:#28a745;color:#fff;padding:14px 22px;text-decoration:none;border-radius:6px;font-weight:bold;margin-right:10px;display:inline-block;">' +
    '✓ Approve & Send Instructions' +
    '</a>' +
    '<a href="' + WEB_APP_URL + '?action=decline&id=' + requestId + '"' +
    ' style="background:#dc3545;color:#fff;padding:14px 22px;text-decoration:none;border-radius:6px;font-weight:bold;display:inline-block;">' +
    '✗ Decline Request' +
    '</a>' +
    '</div>' +
    '<h3 style="color: #8B6FC7;">Next Steps</h3>' +
    '<ul>' +
    '<li>Review the request details above</li>' +
    '<li>Click <strong>Approve</strong> to provide pickup instructions - the student will be emailed automatically</li>' +
    '<li>Click <strong>Decline</strong> if the item is unavailable or the request cannot be fulfilled</li>' +
    '</ul>' +
    '<div style="background-color: #FFF3CD; padding: 15px; border-left: 4px solid #FFD700; margin: 20px 0;">' +
    '<p style="margin: 0;"><strong>Questions or concerns?</strong></p>' +
    '<p style="margin: 5px 0 0 0;">Contact McMurtry leadership at <a href="mailto:' + CONTACT_EMAIL + '">' + CONTACT_EMAIL + '</a></p>' +
    '</div>' +
    '<hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">' +
    '<p style="font-size: 12px; color: #666;">' +
    'This is an automated notification from McMurtry College.<br/>' +
    'McMurtry College | Rice University' +
    '</p>' +
    '</div>' +
    '</body>' +
    '</html>';

  MailApp.sendEmail({
    to: approverEmail,
    subject: subject,
    htmlBody: htmlBody
  });

  Logger.log('McItems checkout request email sent to approver: ' + approverEmail);

  // Also send a confirmation to the student
  sendStudentConfirmationEmail(studentEmail, studentName, item, reservationDate, checkoutTime, returnTime, approver);
}

/**
 * Send confirmation email to the student after form submission
 */
function sendStudentConfirmationEmail(studentEmail, studentName, item, reservationDate, checkoutTime, returnTime, approver) {
  var subject = 'McItems Checkout Request Received: ' + item;

  var htmlBody = '<html>' +
    '<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">' +
    '<div style="max-width: 600px; margin: 0 auto; padding: 20px;">' +
    '<h2 style="color: #8B6FC7; border-bottom: 3px solid #8B6FC7; padding-bottom: 10px;">' +
    'McItems Checkout Request Received</h2>' +
    '<p>Hi ' + studentName + ',</p>' +
    '<p>Your request to check out a McMurtry item has been received and is awaiting approval.</p>' +
    '<div style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #8B6FC7; margin: 20px 0;">' +
    '<h3 style="margin-top: 0; color: #8B6FC7;">Your Request</h3>' +
    '<p><strong>Item:</strong> ' + item + '</p>' +
    '<p><strong>Date:</strong> ' + formatDateForEmail(reservationDate) + '</p>' +
    '<p><strong>Checkout Time:</strong> ' + checkoutTime + '</p>' +
    '<p><strong>Return Time:</strong> ' + returnTime + '</p>' +
    '<p><strong>Approver:</strong> ' + approver.name + ' (' + approver.location + ')</p>' +
    '</div>' +
    '<h3 style="color: #8B6FC7;">What Happens Next?</h3>' +
    '<ul>' +
    '<li>The approver for your item will review your request</li>' +
    '<li>If approved, you will receive an email with <strong>pickup instructions</strong></li>' +
    '<li>If more information is needed, you will be contacted</li>' +
    '</ul>' +
    '<div style="background-color: #FFF3CD; padding: 15px; border-left: 4px solid #FFD700; margin: 20px 0;">' +
    '<p style="margin: 0;"><strong>Reminders:</strong></p>' +
    '<ul style="margin: 10px 0 0 0;">' +
    '<li>Items may be checked out for a maximum of 7 hours</li>' +
    '<li>Return items on time and in the condition received</li>' +
    '<li>You are financially responsible for lost or damaged items</li>' +
    '<li>Please clean the item before returning it</li>' +
    '</ul>' +
    '</div>' +
    '<p>Questions? Contact <a href="mailto:' + CONTACT_EMAIL + '">' + CONTACT_EMAIL + '</a></p>' +
    '<p>View the full checkout guidelines: <a href="' + WEBSITE_LINKS.MCITEMS_PAGE + '">McItems Check Out Page</a></p>' +
    '<hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">' +
    '<p style="font-size: 12px; color: #666;">' +
    'This is an automated confirmation from McMurtry College.<br/>' +
    'McMurtry College | Rice University' +
    '</p>' +
    '</div>' +
    '</body>' +
    '</html>';

  MailApp.sendEmail({
    to: studentEmail,
    subject: subject,
    htmlBody: htmlBody
  });

  Logger.log('Confirmation email sent to student: ' + studentEmail);
}

/**
 * Send error notification to admin if script fails
 */
function sendErrorNotification(error) {
  var subject = 'ERROR: McItems Checkout Form Script Failed';
  var body = 'The McItems checkout email notification script encountered an error:\n\n' +
    'Error: ' + error.toString() + '\n' +
    'Stack: ' + error.stack + '\n\n' +
    'Time: ' + formatToHoustonTime(new Date()) + '\n\n' +
    'Please check the script and form configuration.';

  MailApp.sendEmail({
    to: ADMIN_EMAIL,
    subject: subject,
    body: body
  });
}

// ========== GOOGLE SHEETS STORAGE FUNCTIONS ==========

/**
 * Save McItems request to Google Sheet
 */
function saveRequest(requestData) {
  if (!REQUESTS_SHEET_ID || REQUESTS_SHEET_ID === '') {
    Logger.log('No spreadsheet ID configured - skipping sheet storage for request: ' + requestData.id);
    return;
  }

  try {
    var spreadsheet = SpreadsheetApp.openById(REQUESTS_SHEET_ID);
    var sheet = spreadsheet.getSheetByName('Requests');

    if (!sheet) {
      sheet = spreadsheet.insertSheet('Requests');
    }

    // Check if headers exist, if not create them
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Request ID',
        'Timestamp',
        'Student Email',
        'Student Name',
        'Net ID',
        'Item',
        'Approver Email',
        'Approver Name',
        'Location',
        'Reservation Date',
        'Checkout Time',
        'Return Time',
        'Purpose',
        'Additional Notes',
        'Status',
        'Pickup Instructions',
        'Approval Timestamp'
      ]);
    }

    // Add request row
    sheet.appendRow([
      requestData.id,
      requestData.timestamp,
      requestData.studentEmail,
      requestData.studentName,
      requestData.netId,
      requestData.item,
      requestData.approverEmail,
      requestData.approverName,
      requestData.location,
      requestData.reservationDate,
      requestData.checkoutTime,
      requestData.returnTime,
      requestData.purpose,
      requestData.additionalNotes,
      requestData.status,
      '', // Pickup instructions (empty until approved)
      ''  // Approval timestamp (empty until approved)
    ]);

    Logger.log('Request saved to sheet: ' + requestData.id);
  } catch (error) {
    Logger.log('Error saving request to sheet: ' + error.toString());
    // Don't throw - allow email flow to continue even if sheet fails
  }
}

/**
 * Get McItems request from Google Sheet by ID
 */
function getRequest(requestId) {
  if (!REQUESTS_SHEET_ID || REQUESTS_SHEET_ID === '') {
    Logger.log('No spreadsheet ID configured - cannot retrieve request');
    return null;
  }

  try {
    var sheet = SpreadsheetApp.openById(REQUESTS_SHEET_ID).getSheetByName('Requests');

    if (!sheet) {
      return null;
    }

    var data = sheet.getDataRange().getDisplayValues();

    // Find request by ID (column 0)
    for (var i = 1; i < data.length; i++) {
      if (data[i][0] === requestId) {
        return {
          id: data[i][0],
          timestamp: data[i][1],
          studentEmail: data[i][2],
          studentName: data[i][3],
          netId: data[i][4],
          item: data[i][5],
          approverEmail: data[i][6],
          approverName: data[i][7],
          location: data[i][8],
          reservationDate: data[i][9],
          checkoutTime: data[i][10],
          returnTime: data[i][11],
          purpose: data[i][12],
          additionalNotes: data[i][13],
          status: data[i][14],
          pickupInstructions: data[i][15],
          approvalTimestamp: data[i][16],
          rowIndex: i + 1
        };
      }
    }

    return null;
  } catch (error) {
    Logger.log('Error getting request from sheet: ' + error.toString());
    return null;
  }
}

/**
 * Mark request as APPROVED
 */
function markApproved(requestId, pickupInstructions) {
  if (!REQUESTS_SHEET_ID || REQUESTS_SHEET_ID === '') {
    Logger.log('No spreadsheet ID configured - skipping status update');
    return false;
  }

  try {
    var sheet = SpreadsheetApp.openById(REQUESTS_SHEET_ID).getSheetByName('Requests');
    var request = getRequest(requestId);

    if (request && request.rowIndex) {
      if (request.status !== 'PENDING') {
        Logger.log('Request already processed: ' + requestId + ' (Status: ' + request.status + ')');
        return false;
      }

      sheet.getRange(request.rowIndex, 15).setValue('APPROVED');          // Status
      sheet.getRange(request.rowIndex, 16).setValue(pickupInstructions);  // Pickup Instructions
      sheet.getRange(request.rowIndex, 17).setValue(formatToHoustonTime(new Date())); // Approval Timestamp
      Logger.log('Request marked as APPROVED: ' + requestId);
      return true;
    }
    return false;
  } catch (error) {
    Logger.log('Error marking request as approved: ' + error.toString());
    return false;
  }
}

/**
 * Mark request as DECLINED
 */
function markDeclined(requestId) {
  if (!REQUESTS_SHEET_ID || REQUESTS_SHEET_ID === '') {
    Logger.log('No spreadsheet ID configured - skipping status update');
    return false;
  }

  try {
    var sheet = SpreadsheetApp.openById(REQUESTS_SHEET_ID).getSheetByName('Requests');
    var request = getRequest(requestId);

    if (request && request.rowIndex) {
      if (request.status !== 'PENDING') {
        Logger.log('Request already processed: ' + requestId + ' (Status: ' + request.status + ')');
        return false;
      }

      sheet.getRange(request.rowIndex, 15).setValue('DECLINED');
      sheet.getRange(request.rowIndex, 16).setValue('');
      sheet.getRange(request.rowIndex, 17).setValue(formatToHoustonTime(new Date()));

      // Send decline notification to student
      sendDeclineEmailToStudent(request);

      Logger.log('Request marked as DECLINED: ' + requestId);
      return true;
    }
    return false;
  } catch (error) {
    Logger.log('Error marking request as declined: ' + error.toString());
    return false;
  }
}

// ========== APPROVAL / DECLINE EMAILS ==========

/**
 * Send approval email to student with pickup instructions
 */
function sendApprovalEmailToStudent(request, pickupInstructions) {
  var subject = 'McItems Checkout Approved: ' + request.item;

  var htmlBody = '<html>' +
    '<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">' +
    '<div style="max-width: 600px; margin: 0 auto; padding: 20px;">' +
    '<h2 style="color: #28a745; border-bottom: 3px solid #28a745; padding-bottom: 10px;">' +
    '✓ McItems Checkout Approved</h2>' +
    '<p>Hi ' + request.studentName + ',</p>' +
    '<p>Great news! Your request to check out <strong>' + request.item + '</strong> has been <strong>approved</strong>.</p>' +
    '<div style="background-color: #d4edda; padding: 20px; border-left: 4px solid #28a745; margin: 20px 0;">' +
    '<p style="margin: 0; font-size: 14px; color: #155724;"><strong>Pickup Instructions:</strong></p>' +
    '<p style="margin: 10px 0 0 0; font-size: 16px; color: #155724;">' +
    pickupInstructions.replace(/\n/g, '<br/>') +
    '</p>' +
    '</div>' +
    '<div style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #8B6FC7; margin: 20px 0;">' +
    '<h3 style="margin-top: 0; color: #8B6FC7;">Your Checkout Details</h3>' +
    '<p><strong>Item:</strong> ' + request.item + '</p>' +
    '<p><strong>Date:</strong> ' + formatDateForEmail(request.reservationDate) + '</p>' +
    '<p><strong>Checkout Time:</strong> ' + request.checkoutTime + '</p>' +
    '<p><strong>Return Time:</strong> ' + request.returnTime + '</p>' +
    '</div>' +
    '<div style="background-color: #FFF3CD; padding: 15px; border-left: 4px solid #FFD700; margin: 20px 0;">' +
    '<p style="margin: 0;"><strong>Important Reminders:</strong></p>' +
    '<ul style="margin: 10px 0 0 0;">' +
    '<li>Return the item by <strong>' + request.returnTime + '</strong></li>' +
    '<li>Return items in the condition received</li>' +
    '<li>Please clean the item before returning it</li>' +
    '<li>Do not hand off the item to anyone else</li>' +
    '<li>You are financially responsible for lost or damaged items</li>' +
    '</ul>' +
    '</div>' +
    '<p>Questions? Contact <a href="mailto:' + CONTACT_EMAIL + '">' + CONTACT_EMAIL + '</a></p>' +
    '<hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">' +
    '<p style="font-size: 12px; color: #666;">' +
    'This is an automated message from McMurtry College.<br/>' +
    'McMurtry College | Rice University' +
    '</p>' +
    '</div>' +
    '</body>' +
    '</html>';

  MailApp.sendEmail({
    to: request.studentEmail,
    subject: subject,
    htmlBody: htmlBody
  });

  Logger.log('Approval email sent to student: ' + request.studentEmail);
}

/**
 * Send decline notification to student
 */
function sendDeclineEmailToStudent(request) {
  var subject = 'McItems Checkout Request Declined: ' + request.item;

  var htmlBody = '<html>' +
    '<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">' +
    '<div style="max-width: 600px; margin: 0 auto; padding: 20px;">' +
    '<h2 style="color: #dc3545; border-bottom: 3px solid #dc3545; padding-bottom: 10px;">' +
    'McItems Checkout Request Declined</h2>' +
    '<p>Hi ' + request.studentName + ',</p>' +
    '<p>Unfortunately, your request to check out <strong>' + request.item + '</strong> has been declined.</p>' +
    '<div style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #8B6FC7; margin: 20px 0;">' +
    '<h3 style="margin-top: 0; color: #8B6FC7;">Request Details</h3>' +
    '<p><strong>Item:</strong> ' + request.item + '</p>' +
    '<p><strong>Date:</strong> ' + formatDateForEmail(request.reservationDate) + '</p>' +
    '<p><strong>Checkout Time:</strong> ' + request.checkoutTime + '</p>' +
    '<p><strong>Return Time:</strong> ' + request.returnTime + '</p>' +
    '</div>' +
    '<p>If you have questions about this decision, please reach out:</p>' +
    '<ul>' +
    '<li>Item Approver: <a href="mailto:' + request.approverEmail + '">' + request.approverName + '</a></li>' +
    '<li>McMurtry Leadership: <a href="mailto:' + CONTACT_EMAIL + '">' + CONTACT_EMAIL + '</a></li>' +
    '</ul>' +
    '<hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">' +
    '<p style="font-size: 12px; color: #666;">' +
    'This is an automated message from McMurtry College.<br/>' +
    'McMurtry College | Rice University' +
    '</p>' +
    '</div>' +
    '</body>' +
    '</html>';

  MailApp.sendEmail({
    to: request.studentEmail,
    subject: subject,
    htmlBody: htmlBody
  });

  Logger.log('Decline email sent to student: ' + request.studentEmail);
}
