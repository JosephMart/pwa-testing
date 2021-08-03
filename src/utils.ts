export function onClick(id: string, cb: (ev: MouseEvent) => any) {
    const el = document.getElementById(id);
    if (el === null) {
        console.warn(`onClick: no item with id ${id}`);
        return
    }
    el.onclick = cb;
}

export function log(txt: any) {
    var newLine = document.createElement("li");
    newLine.innerHTML = (typeof txt === 'string') ? txt : JSON.stringify(txt, null, 4);
    document.querySelector('#console').appendChild(newLine);
}
