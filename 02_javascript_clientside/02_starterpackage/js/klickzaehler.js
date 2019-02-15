function klickZaehler() {
    if (typeof(Storage) !== "undefined") {
        if (window.localStorage.counterClick) {
            window.localStorage.counterClick = Number(window.localStorage.counterClick) + 1;
        } else {
            window.localStorage.counterClick = 1;
        }
        document.getElementById("howmany").innerHTML = window.localStorage.counterClick;
    } else {
        alert("no local storage");
    }
}