import fs from "fs";

const file = fs.readFileSync("input.txt", "utf-8")

let text = file.trim();

const doReact = (unitA: string, unitB: string): boolean => {
    const asciiUnitA = unitA.charCodeAt(0)
    const asciiUnitB = unitB.charCodeAt(0)

    return Math.abs(asciiUnitA - asciiUnitB) == 32
}

const fullyReact = (text: string): string => {
    let start = 0
    
    while (true) {

        let did_react = false
        for (let i = start; i < text.length - 1; i += 1) {
            
            if (doReact(text[i], text[i + 1]))
            {
                start = i == 0 ? 0 : i - 1;
                text = text.slice(0, i) + text.slice(i + 2);
                did_react = true
                break;
            }
        }
        
        if (!did_react) break;
    }
    return text
}

console.time("Time Taken")
console.log(text.length)

const map: Record<string, true> = {};

for (let i = 0; i < text.length; ++i) {
    const upper = text[i].toUpperCase();
    map[upper] = true;
}

const lettersAvailable = Object.keys(map);

let leastLength = text.length;

for (let i = 0; i < lettersAvailable.length; ++i) {
    const letter = lettersAvailable[i];
    const replacedText = text.replaceAll(letter, "").replaceAll(String.fromCharCode(letter.charCodeAt(0) + 32), "");


    const fullyReactedText = fullyReact(replacedText);
    if (leastLength > fullyReactedText.length) leastLength = fullyReactedText.length;

    // console.log('For letter ' + letter + ": " + fullyReactedText.length);
}

console.log(leastLength);
console.timeEnd("Time Taken")



