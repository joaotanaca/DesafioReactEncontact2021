const storageGet = (item: string) =>
    JSON.parse(localStorage.getItem(item) || "[]");

const storageSet = (item: string, value: any) =>
    localStorage.setItem(item, JSON.stringify(value));

export { storageGet, storageSet };
