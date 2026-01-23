export function formatDate(date) {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function checkDate(note) {
  const isUpdated = note.updatedAt && note.updatedAt !== note.createdAt;
  const displayDate = isUpdated ? note.updatedAt : note.createdAt;

  return displayDate;
}
