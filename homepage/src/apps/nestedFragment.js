import * as singleSpa from "single-spa";
import {matchingPathname, runScript} from "./utils";

const loadReactApp = async () => {
    await runScript('http://localhost:3004/static/js/main.js');
    return window.reactApp;
};


export const registerNestedApp = () => {
    singleSpa.registerApplication('nestedFragment', loadReactApp, matchingPathname(['/nested']));
};