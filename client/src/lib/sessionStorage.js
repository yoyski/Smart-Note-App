export function setNote(key, value) {
  try {
    sessionStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Error saving note:", error);
  }
}

export function getNote(key) {
  try {
    const item = sessionStorage.getItem(key);
    return item ? JSON.parse(item) : undefined;
  } catch (error) {
    console.error("Error getting note:", error);
    return undefined;
  }
}
