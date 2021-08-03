export function onClick(id: string, cb: () => void) {
    const el = document.getElementById(id);
    // if (el === null) {
        // console.warn(`onClick: no item with id ${id}`);
        // return
    // }
    el.onclick = cb;
}