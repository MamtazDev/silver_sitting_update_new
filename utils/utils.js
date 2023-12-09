export const formatDate = (dateString) => {
  const date = new Date(dateString);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return [`${day}`, `${month} ${year}`];
};

export const formatMessageTime = (timestamp) => {
  let time;

  const parsedTimestamp = new Date(timestamp);
  const currentTime = new Date();
  const timeDifference = currentTime - parsedTimestamp;

  const seconds = Math.floor(timeDifference / 1000);
  if (seconds < 60) {
    time = `${seconds} seconds ago`;
    return time;
  }

  const minutes = Math.floor(timeDifference / (1000 * 60));
  if (minutes < 60) {
    time = `${minutes} minutes ago`;
    return time;
  }

  const hours = Math.floor(timeDifference / (1000 * 60 * 60));
  if (hours < 24) {
    time = `${hours} hours ago`;
    return time;
  }

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  if (days < 30) {
    time = `${days} days ago`;
    return time;
  }

  const months = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30));
  if (months < 12) {
    time = `${months} months ago`;
    return time;
  }

  const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));
  time = `${years} years ago`;

  return time;
};
