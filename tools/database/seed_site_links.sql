-- Seed rows for public.site_links. Run ONCE, after schema.sql.
--
-- Idempotent: `on conflict (key) do nothing` means re-running this file will
-- NOT overwrite edits made through the Supabase dashboard. To change a link
-- after seeding, edit it in the Table Editor - not here.
--
-- `location` is written for a non-technical editor: it should say exactly
-- which page and which button/section the value controls, so nobody has to
-- read the code to know what they are about to change.

insert into public.site_links (key, name, description, url, location, kind, sort_order) values

-- ---------- Forms ----------
('mcexpenses_form',
 'McExpenses Form',
 'All P-Card activity: checking out a card, returning it, and online purchase requests.',
 'https://docs.google.com/forms/d/e/1FAIpQLSdyVzHpJYlam_E0DYWYrnGc43FwVV9RHvUvGgu65h785g7ZxQ/viewform?usp=dialog',
 'Resources > P-Card Requests - the "Open McExpenses Form" button in the banner at the top of the page.',
 'form', 10),

('room_reservation_form',
 'Room Reservation Form',
 'Booking form for Category 1 McMurtry spaces.',
 'https://docs.google.com/forms/d/e/1FAIpQLSco26DjasAvhMKl-CNafI35-wtoLtoYJBGHPd8v8FxgMbbhYQ/viewform?usp=sf_link',
 'Resources > Room Reservations - both "Open Reservation Form" buttons (one shows on phones, one on desktop; they are the same link).',
 'form', 20),

('mcitems_checkout_form',
 'McMurtry Items Check Out Form',
 'Request to borrow shared college items.',
 'https://docs.google.com/forms/d/e/1FAIpQLSdhZVcSHTxbKFDuWh9PN3sJAZ3jL-XDBTVaXpVUCgeh0ZYM-g/viewform',
 'Resources > McItems Check Out - the "Open Checkout Form" button in the banner at the top of the page.',
 'form', 30),

('mcfund_request_form',
 'McFUNd Request Form',
 'Funding requests for student-led events and projects. This form is EMBEDDED in the page rather than linked - paste the plain "viewform" link and the site adds the embed setting itself.',
 'https://docs.google.com/forms/d/e/1FAIpQLSdHfWng8IW37QGSMz9lObCNHCRC1ifZjGxola_7udR-4A-f-Q/viewform',
 'Resources > McFUNd Requests - the form embedded in the body of the page.',
 'form', 40),

('magisters_fund_form',
 'McMurtry Magisters'' Fund Application',
 'Financial support for college event costs and merchandise. Was a goo.gl short link; this is the direct Google Forms URL it redirected to.',
 'https://docs.google.com/forms/d/e/1FAIpQLSdumVBi5BTTePDHXPLip0LylDZZeB3DGrmSDVUVRWeoXaVdGQ/viewform',
 'Resources > Financial Inclusivity - the "McMurtry Magisters'' Fund" card.',
 'form', 50),

-- ---------- Documents ----------
('mcmakerspace_equipment_doc',
 'McMakerspace Equipment Info',
 'Google Doc listing the equipment available in the McMakerspace.',
 'https://docs.google.com/document/d/1kNjTbBWRYK3Xxpgr73z7EFU3-pTms47MdRyTEex4w_E/edit?usp=sharing',
 'Resources > McMakerspace - the "Equipment Info" card near the top of the page.',
 'document', 60),

('budget_sheet',
 'McMurtry Budget Sheet',
 'The college budget spreadsheet.',
 'https://docs.google.com/spreadsheets/d/1imNFy7cyadxieh7JPcPRvMzB-LgMHozNkRzUX_Lwp1A/edit?usp=sharing',
 'The navigation bar at the top of EVERY page - Resources > Budget Sheet.',
 'document', 70),

-- ---------- Calendars ----------
-- Each calendar has an embed ID (what the grid reads events from) and a
-- subscribe URL (the "Add to My Calendar" button). Change one, change both.

('college_calendar_id',
 'College Calendar - embed ID',
 'Calendar ID, NOT a link. This is what the events grid pulls events from.',
 'mcmsecretary@gmail.com',
 'Home > Calendar - the large month grid.',
 'calendar_id', 80),

('college_calendar_subscribe',
 'College Calendar - subscribe link',
 'Adds the college calendar to a visitor''s own Google Calendar. Note: the cid here is a plain email address rather than the base64 form Google usually generates. It works - do not "fix" it.',
 'https://calendar.google.com/calendar/u/0/r?cid=mcmsecretary@gmail.com',
 'Home > Calendar - the "Add to My Calendar" button under the grid.',
 'calendar_subscribe', 81),

('room_reservations_calendar_id',
 'Room Reservations Calendar - embed ID',
 'Calendar ID, NOT a link. This is what the room bookings grid pulls events from.',
 '2357af8ea321219e69f5f08fe7bd16bf6663c3a5a5f54a9a1f5052972ed93726@group.calendar.google.com',
 'Resources > Room Reservations - the calendar grid at the bottom of the page.',
 'calendar_id', 90),

('room_reservations_calendar_subscribe',
 'Room Reservations Calendar - subscribe link',
 'Adds the room bookings calendar to a visitor''s own Google Calendar. Note: contains /u/1, which opens the visitor''s SECOND signed-in Google account. Change to /u/0 if that causes trouble.',
 'https://calendar.google.com/calendar/u/1?cid=MjM1N2FmOGVhMzIxMjE5ZTY5ZjVmMDhmZTdiZDE2YmY2NjYzYzNhNWE1ZjU0YTlhMWY1MDUyOTcyZWQ5MzcyNkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t',
 'Resources > Room Reservations - the "Add to My Calendar" button under the calendar.',
 'calendar_subscribe', 91),

('pcard_calendar_id',
 'P-Card Availability Calendar - embed ID',
 'Calendar ID, NOT a link. This is what the P-Card availability grid pulls events from. This calendar has no subscribe button on the site.',
 'bdd18a12e18cb6dc90287fb25f54978e20a6c6b9881d8b9300a196ecf12f5e42@group.calendar.google.com',
 'Resources > P-Card Requests - the "P-Card Availability" grid.',
 'calendar_id', 100)

on conflict (key) do nothing;
