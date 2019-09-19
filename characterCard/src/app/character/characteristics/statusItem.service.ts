import { isNgTemplate } from '@angular/compiler';

let strValue = random18();
let dexValue = random18();
let powValue = random18();
let conValue = random18();
let appValue = random18();
let eduValue = random18() + 3;
let sizValue = intSizRandom();
let intValue = intSizRandom();

function intSizRandom() {
    return Math.floor(Math.random() * 12) + 1 + 6;
}
function random18() {
    return Math.floor(Math.random() * 18) + 1;
}

export class StatusItemService {

    getItems() {
        return [
            { status: 'str', value: strValue },
            { status: 'dex', value: dexValue },
            { status: 'pow', value: powValue },
            { status: 'app', value: appValue },
            { status: 'con', value: conValue },
            { status: 'edu', value: eduValue },
            { status: 'siz', value: sizValue },
            { status: 'int', value: intValue },
        ]
    }

}