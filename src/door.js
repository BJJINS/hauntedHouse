import * as THREE from "three";
import { textureLoader } from "./loader";
const doorColorTexture = textureLoader.load("/textures/door/color.webp");
doorColorTexture.colorSpace = THREE.SRGBColorSpace;
const doorAlphaTexture = textureLoader.load("/textures/door/alpha.webp");
const doorAmbientOcclusionTexture = textureLoader.load("/textures/door/ambientOcclusion.webp");
const doorHeightTexture = textureLoader.load("/textures/door/height.webp");
const doorMetalnessTexture = textureLoader.load("/textures/door/metalness.webp");
const doorRoughnessTexture = textureLoader.load("/textures/door/roughness.webp");
const doorNormalTexture = textureLoader.load("/textures/door/normal.webp");


const door = new THREE.Mesh(
    new THREE.PlaneGeometry(2.2, 2.2, 100, 100),
    new THREE.MeshStandardMaterial({
        map: doorColorTexture,
        transparent: true,
        alphaMap: doorAlphaTexture,
        aoMap: doorAmbientOcclusionTexture,
        displacementMap: doorHeightTexture,
        displacementScale: 0.1,
        normalMap: doorNormalTexture,
        metalnessMap: doorMetalnessTexture,
        roughnessMap: doorRoughnessTexture
    })
);
door.geometry.setAttribute("uv2", new THREE.Float32BufferAttribute(door.geometry.attributes.uv.array, 2));
door.position.z = 2.001;
door.position.y += 1;

export default door;