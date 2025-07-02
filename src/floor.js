import * as THREE from "three";
import { textureLoader } from "./loader";


const color = textureLoader.load("/textures/grass/color.webp");
const normal = textureLoader.load("/textures/grass/normal.webp");
const roughness = textureLoader.load("/textures/grass/roughness.webp");
const ambientOcclusion = textureLoader.load("/textures/grass/ambientOcclusion.webp");

color.repeat.set(8, 8);
normal.repeat.set(8, 8);
roughness.repeat.set(8, 8);
ambientOcclusion.repeat.set(8, 8);

color.wrapS = THREE.RepeatWrapping;
color.wrapT = THREE.RepeatWrapping;
normal.wrapS = THREE.RepeatWrapping;
normal.wrapT = THREE.RepeatWrapping;
roughness.wrapS = THREE.RepeatWrapping;
roughness.wrapT = THREE.RepeatWrapping;
ambientOcclusion.wrapS = THREE.RepeatWrapping;
ambientOcclusion.wrapT = THREE.RepeatWrapping;


const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(20, 20),
    new THREE.MeshStandardMaterial({
        map: color,
        aoMap: ambientOcclusion,
        normalMap: normal,
        roughnessMap: roughness
    })
);
floor.receiveShadow = true;
floor.geometry.setAttribute("uv2", new THREE.Float32BufferAttribute(floor.geometry.attributes.uv.array, 2));
floor.rotateX(-Math.PI / 2);

export default floor;