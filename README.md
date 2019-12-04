# async-ocrad

> A NodeJS async-await wrapper for ocrad.js

## Install

```sh
npm i async-ocrad
```

## Usage

```js
const text = await ocrad('someImage.png');
```

## Example

```js
const ocrad = require('async-ocrad');

async function simpleExample() {
    const text = await ocrad('someImage.png');
    console.log(text);
}

simpleExample();
```

## Credits

async-await wrapper by: [Arnaldo Gabriel](https://github.com/agmm)

Ocrad.js library by: [Kevin Kwok](https://github.com/antimatter15/ocrad.js)