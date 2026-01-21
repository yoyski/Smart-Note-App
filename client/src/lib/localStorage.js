export function setNote(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Error saving note:", error);
  }
};

export function getNote(key) {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(localStorage.getItem(key)) : undefined;
  } catch (error) {
    console.error("Error getting note:", error);
    return undefined;
  }
};
