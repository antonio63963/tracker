export function getDateWhithDash(dateString) {
  return dateString.replaceAll('/', '-')
}
export function getFormatedDate(date) {
  return date.toISOString().slice(0, 10);
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
}

export function getDateMinusDay(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days)
}

