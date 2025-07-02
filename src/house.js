import * as THREE from "three";
import door from "./door";
import walls from "./walls";
import { houseBushList } from "./bush";
const house = new THREE.Group();

const roof = new THREE.Mesh(
    new THREE.ConeGeometry(3.5, 1, 4),
    new THREE.MeshStandardMaterial({ color: "#b35f45" })
);
roof.rotateY(Math.PI / 4);
roof.position.y += 3;
const doorLight = new THREE.PointLight("#ff7d46", 3, 7);
doorLight.position.set(0, 2.2, 2.7);
doorLight.castShadow = true;
doorLight.shadow.mapSize.width = 256;
doorLight.shadow.mapSize.height = 256;
doorLight.shadow.camera.far = 7;



house.add(
    walls,
    roof,
    door,
    doorLight,
    ...houseBushList
);
export default house;