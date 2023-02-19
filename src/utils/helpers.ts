export function randomHexColorInRange(min?: string, max?: string): string {
  const minRange = min ?? "#8DCBE6";
  const maxRange = max ?? "#937DC2";
  // Convert the hexadecimal color strings to decimal numbers
  const minDecimal = parseInt(minRange.replace(/^#/, ""), 16);
  const maxDecimal = parseInt(maxRange.replace(/^#/, ""), 16);

  // Generate a random number within the range of the decimal values
  const randomDecimal = Math.floor(
    Math.random() * (maxDecimal - minDecimal + 1) + minDecimal
  );

  // Convert the random decimal number back to a hexadecimal string
  const randomHex = randomDecimal.toString(16);

  // Pad the hexadecimal string with zeroes if necessary
  const paddedHex = `#${"0".repeat(6 - randomHex.length)}${randomHex}`;

  return paddedHex;
}

export function getDurationFromDate(date: Date): string {
  const today = new Date();
  if (date.toDateString() === today.toDateString()) {
    return "today";
  }
  const diffTime = Math.abs(today.getTime() - date.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const years = Math.floor(diffDays / 365);
  const months = Math.floor((diffDays % 365) / 30);
  const days = diffDays % 30;

  let result = "";
  if (years > 0) {
    result += `${years} year${years > 1 ? "s" : ""}`;
  }
  if (months > 0) {
    result += `${months} month${months > 1 ? "s" : ""}`;
  }
  if (days > 0) {
    result += `${days} day${days > 1 ? "s" : ""}`;
  }
  return result.trim();
}

export function generateRandomId(length: number): string {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

export function formatDate(date: Date): string {
  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}
