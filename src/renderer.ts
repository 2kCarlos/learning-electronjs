// import { API } from "./preload";

// declare global {
//     interface Window { api : typeof API }
// }

// alert("? ? ?");

const information : HTMLElement | null = document.getElementById("info");

if (information != null)
    information.innerText = "This app is using Chrome (v";// + window.api.chrome() + ", NodeJS (v" + window.api.node() + "), and Electron (v" + window.api.electron() + ")";
