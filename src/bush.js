import * as THREE from "three";
const bushGeometry = new THREE.SphereGeometry(1, 16, 16);
const bushMaterial = new THREE.MeshStandardMaterial({ color: "#89c854" });
const bush1 = new THREE.Mesh(bushGeometry, bushMaterial);
bush1.scale.set(0.5, 0.5, 0.5);
bush1.position.set(0.8, 0.2, 2.2);
bush1.castShadow = true;
const bush2 = new THREE.Mesh(bushGeometry, bushMaterial);
bush2.scale.set(0.25, 0.25, 0.25);
bush2.position.set(1.4, 0.1, 2.1);
bush2.castShadow = true;
const bush3 = new THREE.Mesh(bushGeometry, bushMaterial);
bush3.scale.set(0.4, 0.4, 0.4);
bush3.position.set(-0.8, 0.1, 2.2);
bush3.castShadow = true;
const bush4 = new THREE.Mesh(bushGeometry, bushMaterial);
bush4.scale.set(0.15, 0.15, 0.15);
bush4.position.set(-1, 0.05, 2.6);
bush4.castShadow = true;


export const floorBushList = new Array(30);
for (let i = 0; i < 30; i++) {
    const bush = new THREE.Mesh(bushGeometry, bushMaterial);
    const scale = Math.random() * 0.35 + 0.15;
    bush.scale.set(scale, scale, scale);
    const x = (Math.random() * 6 + 2) * (Math.random() > 0.5 ? 1 : -1);
    const z = (Math.random() * 6 + 2) * (Math.random() > 0.5 ? 1 : -1);
    bush.position.set(x, 0.1, z);
    bush.castShadow = true;
    floorBushList[i] = (bush);
}
export const houseBushList = [bush1, bush2, bush3, bush4];