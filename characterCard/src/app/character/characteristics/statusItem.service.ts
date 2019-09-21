
let strValue = random3to18();
let dexValue = random3to18();
let powValue = random3to18();
let conValue = random3to18();
let appValue = random3to18();
let eduValue = random8to18();
let sizValue = random8to18();
let intValue = random8to18();

function random3to18() {
    return Math.floor(Math.random() * 16) + 3;
}
function random8to18() {
    return Math.floor(Math.random() * 11) + 8;
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