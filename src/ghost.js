import * as THREE from "three";

const ghost1 = new THREE.PointLight('#ff00ff', 6, 3);
const ghost2 = new THREE.PointLight('#00ffff', 6, 3);
const ghost3 = new THREE.PointLight('#ffff00', 6, 3);

ghost1.castShadow = true;
ghost2.castShadow = true;
ghost3.castShadow = true;

ghost1.shadow.mapSize.width = 256;
ghost1.shadow.mapSize.height = 256;
ghost2.shadow.mapSize.width = 256;
ghost2.shadow.mapSize.height = 256;
ghost3.shadow.mapSize.width = 256;
ghost3.shadow.mapSize.height = 256;
ghost1.shadow.camera.far = 3;
ghost2.shadow.camera.far = 3;
ghost3.shadow.camera.far = 3;

export const ghostRender = (elapsedTime) => {
    const angle = elapsedTime * 0.5;
    ghost1.position.x = Math.cos(angle) * 5;
    ghost1.position.z = Math.sin(angle) * 5;
    ghost1.position.y = Math.sin(angle * 3);

    const ghost2Angle = -elapsedTime * 0.32;
    ghost2.position.x = Math.cos(ghost2Angle) * 5;
    ghost2.position.z = Math.sin(ghost2Angle) * 5;
    ghost2.position.y = Math.sin(elapsedTime * 4) + Math.sin(elapsedTime * 2.5);

    const ghost3Angle = - elapsedTime * 0.18;
    ghost3.position.x = Math.cos(ghost3Angle) * (7 + Math.sin(elapsedTime * 0.32));
    ghost3.position.z = Math.sin(ghost3Angle) * (7 + Math.sin(elapsedTime * 0.5));
    ghost3.position.y = Math.sin(elapsedTime * 4) + Math.sin(elapsedTime * 2.5);
};




export default [ghost1, ghost2, ghost3];