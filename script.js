const petalCountInput = document.getElementById("petal-count")
const petalWidthInput = document.getElementById("petal-width")
const petalHeightInput = document.getElementById("petal-height")
const petalColorInput = document.getElementById("petal-color")
const circleColorInput = document.getElementById("circle-color")
const rndBtn = document.getElementById("rnd")
const petalGroup = document.getElementById("petals")
const petal = petalGroup.firstElementChild
const circle = document.getElementById("circle")
const ctx = document.createElement("canvas").getContext("2d")

petalCountInput.oninput = () => {
    setPetalCount(petalCountInput.valueAsNumber)
}

petalWidthInput.oninput = petalHeightInput.oninput = () => {
    setPetalSize(petalWidthInput.valueAsNumber, petalHeightInput.valueAsNumber)
}

petalColorInput.oninput = () => {
    setPetalColor(petalColorInput.value)
}

circleColorInput.oninput = () => {
    setCircleColor(circleColorInput.value)
}

rndBtn.onclick = () => {
    petalCountInput.value = rnd(+petalCountInput.min, +petalCountInput.max)
    petalWidthInput.value = rnd(+petalWidthInput.min, +petalWidthInput.max)
    petalHeightInput.value = rnd(+petalHeightInput.min, +petalHeightInput.max)
    petalColorInput.value = rndColor()
    circleColorInput.value = rndColor()
    setPetalCount(petalCountInput.valueAsNumber)
    setPetalSize(petalWidthInput.valueAsNumber, petalHeightInput.valueAsNumber)
    setPetalColor(petalColorInput.value)
    setCircleColor(circleColorInput.value)
}

setPetalCount(petalCountInput.valueAsNumber)

function rnd(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function rndColor() {
    const hsl = `hsl(${rnd(0, 359)}, ${rnd(60, 100)}%, ${rnd(40, 97)}%)`

    ctx.fillStyle = hsl 

    const hex = ctx.fillStyle

    return hex
}

function setPetalSize(width, height) {
    const d = `M ${200 - width / 2},160 q ${width / 2},-${20 + height * 2} ${width},0`
    for (const petal of petalGroup.children) {
        petal.setAttribute("d", d)
    }
    petal.setAttribute("d", d)
}

function setPetalColor(color) {
    for (const petal of petalGroup.children) {
        petal.setAttribute("fill", color)
    }
    petal.setAttribute("fill", color)
}

function setCircleColor(color) {
    circle.setAttribute("fill", color)
}

function setPetalCount(count) {
    const petals = Array(count)

    for (let i = 0; i < petals.length; i++) {
        petals[i] = petal.cloneNode()
        petals[i].style.rotate = i / petals.length + "turn"
    }

    petalGroup.replaceChildren(...petals)
}