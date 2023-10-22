export function saveToLocalStorage(key: string, data: any) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function getFromLocalStorage(key: string): any {
  const storedData = localStorage.getItem(key);
  return storedData ? JSON.parse(storedData) : null;
}

export function removeFromLocalStorage(key: string) {
  localStorage.removeItem(key);
}
