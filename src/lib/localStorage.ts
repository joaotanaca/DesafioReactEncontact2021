const storageGet = (item: string) =>
    localStorage.getItem(item)
        ? JSON.parse(localStorage.getItem(item) ?? "[]")
        : null;

const storageSet = (item: string, value: any) =>
    localStorage.setItem(item, JSON.stringify(value));

export { storageGet, storageSet };
