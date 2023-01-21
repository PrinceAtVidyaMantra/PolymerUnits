import fs from "fs";

const file = fs.readFileSync("input.txt", "utf-8")

let text = file.trim();

const doReact = (unitA: string, unitB: string): boolean => {
    const asciiUnitA = unitA.charCodeAt(0)
    const asciiUnitB = unitB.charCodeAt(0)

    return Math.abs(asciiUnitA - asciiUnitB) == 32
}



console.log(text.length)
let start = 0

console.time("Alpha")
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

console.timeEnd("Alpha")
console.log(text.length)



