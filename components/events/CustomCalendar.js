import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import interactionPlugin from '@fullcalendar/interaction';
import './CustomCalendar.css';

// SVG Icons as components
const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
);

const LocationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
    </svg>
);

const DescriptionIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
);

const ExternalLinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
);

const CustomCalendar = ({ calendarId = 'mcmsecretary@gmail.com' }) => {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [initialView, setInitialView] = useState(null);

    useEffect(() => {
        // Check if the device is mobile
        const isMobile = window.innerWidth <= 768;
        setInitialView(isMobile ? 'dayGridWeek' : 'dayGridMonth');
    }, []);

    const handleEventClick = (info) => {
        info.jsEvent.preventDefault();
        
        setSelectedEvent({
            title: info.event.title,
            start: info.event.start,
            end: info.event.end,
            description: info.event.extendedProps.description || '',
            location: info.event.extendedProps.location || '',
            url: info.event.url
        });
    };

    const closePopup = () => {
        setSelectedEvent(null);
    };

    const formatDate = (date) => {
        if (!date) return '';
        return new Intl.DateTimeFormat('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        }).format(date);
    };

    return (
        <div className="custom-calendar-wrapper">
            {initialView && (
                <FullCalendar
                    plugins={[dayGridPlugin, googleCalendarPlugin, interactionPlugin]}
                    initialView={initialView}
                    googleCalendarApiKey="AIzaSyBNlYH01_9Hc5S1J9vuFmu2nUqBZJNAXxs"
                    events={{
                        googleCalendarId: calendarId
                    }}
                    headerToolbar={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,dayGridWeek'
                    }}
                    buttonText={{
                        today: 'Today',
                        month: 'Month',
                        week: 'Week'
                    }}
                    height="auto"
                    eventDisplay="block"
                    displayEventTime={true}
                    eventTimeFormat={{
                        hour: 'numeric',
                        minute: '2-digit',
                        meridiem: 'short'
                    }}
                    eventClick={handleEventClick}
                />
            )}
            
            {selectedEvent && (
                <div className="event-popup-overlay" onClick={closePopup}>
                    <div className="event-popup" onClick={(e) => e.stopPropagation()}>
                        <button className="event-popup-close" onClick={closePopup}>×</button>
                        
                        <h3 className="event-popup-title">{selectedEvent.title}</h3>
                        
                        <div className="event-popup-details">
                            <div className="event-popup-time">
                                <ClockIcon />
                                <div>
                                    <p><strong>Start:</strong> {formatDate(selectedEvent.start)}</p>
                                    {selectedEvent.end && (
                                        <p><strong>End:</strong> {formatDate(selectedEvent.end)}</p>
                                    )}
                                </div>
                            </div>

                            {selectedEvent.location && (
                                <div className="event-popup-location">
                                    <LocationIcon />
                                    <p>{selectedEvent.location}</p>
                                </div>
                            )}

                            {selectedEvent.description && (
                                <div className="event-popup-description">
                                    <DescriptionIcon />
                                    <p>{selectedEvent.description}</p>
                                </div>
                            )}

                            {selectedEvent.url && (
                                <a
                                    href={selectedEvent.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="event-popup-link"
                                >
                                    <ExternalLinkIcon />
                                    View in Google Calendar
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CustomCalendar;

