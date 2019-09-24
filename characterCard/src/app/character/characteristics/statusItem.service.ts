
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
            { id: 'strId',status: 'str', value: strValue },
            { id: 'dexId',status: 'dex', value: dexValue },
            { id: 'powId',status: 'pow', value: powValue },
            { id: 'appId',status: 'app', value: appValue },
            { id: 'conId',status: 'con', value: conValue },
            { id: 'eduId',status: 'edu', value: eduValue },
            { id: 'sizId',status: 'siz', value: sizValue },
            { id: 'intId',status: 'int', value: intValue },
        ]
    }

}