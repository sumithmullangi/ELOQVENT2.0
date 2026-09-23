import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Hero3DCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 8.5;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Main 3D Group
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Central Core: Apple Black Titanium Geometric Icosahedron
    const coreGeometry = new THREE.IcosahedronGeometry(1.6, 1);
    const coreMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x111114,
      emissive: 0x1a1a1e,
      emissiveIntensity: 0.4,
      metalness: 0.95,
      roughness: 0.12,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
      wireframe: false,
      transparent: true,
      opacity: 0.88
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    mainGroup.add(coreMesh);

    // Outer Wireframe Overlay (Apple Pro Blue precision wire)
    const wireGeometry = new THREE.IcosahedronGeometry(1.62, 1);
    const wireMaterial = new THREE.MeshBasicMaterial({
      color: 0x2997ff,
      wireframe: true,
      transparent: true,
      opacity: 0.45
    });
    const wireMesh = new THREE.Mesh(wireGeometry, wireMaterial);
    mainGroup.add(wireMesh);

    // Inner Glowing Core Orb (Apple Desert Titanium Warm Core)
    const innerGeometry = new THREE.SphereGeometry(0.8, 24, 24);
    const innerMaterial = new THREE.MeshBasicMaterial({
      color: 0xd4b28c,
      transparent: true,
      opacity: 0.35
    });
    const innerMesh = new THREE.Mesh(innerGeometry, innerMaterial);
    mainGroup.add(innerMesh);

    // 2. Dual Concentric Orbital Rings (Representing "Two Tracks")
    // Track 1 (Elocution / Apple Pro Blue Ring)
    const ring1Geo = new THREE.TorusGeometry(2.4, 0.022, 16, 120);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0x2997ff,
      emissive: 0x0071e3,
      emissiveIntensity: 0.85,
      metalness: 0.95,
      roughness: 0.1
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    mainGroup.add(ring1);

    // Track 2 (Innovex / Apple Desert Titanium Bronze Ring)
    const ring2Geo = new THREE.TorusGeometry(2.85, 0.02, 16, 120);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0xd4b28c,
      emissive: 0x8c5e32,
      emissiveIntensity: 0.85,
      metalness: 0.95,
      roughness: 0.1
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = Math.PI / 4;
    mainGroup.add(ring2);

    // Satellite nodes on the rings (Apple Finishes: Pro Blue, Desert Titanium, Natural Titanium)
    const nodeGeo = new THREE.SphereGeometry(0.08, 16, 16);
    const node1 = new THREE.Mesh(nodeGeo, new THREE.MeshBasicMaterial({ color: 0x2997ff }));
    const node2 = new THREE.Mesh(nodeGeo, new THREE.MeshBasicMaterial({ color: 0xd4b28c }));
    const node3 = new THREE.Mesh(nodeGeo, new THREE.MeshBasicMaterial({ color: 0xb9b4ad }));
    mainGroup.add(node1, node2, node3);

    // 3. Ambient Particle Constellation (Floating Apple Stardust)
    const particleCount = 200;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const proBlueColor = new THREE.Color(0x2997ff);
    const desertTitaniumColor = new THREE.Color(0xd4b28c);
    const naturalTitaniumColor = new THREE.Color(0xb9b4ad);

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.5 + Math.random() * 4.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = radius * Math.cos(phi);

      const mixVal = Math.random();
      const pColor = mixVal < 0.45 ? proBlueColor : mixVal < 0.8 ? desertTitaniumColor : naturalTitaniumColor;
      particleColors[i * 3] = pColor.r;
      particleColors[i * 3 + 1] = pColor.g;
      particleColors[i * 3 + 2] = pColor.b;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    // Particle texture
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.3, 'rgba(212, 178, 140, 0.8)');
      gradient.addColorStop(1, 'rgba(212, 178, 140, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 32, 32);
    }
    const particleTexture = new THREE.CanvasTexture(canvas);

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.12,
      vertexColors: true,
      map: particleTexture,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // 4. Lighting
    const ambientLight = new THREE.AmbientLight(0x0a0a0e, 1.8);
    scene.add(ambientLight);

    const bluePointLight = new THREE.PointLight(0x2997ff, 3.5, 15);
    bluePointLight.position.set(4, 3, 3);
    scene.add(bluePointLight);

    const desertPointLight = new THREE.PointLight(0xd4b28c, 3.0, 15);
    desertPointLight.position.set(-4, -2, 2);
    scene.add(desertPointLight);

    const topDirectionalLight = new THREE.DirectionalLight(0xf5f5f7, 1.2);
    topDirectionalLight.position.set(0, 5, 5);
    scene.add(topDirectionalLight);

    // Mouse Parallax & Smooth Lerping
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX = (e.clientX / innerWidth - 0.5) * 2;
      mouseY = (e.clientY / innerHeight - 0.5) * 2;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const { innerWidth, innerHeight } = window;
        mouseX = (touch.clientX / innerWidth - 0.5) * 1.5;
        mouseY = (touch.clientY / innerHeight - 0.5) * 1.5;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Smooth cursor parallax interpolation
        targetX += (mouseX * 0.8 - targetX) * 0.05;
        targetY += (-mouseY * 0.6 - targetY) * 0.05;

        mainGroup.rotation.y = elapsedTime * 0.2 + targetX;
        mainGroup.rotation.x = Math.sin(elapsedTime * 0.15) * 0.1 + targetY;
        mainGroup.position.y = Math.sin(elapsedTime * 0.8) * 0.12;

        // Core pulsing
        const pulse = 1 + Math.sin(elapsedTime * 1.5) * 0.03;
        coreMesh.scale.set(pulse, pulse, pulse);
        wireMesh.scale.set(pulse * 1.01, pulse * 1.01, pulse * 1.01);

        // Counter-rotating rings
        ring1.rotation.z = elapsedTime * 0.35;
        ring2.rotation.z = -elapsedTime * 0.28;

        // Orbiting satellites
        const r1 = 2.4;
        const angle1 = elapsedTime * 0.8;
        node1.position.set(
          r1 * Math.cos(angle1),
          r1 * Math.sin(angle1) * Math.cos(Math.PI / 3),
          r1 * Math.sin(angle1) * Math.sin(Math.PI / 3)
        );

        const r2 = 2.85;
        const angle2 = -elapsedTime * 0.6;
        node2.position.set(
          r2 * Math.cos(angle2) * Math.cos(-Math.PI / 4),
          r2 * Math.sin(angle2),
          r2 * Math.cos(angle2) * Math.sin(-Math.PI / 4)
        );

        const angle3 = elapsedTime * 0.5 + Math.PI;
        node3.position.set(
          r2 * Math.cos(angle3),
          r2 * Math.sin(angle3) * 0.8,
          Math.sin(angle3) * 1.5
        );

        // Ambient particles slow rotation
        particles.rotation.y = elapsedTime * 0.04;
        particles.rotation.x = Math.sin(elapsedTime * 0.03) * 0.05;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', handleResize);

      coreGeometry.dispose();
      coreMaterial.dispose();
      wireGeometry.dispose();
      wireMaterial.dispose();
      innerGeometry.dispose();
      innerMaterial.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      nodeGeo.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      particleTexture.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.85
      }}
    />
  );
};
