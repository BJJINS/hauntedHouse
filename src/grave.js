import * as THREE from "three";
const graves = new THREE.Group();
const graveGeometry = new THREE.BoxGeometry(0.6, 0.8, 0.2);
const graveMaterial = new THREE.MeshStandardMaterial({
    color: "#b2b6b1"
});

for (let i = 0; i < 50; i++) {
    const angel = Math.PI * 2 * Math.random();
    const radius = 3 + Math.random() * 6;
    const x = Math.cos(angel) * radius;
    const z = Math.sin(angel) * radius;
    const grave = new THREE.Mesh(graveGeometry, graveMaterial);
    grave.position.set(x, 0.3, z);
    grave.rotation.y = (Math.random() - 0.5) * 0.4;
    grave.rotation.Z = (Math.random() - 0.5) * 0.4;
    grave.castShadow = true;

    graves.add(grave);

}

export default graves;