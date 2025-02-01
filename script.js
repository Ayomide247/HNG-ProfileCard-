function updateUTCTime() {
  const utcTimeElement = document.getElementById("utc-time");
  const now = new Date();
  const utcString = now.toUTCString();
  utcTimeElement.textContent = `Current UTC Time: ${utcString}`;
}


updateUTCTime();
