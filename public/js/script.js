var canvas = document.getElementById("canvas");
var altBG = document.getElementById("altBG");
var triangle = new TriangleBG({
    canvas: canvas,
    alternateElem: altBG,
    cellHeight: 120,
    cellWidth: 150,
    mouseLight: true,
    mouseLightRadius: 500,
    mouseLightIncrement: 10,
    resizeAdjustment: true,
    variance: 1.3,
    pattern: "x*y",
    baseColor1: {
        baseHue: 0,
        baseSaturation: 0,
        baseLightness: 3
    },
    baseColor2: {
        baseHue: 0,
        baseSaturation: 0,
        baseLightness: 2
    },
    colorDelta: {
        hue: 0,
        lightness: 0,
        saturation: 0
    }
});