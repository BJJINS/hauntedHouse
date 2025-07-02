import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
/**
 * @type {HTMLCanvasElement}
 */
const canvas = document.getElementById("canvas");

const width = window.innerWidth;
const height = window.innerHeight;

const camera = new THREE.PerspectiveCamera(50, width / height);

camera.position.set(0, 6, 10);

const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
});
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(width, height);

// 画布跟随窗口变化
window.onresize = function () {
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
};

const axes = new THREE.AxesHelper(10);
scene.add(axes);

new OrbitControls(camera, canvas);


const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);



function render() {
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}
render();

