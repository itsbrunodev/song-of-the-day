export function isToday(date: Date) {
  const now = new Date();

  return (
    date.getDate() === now.getUTCDate() &&
    date.getMonth() === now.getUTCMonth() &&
    date.getFullYear() === now.getUTCFullYear()
  );
}

export function shuffle(arr: any[]) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export const DAY_MS = 1000 * 60 * 60 * 24;

export function dateDiffDays(a: Date, b: Date) {
  return Math.ceil((a.getTime() - b.getTime()) / DAY_MS);
}
