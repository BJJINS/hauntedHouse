import * as THREE from "three";

const ambientLight = new THREE.AmbientLight("#b9d5ff", 0.12);
const directionLight = new THREE.DirectionalLight("b9d5ff", 0.12);
directionLight.position.set(4, 5, -2);

export default [ambientLight, directionLight];