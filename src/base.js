import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
/**
 * @type {HTMLCanvasElement}
 */
const canvas = document.getElementById("canvas");
window.addEventListener("dblclick", () => {
    const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement;
    if (fullscreenElement) {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
        return;
    }
    if (canvas.requestFullscreen) {
        canvas.requestFullscreen();
    } else if (canvas.webkitRequestFullscreen) {
        canvas.webkitRequestFullscreen();
    }
});

const width = window.innerWidth;
const height = window.innerHeight;
const camera = new THREE.PerspectiveCamera(50, width / height);

camera.position.set(0, 3, 7);

const scene = new THREE.Scene();

const FOG_COLOR = "#262837";
const fog = new THREE.Fog(FOG_COLOR, 0.5, 15);
scene.fog = fog;

const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(width, height);
renderer.setClearColor(FOG_COLOR);
// 画布跟随窗口变化
window.onresize = function () {
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
};

new OrbitControls(camera, canvas);

export {
    camera,
    scene,
    renderer
};