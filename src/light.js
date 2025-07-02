import * as THREE from "three";

const ambientLight = new THREE.AmbientLight("#b9d5ff", 0.12);
const directionLight = new THREE.DirectionalLight("b9d5ff", 0.12);
directionLight.position.set(4, 4, -2);
directionLight.castShadow = true;

directionLight.shadow.mapSize.width = 256;
directionLight.shadow.mapSize.height = 256;
directionLight.shadow.camera.far = 20;
directionLight.shadow.camera.left = -10;
directionLight.shadow.camera.right = 10;
directionLight.shadow.camera.top = 10;
directionLight.shadow.camera.bottom = -12;

export default [ambientLight, directionLight];