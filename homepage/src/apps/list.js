import * as singleSpa from "single-spa";
import {matchingPathname, runScript} from "./utils";

const loadReactApp = async () => {
    await runScript('http://localhost:3005/static/js/main.js');
    return window.reactApp;
};


export const registerListApp = () => {
    singleSpa.registerApplication('list', loadReactApp, matchingPathname(['/list']));
};