// Generate a random future date (within the next 30 days)
export function getRandomFutureDate() {
  const now = new Date();

  // Random number of days (1–30)
  const randomDays = Math.floor(Math.random() * 30) + 1;

  // Random hours (0–23) and minutes (0–59)
  const randomHours = Math.floor(Math.random() * 24);
  const randomMinutes = Math.floor(Math.random() * 60);

  // Build the new date
  return new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + randomDays,
    randomHours,
    randomMinutes,
  );
}
