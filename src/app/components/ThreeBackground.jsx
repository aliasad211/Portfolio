"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // ─── Sizes ────────────────────────────────────────────────────
    const sizes = {
      width:  window.innerWidth,
      height: window.innerHeight,
    };

    // ─── Scene ────────────────────────────────────────────────────
    const scene = new THREE.Scene();

    // ─── Camera ───────────────────────────────────────────────────
    const cameraGroup = new THREE.Group();
    scene.add(cameraGroup);

    const camera = new THREE.PerspectiveCamera(
      35,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.z = 6;
    cameraGroup.add(camera);

    // ─── Renderer ────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    // ─── Light mode helper ────────────────────────────────────────
    const isLight = () =>
      document.documentElement.classList.contains("light");

    // ─── Lights ───────────────────────────────────────────────────
    const dirLight = new THREE.DirectionalLight("#ffffff", 3);
    dirLight.position.set(1, 1, 0);
    scene.add(dirLight);

    const ambientLight = new THREE.AmbientLight("#ffffff", 0.5);
    scene.add(ambientLight);

    // ─── Materials ────────────────────────────────────────────────
    const matParams = () => ({
      metalness: 0.3,
      roughness: 0.4,
    });

    const mat1 = new THREE.MeshStandardMaterial({
      ...matParams(),
      color: new THREE.Color("#00a6fb"),
    });
    const mat2 = new THREE.MeshStandardMaterial({
      ...matParams(),
      color: new THREE.Color("#d400d4"),
    });
    const mat3 = new THREE.MeshStandardMaterial({
      ...matParams(),
      color: new THREE.Color("#00a6fb"),
    });
    const mat4 = new THREE.MeshStandardMaterial({
      ...matParams(),
      color: new THREE.Color("#d400d4"),
    });
    const mat5 = new THREE.MeshStandardMaterial({
      ...matParams(),
      color: new THREE.Color("#00cfff"),
    });

    // ─── Section meshes ───────────────────────────────────────────
    const SECTION_DISTANCE = 6;

    const meshes = [
      new THREE.Mesh(new THREE.TorusKnotGeometry(0.8, 0.28, 100, 16), mat1),
      new THREE.Mesh(new THREE.IcosahedronGeometry(1.0, 1), mat2),
      new THREE.Mesh(new THREE.OctahedronGeometry(1.0, 0), mat3),
      new THREE.Mesh(new THREE.TorusGeometry(0.9, 0.35, 32, 100), mat4),
      new THREE.Mesh(new THREE.ConeGeometry(0.9, 1.8, 32), mat5),
    ];

    meshes.forEach((mesh, i) => {
      mesh.position.y = -SECTION_DISTANCE * i;
      // Alternating left / right
      mesh.position.x = i % 2 === 0 ? 2.2 : -2.2;
      scene.add(mesh);
    });

    // ─── Particles ────────────────────────────────────────────────
    const PARTICLE_COUNT = 800;
    const particlePositions = new Float32Array(PARTICLE_COUNT * 3);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particlePositions[i * 3]     = (Math.random() - 0.5) * 12;
      particlePositions[i * 3 + 1] =
        SECTION_DISTANCE * 0.5 -
        Math.random() * SECTION_DISTANCE * (meshes.length + 1);
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );
    const particleMat = new THREE.PointsMaterial({
      color: new THREE.Color("#94a3b8"),
      sizeAttenuation: true,
      size: 0.025,
      transparent: true,
      opacity: isLight() ? 0.35 : 0.7,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // ─── Scroll tracking ─────────────────────────────────────────
    let scrollY     = window.scrollY;
    let currentSection = 0;

    const onScroll = () => {
      scrollY = window.scrollY;
      const newSection = Math.round(scrollY / window.innerHeight);
      if (newSection !== currentSection) {
        currentSection = newSection;
        // Animate the current section's mesh with a "bounce" feel
        const mesh = meshes[currentSection];
        if (mesh) {
          // Quick spin on section change using a flag
          mesh.userData.spinning = true;
          mesh.userData.spinStart = performance.now();
        }
      }
    };
    window.addEventListener("scroll", onScroll);

    // ─── Mouse parallax ───────────────────────────────────────────
    const cursor = { x: 0, y: 0 };
    const onMouseMove = (e) => {
      cursor.x =  e.clientX / sizes.width  - 0.5;
      cursor.y = -(e.clientY / sizes.height - 0.5);
    };
    window.addEventListener("mousemove", onMouseMove);

    // ─── Resize ───────────────────────────────────────────────────
    const onResize = () => {
      sizes.width  = window.innerWidth;
      sizes.height = window.innerHeight;
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    window.addEventListener("resize", onResize);

    // ─── Theme observer ──────────────────────────────────────────
    const themeObserver = new MutationObserver(() => {
      const light = isLight();
      particleMat.opacity = light ? 0.25 : 0.7;
      dirLight.intensity  = light ? 1.5 : 3;
      [mat1, mat2, mat3, mat4, mat5].forEach((m) => {
        m.metalness = light ? 0.1 : 0.3;
      });
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // ─── Animation loop ───────────────────────────────────────────
    let animId;
    const timer = new THREE.Timer();
    // Lerped camera Y
    let cameraY = 0;
    // Parallax lerp
    let parallaxX = 0;
    let parallaxY = 0;

    function animate() {
      animId = requestAnimationFrame(animate);
      timer.update();
      const delta = timer.getDelta();

      // Camera follows scroll (lerped)
      const targetCameraY = -(scrollY / window.innerHeight) * SECTION_DISTANCE;
      cameraY += (targetCameraY - cameraY) * Math.min(delta * 5, 1);
      camera.position.y = cameraY;

      // Mouse parallax on cameraGroup
      parallaxX += (cursor.x * 0.5 - parallaxX) * delta * 3;
      parallaxY += (cursor.y * 0.5 - parallaxY) * delta * 3;
      cameraGroup.position.x = parallaxX;
      cameraGroup.position.y = parallaxY;

      // Mesh animations
      meshes.forEach((mesh) => {
        // Continuous slow rotation
        mesh.rotation.x += delta * 0.1;
        mesh.rotation.y += delta * 0.12;

        // Section-change spin boost
        if (mesh.userData.spinning) {
          const elapsed2 = performance.now() - mesh.userData.spinStart;
          mesh.rotation.y += Math.sin(elapsed2 * 0.01) * delta * 2;
          if (elapsed2 > 1200) mesh.userData.spinning = false;
        }
      });

      renderer.render(scene, camera);
    }

    animate();

    // ─── Cleanup ─────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      themeObserver.disconnect();
      renderer.dispose();
      meshes.forEach((m) => {
        m.geometry.dispose();
        m.material.dispose();
      });
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
