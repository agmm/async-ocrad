// async-ocrad, µLib
// A NodeJs async-await wrapper for ocrad.js

const OCRAD = require('ocrad.js');
const Canvas = require('canvas');
const Image = Canvas.Image;
const fs = require('fs');

async function ocrad(filename) {
    const src = await fs.readFileSync(filename);
    const img = new Image();
    img.src = src;

    const canvas = new Canvas.createCanvas(img.width, img.height);
    const ctx = canvas.getContext('2d');

    ctx.drawImage(img, 0, 0, img.width, img.height);

    const text = await OCRAD(canvas);

    return text;
}

module.exports = ocrad;