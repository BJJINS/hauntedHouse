import * as THREE from "three";
import { textureLoader } from "./loader";

const color = textureLoader.load("/textures/bricks/color.webp");
const normal = textureLoader.load("/textures/bricks/normal.webp");
const roughness = textureLoader.load("/textures/bricks/roughness.webp");
const ambientOcclusion = textureLoader.load("/textures/bricks/ambientOcclusion.webp");

const walls = new THREE.Mesh(
    new THREE.BoxGeometry(4, 2.5, 4),
    new THREE.MeshStandardMaterial({
        map: color,
        aoMap: ambientOcclusion,
        normalMap: normal,
        roughnessMap: roughness
    })
);
walls.geometry.setAttribute("uv2", new THREE.Float32BufferAttribute(walls.geometry.attributes.uv.array, 2));
walls.position.y += 1.25;
walls.castShadow = true;


export default walls;