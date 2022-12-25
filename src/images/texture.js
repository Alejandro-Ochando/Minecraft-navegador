import { 
    grassImg,
    trunkImg,
    woodImg,
    glassImg 

} from './images.js'

import { NearestFilter, RepeatWrapping, TextureLoader } from "three"

const groundTexture = new TextureLoader().load(grassImg)
const trunkTexture = new TextureLoader().load(trunkImg)
const woodTexture = new TextureLoader().load(woodImg)
const glassTexture = new TextureLoader().load(glassImg)

groundTexture.wrapS = RepeatWrapping
groundTexture.wrapT = RepeatWrapping

groundTexture.magFilter = NearestFilter
trunkTexture.magFilter = NearestFilter
woodTexture.magFilter = NearestFilter
glassTexture.magFilter = NearestFilter


export {
    groundTexture,
    trunkTexture,
    woodTexture,
    glassTexture 
}