import * as THREE from "three";
import { camera, scene, renderer } from "./base";
import house from "./house";
import lights from "./light";
import graves from "./grave";
import floor from "./floor";
scene.add(...lights, house, floor, graves);
function render() {
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}
render();

