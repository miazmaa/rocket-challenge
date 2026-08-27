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
const bodyGeometry = new THREE.CylinderGeometry(0.5, 0.5, 2, 16);
const bodyMaterial = new THREE.MeshBasicMaterial({
    color: 0xcccccc
});

const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
scene.add(body);

// Nose Cone
const noseGeometry = new THREE.ConeGeometry(0.5, 1, 16);
const noseMaterial = new THREE.MeshBasicMaterial({
    color: 0xff0000
});

const nose = new THREE.Mesh(noseGeometry, noseMaterial);
nose.position.y = 1.5;
scene.add(nose);

// Flame
const flameGeometry = new THREE.ConeGeometry(0.2, 0.6, 8);
const flameMaterial = new THREE.MeshBasicMaterial({
    color: 0xff8800
});

const flame = new THREE.Mesh(flameGeometry, flameMaterial);
flame.rotation.z = Math.PI;
flame.position.y = -1.3;
scene.add(flame);

// Window (Bonus)
const windowGeometry = new THREE.CircleGeometry(0.18, 32);
const windowMaterial = new THREE.MeshBasicMaterial({
    color: 0x00ccff
});

const rocketWindow = new THREE.Mesh(
    windowGeometry,
    windowMaterial
);

rocketWindow.position.set(0, 0.2, 0.51);
scene.add(rocketWindow);

// Left Fin (Bonus)
const finGeometry = new THREE.BoxGeometry(0.2, 0.6, 0.1);
const finMaterial = new THREE.MeshBasicMaterial({
    color: 0x4444ff
});

const leftFin = new THREE.Mesh(finGeometry, finMaterial);
leftFin.position.set(-0.45, -0.8, 0);
leftFin.rotation.z = -0.4;
scene.add(leftFin);

// Right Fin (Bonus)
const rightFin = new THREE.Mesh(finGeometry, finMaterial);
rightFin.position.set(0.45, -0.8, 0);
rightFin.rotation.z = 0.4;
scene.add(rightFin);

// Stars (Bonus)
for (let i = 0; i < 50; i++) {
    const starGeometry = new THREE.SphereGeometry(0.03, 6, 6);

    const starMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff
    });

    const star = new THREE.Mesh(
        starGeometry,
        starMaterial
    );

    star.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        -5
    );

    scene.add(star);
}

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
