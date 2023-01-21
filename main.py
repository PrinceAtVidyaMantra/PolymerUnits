import math

text = ""

# with open("testinput.txt") as file:
with open("original.txt") as file:
    text = file.readline().strip()


def doReact(unitA: str, unitB: str) -> bool: 
    asciiUnitA = ord(unitA)
    asciiUnitB = ord(unitB)

    return abs(asciiUnitA - asciiUnitB) == 32



print(len(text))
start = 0

while True:
    did_react = False
    for i in range(start, len(text) - 1):
        if doReact(text[i], text[i + 1]):
            start = 0 if i == 0 else i - 1
            text = text[:i] + text[(i + 2):]
            did_react = True
            break

    if not did_react:
        break

print(len(text))

    
        