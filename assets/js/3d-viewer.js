// assets/js/3d-viewer.js
// Three.js 3D Viewer with interactive controls

let scene, camera, renderer, mesh, material;
let isRotating = false;
let mouseDown = false;
let mouseX = 0, mouseY = 0;
let dimensionsVisible = false;
let annotationsVisible = false;
let dimensionElements = [];
let annotationElements = [];
let measureMode = false;
let measurePoints = [];
let measureElements = [];
let raycaster = new THREE.Raycaster();
let mouse = new THREE.Vector2();

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init3DViewer);
} else {
    init3DViewer();
}

function init3DViewer() {
    const canvas = document.getElementById('canvas-3d');
    if (!canvas) return;

    // Scene setup
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a1a2e);

    // Camera setup
    camera = new THREE.PerspectiveCamera(
        75,
        canvas.clientWidth / canvas.clientHeight,
        0.1,
        1000
    );
    camera.position.z = 5;

    // Renderer setup
    renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight1.position.set(5, 5, 5);
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0x00c6ff, 0.4);
    directionalLight2.position.set(-5, -5, -5);
    scene.add(directionalLight2);

    // Create 3D model
    createMechanicalPart();
    
    // Setup controls
    setupControls();
    
    // Start animation loop
    animate();
    
    // Handle window resize
    window.addEventListener('resize', onWindowResize);
}

function createMechanicalPart() {
    const group = new THREE.Group();

    // Main cylinder body
    const bodyGeometry = new THREE.CylinderGeometry(1.5, 1.5, 2, 32);
    material = new THREE.MeshStandardMaterial({
        color: 0x007bff,
        metalness: 0.5,
        roughness: 0.3
    });
    const body = new THREE.Mesh(bodyGeometry, material);
    group.add(body);

    // Gear teeth
    const toothGeometry = new THREE.BoxGeometry(0.3, 2.2, 0.4);
    const toothMaterial = new THREE.MeshStandardMaterial({
        color: 0x007bff,
        metalness: 0.5,
        roughness: 0.3
    });

    const teethCount = 12;
    for (let i = 0; i < teethCount; i++) {
        const angle = (i / teethCount) * Math.PI * 2;
        const tooth = new THREE.Mesh(toothGeometry, toothMaterial);
        tooth.position.x = Math.cos(angle) * 1.65;
        tooth.position.z = Math.sin(angle) * 1.65;
        tooth.rotation.y = angle;
        group.add(tooth);
    }

    // Center hole
    const holeGeometry = new THREE.CylinderGeometry(0.5, 0.5, 2.3, 32);
    const holeMaterial = new THREE.MeshStandardMaterial({
        color: 0x0a0a0a,
        metalness: 0.8,
        roughness: 0.2
    });
    const hole = new THREE.Mesh(holeGeometry, holeMaterial);
    group.add(hole);

    // Mounting holes
    const mountHoleGeometry = new THREE.CylinderGeometry(0.15, 0.15, 2.3, 16);
    const positions = [
        { x: 0.8, z: 0 },
        { x: -0.8, z: 0 },
        { x: 0, z: 0.8 },
        { x: 0, z: -0.8 }
    ];

    positions.forEach(pos => {
        const mountHole = new THREE.Mesh(mountHoleGeometry, holeMaterial);
        mountHole.position.set(pos.x, 0, pos.z);
        group.add(mountHole);
    });

    mesh = group;
    scene.add(mesh);
    updateStats();
}

