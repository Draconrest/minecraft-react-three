import { grassImg, dirtImg, glassImg, logImg, woodImg } from "./images.js";
import { NearestFilter, RepeatWrapping, TextureLoader } from "three";

const grassTexture = new TextureLoader().load(grassImg);
const dirtTexture = new TextureLoader().load(dirtImg);
const glassTexture = new TextureLoader().load(glassImg);
const logTexture = new TextureLoader().load(logImg);
const woodTexture = new TextureLoader().load(woodImg);

/* Grass */
grassTexture.wrapS = RepeatWrapping;
grassTexture.wrapT = RepeatWrapping;
grassTexture.magFilter = NearestFilter;
/* Dirt */
dirtTexture.wrapS = RepeatWrapping;
dirtTexture.wrapT = RepeatWrapping;
dirtTexture.magFilter = NearestFilter;
/* Glass */
glassTexture.wrapS = RepeatWrapping;
glassTexture.wrapT = RepeatWrapping;
glassTexture.magFilter = NearestFilter;
/* log */
logTexture.wrapS = RepeatWrapping;
logTexture.wrapT = RepeatWrapping;
logTexture.magFilter = NearestFilter;
/* wood */
woodTexture.wrapS = RepeatWrapping;
woodTexture.wrapT = RepeatWrapping;
woodTexture.magFilter = NearestFilter;

export { grassTexture, dirtTexture, glassTexture, logTexture, woodTexture };
