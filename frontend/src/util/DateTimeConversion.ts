

export default function formatDateTime(datetimeString: string) {
  const date = new Date(datetimeString);

  const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
  };

  return new Intl.DateTimeFormat('en-US', options).format(date);
}

// Example usage:
console.log(formatDateTime("2024-07-31T11:29:00Z")); // Output: "Jul 31, 2024, 11:29 AM"
