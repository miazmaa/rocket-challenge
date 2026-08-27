// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000022);
document.body.appendChild(renderer.domElement);

// Rocket Body
const bodyGeometry = new THREE.CylinderGeometry(1, 1, 2, 10);
const bodyMaterial = new THREE.MeshBasicMaterial({
    color: 0x00ffff
});
const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
scene.add(body);



// Nose Cone
const noseGeometry = new THREE.ConeGeometry(1, 1, 5);
const noseMaterial = new THREE.MeshBasicMaterial({
    color: 0x000080
});
const nose = new THREE.Mesh(noseGeometry, noseMaterial);
nose.position.y = 1.5;
scene.add(nose);


// Flame
const flameGeometry = new THREE.ConeGeometry(0.8,1,8,16);
const flameMaterial = new THREE.MeshBasicMaterial({ color: 0xff8800});
const flame = new THREE.Mesh(flameGeometry, flameMaterial);
scene.add(flame);
flame.rotation.z = Math.PI;
flame.position.y = -1.5;

// Window (Bonus)



// Left Fin (Bonus)



// Right Fin (Bonus)


// Stars (Bonus)


// Camera Position
camera.position.z = 5;

// Single Render (No Animation)
renderer.render(scene, camera);

// Resize Support
window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(
        window.innerWidth,
        window.innerHeight
    );

    renderer.render(scene, camera);
});