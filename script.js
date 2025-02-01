function updateUTCTime() {
  const utcTimeElement = document.getElementById("utc-time");
  const now = new Date();
  const utcString = now.toUTCString();
  utcTimeElement.textContent = `Current UTC Time: ${utcString}`;
}

// Update the UTC time when the page loads
updateUTCTime();
