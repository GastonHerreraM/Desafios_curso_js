const userArray = [
    { name: "admin", password: "admin"},
    { name: "Dr. Lesko", password: "SuperMutant77"},
    { name: "Lt. Kowalski", password: "Conqueror"}
];

let inventory = [
    { 
        name: "Canned food", 
        stock:3450
    },
    {
        name: "Pork chops",
        stock:477
    },
    {
        name: "Fruit",
        stock:712
    },
    {
        name: "Potato",
        stock:298
    },
    {
        name: "Plasma gun",
        stock:42
    },
    {
        name: "Institute laser",
        stock: 7
    },
    {
        name: "Double-barrel shotgun",
        stock: 29
    },
    {
        name: "Hunting rifle",
        stock: 14
    },
    {
        name: "10mm pistol",
        stock: 41
    }
];

let aText = new Array(
    "ROBCO INDUSTRIES UNIFIED OPERATION SYSTEM",
    "COPYRIGHT 2075-2077 ROBCO INDUSTRIES",
    "-SERVER 6-<br>",
    "-Robco Management System-",
    "==========================================",
    "RobcOS v.85",
    "(c)2076 Robco",
    "==========================================<br>",
    "Autorized personal only",
    "Please, identify yourself"
);

let iSpeed = 25;
let iIndex = 0;
let iArrLength = aText[0].length;
let iScrollAt = 20;

let iTextPos = 0;
let sContents = '';
let iRow;

function typewriter() {
    sContents = ' ';
    iRow = Math.max(0, iIndex - iScrollAt);
    let destination = document.getElementById("typedtext");

    while (iRow < iIndex) {
        sContents += aText[iRow++] + `</br>`;
    }
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "█";
    if (iTextPos++ == iArrLength) {
        iTextPos = 0;
        iIndex++;
        if (iIndex != aText.length) {
            iArrLength = aText[iIndex].length;
            setTimeout("typewriter()", 5);
        }
    } else {
        setTimeout("typewriter()", iSpeed);
    }
}

setTimeout("login()",9500, 0)

function login() {
    let typedtUser = prompt("Identify yourself:")
    let typedPassword = prompt("Your password:")
    let currentUser = userArray.filter( user => user.name == typedtUser && user.password == typedPassword)
    currentUser.length ? console.log('Hello'): console.log('Wrong data')
    if (currentUser != false) {
        let destination = document.getElementById("typedtext")
        destination.innerHTML = aText.push( `</br>` + "access granted")
        return newMenu()
    } else {
        let destination = document.getElementById("typedtext")
        destination.innerHTML = aText.push("<br>access denied <br> Terminal Locked")
    }
    return typewriter()
}

function newMenu() {
    typewriter()
    let destination = document.getElementById("typedtext")
    destination.innerHTML = aText.push(`</br>` + "What would you like to do" + `</br>` + "1- Check inventory" + `</br>` + "2- Add to inventory" + `</br>` + "3- Search a vault" + `</br>` + "4- Type EX...")
    dataCorrupted()
}

function dataCorrupted(){
    let destination = document.getElementById("typedtext")
    destination.innerHTML += aText.push("data corrupted")
}