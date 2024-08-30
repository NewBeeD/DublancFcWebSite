export default function formatDateTimeStrings(datetimeString: string): [string, string] {
  const date = new Date(datetimeString);

  // Format for the date (e.g., 'Wed 28 Aug 2024')
  const dateOptions: Intl.DateTimeFormatOptions = {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };
  const formattedDate = new Intl.DateTimeFormat('en-US', dateOptions).format(date);

  // Format for the time (e.g., '3:00 pm')
  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };
  const formattedTime = new Intl.DateTimeFormat('en-US', timeOptions).format(date);

  return [formattedDate, formattedTime];
}
