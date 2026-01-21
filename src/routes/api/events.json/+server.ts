import type { RequestHandler } from './$types';
import ical from 'node-ical';

const ICS_URL =
  'https://calendar.google.com/calendar/ical/c_9c8420f291a30bc204033d90832c4e054144f53f37a70966e76f36d3f6058388%40group.calendar.google.com/public/basic.ics';

const TIMEZONE = 'America/Los_Angeles';

function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: TIMEZONE
  }).format(date);
}

function formatTimeRange(start: Date, end?: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZone: TIMEZONE
  };

  const startTime = new Intl.DateTimeFormat('en-US', options).format(start);
  const endTime = end
    ? new Intl.DateTimeFormat('en-US', options).format(end)
    : '';

  return endTime ? `${startTime} - ${endTime}` : startTime;
}

export const GET: RequestHandler = async () => {
  const response = await fetch(ICS_URL);
  const icsText = await response.text();

  const data = ical.parseICS(icsText);
  const now = new Date();

  // Filter for future events
  const upcomingEvents = Object.values(data)
    .filter(
      (e: any) =>
        e.type === 'VEVENT' &&
        e.start instanceof Date &&
        e.start > now
    )
    .sort((a: any, b: any) => a.start - b.start);

  if (upcomingEvents.length === 0) {
    return new Response(JSON.stringify([]), {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const event = upcomingEvents[0];

  const result = [
    {
      name: event.summary ?? '',
      description: event.description ?? '',
      location: event.location ?? '',
      date: formatDate(event.start),
      time: formatTimeRange(event.start, event.end)
    }
  ];

  return new Response(JSON.stringify(result, null, 2), {
    headers: { 'Content-Type': 'application/json' }
  });
};