function setupControls() {
    const canvas = document.getElementById('canvas-3d');

    // Mouse controls
    canvas.addEventListener('mousedown', (e) => {
        if (measureMode) {
            handleMeasureClick(e);
            return;
        }
        mouseDown = true;
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    canvas.addEventListener('mouseup', () => {
        if (!measureMode) mouseDown = false;
    });

    canvas.addEventListener('mousemove', (e) => {
        if (measureMode) return;
        if (mouseDown) {
            const deltaX = e.clientX - mouseX;
            const deltaY = e.clientY - mouseY;
            mesh.rotation.y += deltaX * 0.01;
            mesh.rotation.x += deltaY * 0.01;
            mouseX = e.clientX;
            mouseY = e.clientY;
        }
    });

    canvas.addEventListener('wheel', (e) => {
        e.preventDefault();
        camera.position.z += e.deltaY * 0.01;
        camera.position.z = Math.max(2, Math.min(10, camera.position.z));
    });

    // Touch controls
    let touchStartX = 0, touchStartY = 0;
    let touchStartDistance = 0, initialCameraZ = camera.position.z;
    let isTwoFingerTouch = false;

    canvas.addEventListener('touchstart', (e) => {
        e.preventDefault();
        if (measureMode && e.touches.length === 1) {
            handleMeasureTouch(e);
            return;
        }
        if (e.touches.length === 1) {
            isTwoFingerTouch = false;
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
        } else if (e.touches.length === 2) {
            isTwoFingerTouch = true;
            const dx = e.touches[0].clientX - e.touches[1].clientX;
            const dy = e.touches[0].clientY - e.touches[1].clientY;
            touchStartDistance = Math.sqrt(dx * dx + dy * dy);
            initialCameraZ = camera.position.z;
        }
    }, { passive: false });

    canvas.addEventListener('touchmove', (e) => {
        e.preventDefault();
        if (measureMode) return;
        if (e.touches.length === 1 && !isTwoFingerTouch) {
            const touchX = e.touches[0].clientX;
            const touchY = e.touches[0].clientY;
            const deltaX = touchX - touchStartX;
            const deltaY = touchY - touchStartY;
            mesh.rotation.y += deltaX * 0.01;
            mesh.rotation.x += deltaY * 0.01;
            touchStartX = touchX;
            touchStartY = touchY;
        } else if (e.touches.length === 2) {
            const dx = e.touches[0].clientX - e.touches[1].clientX;
            const dy = e.touches[0].clientY - e.touches[1].clientY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const zoomFactor = touchStartDistance / distance;
            camera.position.z = initialCameraZ * zoomFactor;
            camera.position.z = Math.max(2, Math.min(10, camera.position.z));
        }
    }, { passive: false });

    canvas.addEventListener('touchend', (e) => {
        if (e.touches.length < 2) isTwoFingerTouch = false;
    });
}

function animate() {
    requestAnimationFrame(animate);
    if (isRotating) mesh.rotation.y += 0.005;
    renderer.render(scene, camera);
    updateFPS();
    if (dimensionsVisible) updateDimensionPositions();
    if (annotationsVisible) updateAnnotationPositions();
}

function onWindowResize() {
    const canvas = document.getElementById('canvas-3d');
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
}

function setRenderMode(mode) {
    document.getElementById('btn-solid').classList.remove('active');
    document.getElementById('btn-wireframe').classList.remove('active');
    document.getElementById(`btn-${mode}`).classList.add('active');
    mesh.traverse(child => {
        if (child.isMesh && child.material) {
            child.material.wireframe = (mode === 'wireframe');
        }
    });
}

function toggleRotation() {
    isRotating = !isRotating;
    document.getElementById('rotation-icon').textContent = isRotating ? '⏸️' : '▶️';
}

function resetCamera() {
    camera.position.set(0, 0, 5);
    mesh.rotation.set(0, 0, 0);
}

function updateColor(hue) {
    const color = new THREE.Color(`hsl(${hue}, 100%, 50%)`);
    mesh.traverse(child => {
        if (child.isMesh && child.material && child.material.color) {
            child.material.color = color;
        }
    });
    document.getElementById('color-value').textContent = `#${color.getHexString()}`;
}

function updateMetalness(value) {
    mesh.traverse(child => {
        if (child.isMesh && child.material && child.material.metalness !== undefined) {
            child.material.metalness = parseFloat(value);
        }
    });
    document.getElementById('metalness-value').textContent = value;
}

function updateStats() {
    let vertices = 0, faces = 0;
    mesh.traverse(child => {
        if (child.isMesh && child.geometry) {
            vertices += child.geometry.attributes.position.count;
            faces += child.geometry.index 
                ? child.geometry.index.count / 3 
                : child.geometry.attributes.position.count / 3;
        }
    });
    document.getElementById('stat-vertices').textContent = vertices.toLocaleString();
    document.getElementById('stat-faces').textContent = Math.floor(faces).toLocaleString();
}

let lastTime = Date.now(), fps = 60;
function updateFPS() {
    const now = Date.now();
    const delta = now - lastTime;
    fps = Math.round(1000 / delta);
    document.getElementById('stat-fps').textContent = fps;
    lastTime = now;
}

function toggleDimensions() {
    dimensionsVisible = !dimensionsVisible;
    const btn = document.getElementById('btn-dimensions');
    if (dimensionsVisible) {
        btn.classList.add('active');
        createDimensions();
    } else {
        btn.classList.remove('active');
        removeDimensions();
    }
}

function createDimensions() {
    const container = document.getElementById('canvas-container');
    const dims = [
        { text: 'Ø 3.30 mm', type: 'diameter' },
        { text: 'H 2.00 mm', type: 'height' },
        { text: 'Ø 1.00 mm', type: 'hole' }
    ];
    
    dims.forEach(d => {
        const el = document.createElement('div');
        el.className = 'dimension-text';
        el.textContent = d.text;
        el.style.display = 'none';
        dimensionElements.push({ element: el, text: d.text, type: d.type });
        container.appendChild(el);
    });
    updateDimensionPositions();
}

function updateDimensionPositions() {
    dimensionElements.forEach(d => {
        let worldPos;
        switch (d.type) {
            case 'diameter': worldPos = new THREE.Vector3(2, 0, 0); break;
            case 'height': worldPos = new THREE.Vector3(2.5, 0, 0); break;
            case 'hole': worldPos = new THREE.Vector3(0, 0, 0); break;
        }
        worldPos.applyMatrix4(mesh.matrixWorld);
        const screenPos = toScreenPosition(worldPos);
        if (screenPos.z < 1) {
            d.element.style.left = screenPos.x + 'px';
            d.element.style.top = screenPos.y + 'px';
            d.element.style.display = 'block';
        } else {
            d.element.style.display = 'none';
        }
    });
}

function removeDimensions() {
    dimensionElements.forEach(d => {
        if (d.element.parentNode) d.element.parentNode.removeChild(d.element);
    });
    dimensionElements = [];
}

function toggleAnnotations() {
    annotationsVisible = !annotationsVisible;
    const btn = document.getElementById('btn-annotations');
    if (annotationsVisible) {
        btn.classList.add('active');
        createAnnotations();
    } else {
        btn.classList.remove('active');
        removeAnnotations();
    }
}

function createAnnotations() {
    const container = document.getElementById('canvas-container');
    const annotations = [
        { position: new THREE.Vector3(1.65, 0.5, 0), label: 'Gear teeth (12x)', color: '#ff3b30' },
        { position: new THREE.Vector3(0, 0, 0), label: 'Center hole Ø1.0mm', color: '#ff9500' },
        { position: new THREE.Vector3(0.8, 0.8, 0), label: 'Mounting hole M3', color: '#34c759' }
    ];
    
    annotations.forEach(a => {
        const div = document.createElement('div');
        div.className = 'annotation';
        const dot = document.createElement('div');
        dot.className = 'annotation-dot';
        dot.style.background = a.color;
        const label = document.createElement('div');
        label.className = 'annotation-label';
        label.style.background = a.color;
        label.textContent = a.label;
        div.appendChild(dot);
        div.appendChild(label);
        annotationElements.push({ element: div, position: a.position });
        container.appendChild(div);
    });
    updateAnnotationPositions();
}

function updateAnnotationPositions() {
    annotationElements.forEach(a => {
        const worldPos = a.position.clone();
        worldPos.applyMatrix4(mesh.matrixWorld);
        const screenPos = toScreenPosition(worldPos);
        if (screenPos.z < 1) {
            a.element.style.left = (screenPos.x - 6) + 'px';
            a.element.style.top = (screenPos.y - 6) + 'px';
            a.element.style.display = 'flex';
        } else {
            a.element.style.display = 'none';
        }
    });
}

function removeAnnotations() {
    annotationElements.forEach(a => {
        if (a.element.parentNode) a.element.parentNode.removeChild(a.element);
    });
    annotationElements = [];
}

function toScreenPosition(position) {
    const vector = position.clone();
    vector.project(camera);
    const canvas = document.getElementById('canvas-3d');
    const widthHalf = canvas.clientWidth / 2;
    const heightHalf = canvas.clientHeight / 2;
    return {
        x: (vector.x * widthHalf) + widthHalf,
        y: -(vector.y * heightHalf) + heightHalf,
        z: vector.z
    };
}

function exportScreenshot() {
    renderer.render(scene, camera);
    const canvas = document.getElementById('canvas-3d');
    canvas.toBlob(blob => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = 'model-3d-screenshot.png';
        link.href = url;
        link.click();
        URL.revokeObjectURL(url);
        showExportNotification('Screenshot PNG downloaded!');
    });
}

function exportModel() {
    let output = 'solid model\n';
    mesh.traverse(child => {
        if (child.isMesh && child.geometry) {
            const geo = child.geometry;
            const mat = child.matrixWorld;
            const pos = geo.attributes.position;
            const idx = geo.index;
            if (idx) {
                for (let i = 0; i < idx.count; i += 3) {
                    const v1 = new THREE.Vector3().fromBufferAttribute(pos, idx.getX(i));
                    const v2 = new THREE.Vector3().fromBufferAttribute(pos, idx.getX(i + 1));
                    const v3 = new THREE.Vector3().fromBufferAttribute(pos, idx.getX(i + 2));
                    v1.applyMatrix4(mat);
                    v2.applyMatrix4(mat);
                    v3.applyMatrix4(mat);
                    const n = new THREE.Vector3()
                        .subVectors(v2, v1)
                        .cross(new THREE.Vector3().subVectors(v3, v1))
                        .normalize();
                    output += `facet normal ${n.x} ${n.y} ${n.z}\n`;
                    output += ' outer loop\n';
                    output += `  vertex ${v1.x} ${v1.y} ${v1.z}\n`;
                    output += `  vertex ${v2.x} ${v2.y} ${v2.z}\n`;
                    output += `  vertex ${v3.x} ${v3.y} ${v3.z}\n`;
                    output += ' endloop\nendfacet\n';
                }
            }
        }
    });
    output += 'endsolid model\n';
    
    const blob = new Blob([output], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = 'model-3d.stl';
    link.href = url;
    link.click();
    URL.revokeObjectURL(url);
    showExportNotification('STL model downloaded!');
}

function showExportNotification(message) {
    const notification = document.getElementById('export-notification');
    notification.querySelector('div:last-child').textContent = message;
    notification.classList.add('show');
    setTimeout(() => notification.classList.remove('show'), 3000);
}

function toggleMeasureMode() {
    measureMode = !measureMode;
    const btn = document.getElementById('btn-measure');
    const canvas = document.getElementById('canvas-3d');
    const container = document.getElementById('canvas-container');
    
    if (measureMode) {
        btn.classList.add('active');
        canvas.style.cursor = 'crosshair';
        const instruction = document.createElement('div');
        instruction.className = 'measure-instruction';
        instruction.id = 'measure-instruction';
        instruction.innerHTML = '<div style="font-size:2rem;margin-bottom:8px">📐</div><div>Click 2 points on the model to measure distance</div>';
        container.appendChild(instruction);
        isRotating = false;
        document.getElementById('rotation-icon').textContent = '▶️';
    } else {
        btn.classList.remove('active');
        canvas.style.cursor = 'grab';
        clearMeasurements();
        const instruction = document.getElementById('measure-instruction');
        if (instruction) instruction.remove();
    }
}

function handleMeasureClick(event) {
    const canvas = document.getElementById('canvas-3d');
    const rect = canvas.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    performRaycast(event.clientX, event.clientY);
}

function handleMeasureTouch(event) {
    const canvas = document.getElementById('canvas-3d');
    const rect = canvas.getBoundingClientRect();
    const touch = event.touches[0];
    mouse.x = ((touch.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((touch.clientY - rect.top) / rect.height) * 2 + 1;
    performRaycast(touch.clientX, touch.clientY);
}

function performRaycast(screenX, screenY) {
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObject(mesh, true);
    if (intersects.length > 0) {
        const point = intersects[0].point;
        const screenPos = toScreenPosition(point);
        addMeasurePoint(point, screenPos, screenX, screenY);
        if (measurePoints.length === 2) {
            calculateAndDisplayDistance();
        }
    }
}

function addMeasurePoint(worldPoint, screenPos, clickX, clickY) {
    const container = document.getElementById('canvas-container');
    measurePoints.push({ world: worldPoint.clone(), screen: { x: clickX, y: clickY } });
    const pointEl = document.createElement('div');
    pointEl.className = 'measure-point';
    pointEl.style.left = screenPos.x + 'px';
    pointEl.style.top = screenPos.y + 'px';
    container.appendChild(pointEl);
    measureElements.push(pointEl);
    if (measurePoints.length === 1) {
        const instruction = document.getElementById('measure-instruction');
        if (instruction) instruction.style.display = 'none';
    }
}

function calculateAndDisplayDistance() {
    const point1 = measurePoints[0].world;
    const point2 = measurePoints[1].world;
    const distance = point1.distanceTo(point2);
    const distanceMM = distance.toFixed(2);
    const midpoint = new THREE.Vector3().addVectors(point1, point2).multiplyScalar(0.5);
    const midScreen = toScreenPosition(midpoint);
    const container = document.getElementById('canvas-container');
    const p1 = toScreenPosition(point1);
    const p2 = toScreenPosition(point2);
    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    const length = Math.sqrt(dx * dx + dy * dy);
    const angle = Math.atan2(dy, dx) * (180 / Math.PI);
    const line = document.createElement('div');
    line.className = 'measure-line';
    line.style.left = p1.x + 'px';
    line.style.top = p1.y + 'px';
    line.style.width = length + 'px';
    line.style.transform = `rotate(${angle}deg)`;
    container.appendChild(line);
    measureElements.push(line);
    const result = document.createElement('div');
    result.className = 'measure-result';
    result.textContent = `${distanceMM} mm`;
    result.style.left = midScreen.x + 'px';
    result.style.top = midScreen.y + 'px';
    container.appendChild(result);
    measureElements.push(result);
    const clearBtn = document.createElement('button');
    clearBtn.className = 'measure-clear-btn';
    clearBtn.textContent = '🗑️ Clear measurement';
    clearBtn.onclick = clearMeasurements;
    container.appendChild(clearBtn);
    measureElements.push(clearBtn);
}

function clearMeasurements() {
    measurePoints = [];
    measureElements.forEach(el => {
        if (el.parentNode) el.parentNode.removeChild(el);
    });
    measureElements = [];
    const instruction = document.getElementById('measure-instruction');
    if (instruction) instruction.style.display = 'block';
}