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




// Nose Cone



// Flame


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