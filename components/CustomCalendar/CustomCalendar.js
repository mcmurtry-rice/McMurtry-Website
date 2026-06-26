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

/* The FullCalendar grid is wrapped in React.memo so it does NOT re-render
 * when the parent component changes selectedEvent state. Without this, every
 * popup open/close would trigger FullCalendar to refetch from Google Calendar
 * and the events would flicker out and back. */
const CalendarGrid = React.memo(function CalendarGrid({
    initialView,
    calendarId,
    onEventClick
}) {
    if (!initialView) return null;
    return (
        <FullCalendar
            plugins={[dayGridPlugin, googleCalendarPlugin, interactionPlugin]}
            initialView={initialView}
            googleCalendarApiKey="AIzaSyBNlYH01_9Hc5S1J9vuFmu2nUqBZJNAXxs"
            events={{ googleCalendarId: calendarId }}
            headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,dayGridWeek'
            }}
            buttonText={{ today: 'Today', month: 'Month', week: 'Week' }}
            height="auto"
            eventDisplay="block"
            displayEventTime={true}
            eventTimeFormat={{
                hour: 'numeric',
                minute: '2-digit',
                meridiem: 'short'
            }}
            eventClick={onEventClick}
        />
    );
});

const CustomCalendar = ({ calendarId = 'mcmsecretary@gmail.com' }) => {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [popupClosing, setPopupClosing] = useState(false);
    const [initialView, setInitialView] = useState(null);

    useEffect(() => {
        const isMobile = window.innerWidth <= 768;
        setInitialView(isMobile ? 'dayGridWeek' : 'dayGridMonth');
    }, []);

    // Stable callback so the memoized CalendarGrid never sees a new prop
    const handleEventClick = React.useCallback((info) => {
        info.jsEvent.preventDefault();
        setSelectedEvent({
            title: info.event.title,
            start: info.event.start,
            end: info.event.end,
            description: info.event.extendedProps.description || '',
            location: info.event.extendedProps.location || '',
            url: info.event.url
        });
        setPopupClosing(false);
    }, []);

    /* Two-stage close: flip `popupClosing` so CSS runs the exit animation,
     * then actually unmount after the animation duration. */
    const closePopup = () => {
        if (!selectedEvent || popupClosing) return;
        setPopupClosing(true);
        setTimeout(() => {
            setSelectedEvent(null);
            setPopupClosing(false);
        }, 220);
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

    const formatDayLabel = (date) =>
        date
            ? new Intl.DateTimeFormat('en-US', {
                  weekday: 'long',
                  month: 'long',
                  day: 'numeric'
              }).format(date)
            : '';

    const formatTime = (date) =>
        date
            ? new Intl.DateTimeFormat('en-US', {
                  hour: 'numeric',
                  minute: '2-digit',
                  hour12: true
              }).format(date)
            : '';

    const sameDay = (a, b) =>
        a && b &&
        a.getFullYear() === b.getFullYear() &&
        a.getMonth() === b.getMonth() &&
        a.getDate() === b.getDate();

    return (
        <div className="custom-calendar-wrapper">
            <CalendarGrid
                initialView={initialView}
                calendarId={calendarId}
                onEventClick={handleEventClick}
            />

            {selectedEvent && (
                <div
                    className={
                        'event-popup-overlay' +
                        (popupClosing ? ' event-popup-overlay-closing' : '')
                    }
                    onClick={closePopup}
                >
                    <div
                        className={
                            'event-popup' +
                            (popupClosing ? ' event-popup-closing' : '')
                        }
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            className="event-popup-close"
                            onClick={closePopup}
                            aria-label="Close event details"
                        >
                            ×
                        </button>

                        <header className="event-popup-header">
                            <p className="event-popup-eyebrow">
                                {formatDayLabel(selectedEvent.start)}
                            </p>
                            <h3 className="event-popup-title">{selectedEvent.title}</h3>
                            <p className="event-popup-time-range">
                                {formatTime(selectedEvent.start)}
                                {selectedEvent.end && (
                                    <React.Fragment>
                                        {' '}
                                        <span className="event-popup-time-sep">→</span>{' '}
                                        {sameDay(selectedEvent.start, selectedEvent.end)
                                            ? formatTime(selectedEvent.end)
                                            : formatDate(selectedEvent.end)}
                                    </React.Fragment>
                                )}
                            </p>
                        </header>

                        <div className="event-popup-body">
                            {selectedEvent.location && (
                                <div className="event-popup-row">
                                    <span className="event-popup-row-icon" aria-hidden="true">
                                        <LocationIcon />
                                    </span>
                                    <span className="event-popup-row-text">
                                        {selectedEvent.location}
                                    </span>
                                </div>
                            )}

                            {selectedEvent.description && (
                                <div className="event-popup-row">
                                    <span className="event-popup-row-icon" aria-hidden="true">
                                        <DescriptionIcon />
                                    </span>
                                    <span className="event-popup-row-text">
                                        {selectedEvent.description}
                                    </span>
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
                                    <span aria-hidden="true" className="event-popup-link-arrow">›</span>
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

