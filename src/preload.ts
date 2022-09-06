import { contextBridge } from "electron";

// alert("PRE?");

export const API = {
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron
}

contextBridge.exposeInMainWorld("api", API);
