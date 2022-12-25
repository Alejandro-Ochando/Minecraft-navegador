import { grassImg } from "./images.js"

import { RepeatWrapping, TextureLoader } from "three"

const groundTexture = new TextureLoader().load(grassImg)

groundTexture.wrapS= RepeatWrapping
groundTexture.wrapT= RepeatWrapping

export {groundTexture}