let scene, camera, renderer;
const canvas3d = document.getElementById("canvas");

scene = new THREE.Scene();
scene.background = new THREE.Color(0xdddddd);

renderer = new THREE.WebGLRenderer({
    antialias: true
});
renderer.setSize(200, 200);
canvas3d.appendChild(renderer.domElement);

camera = new THREE.PerspectiveCamera(45, 200 / 200, 0.1, 1000);
camera.rotation.x = -0.5;
// camera.position.x = 800;
camera.position.y = 1.9;
camera.position.z = 2.5;

//const controls = new THREE.OrbitControls(camera, renderer.domElement);
//controls.update();

hlight = new THREE.AmbientLight(0x040404, 100);
scene.add(hlight);



//let controls = new THREE.OrbitControls(camera, renderer.domElement);
//controls.addEventListener('change', renderer);
let dice;
let loader = new THREE.GLTFLoader();
loader.load('./3d/Dice.gltf', function (gltf) {
    scene.add(gltf.scene);
    dice = gltf.scene;
    animate();
}, undefined, function (error) {

    console.error(error);

});


function animate() {
    //dice.rotation.x += 0.01;
    dice.rotation.y += 0.02;
    requestAnimationFrame(animate);
    //controls.update();
    renderer.render(scene, camera);
}