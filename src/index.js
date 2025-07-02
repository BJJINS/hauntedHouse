import { camera, scene, renderer, controls } from "./base";
import house from "./house";
import lights from "./light";
import graves from "./grave";
import floor from "./floor";
import ghosts, { ghostRender } from "./ghost";
import { Clock } from "three";
import { floorBushList } from "./bush";
scene.add(...lights, ...ghosts, ...floorBushList, house, floor, graves);
const clock = new Clock();
function render() {
    const elapsedTime = clock.getElapsedTime();
    ghostRender(elapsedTime);
    controls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}
render();

