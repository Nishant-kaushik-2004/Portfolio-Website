"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three-stdlib";

const Particle3DUniverse = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const themeRef = useRef<"light" | "dark">("light");

  useEffect(() => {
    // Detect current theme
    const detectTheme = () => {
      return document.documentElement.classList.contains("dark") 
        ? "dark" 
        : "light";
    };
    
    themeRef.current = detectTheme();
    
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true 
    });

    // Renderer config
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    const mountNode = mountRef.current;
    if (mountNode) {
      mountNode.appendChild(renderer.domElement);
    }

    const initialMountNode = mountNode;

    // Camera position
    camera.position.z = 30;

    // Controls (disable zoom)
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;

    // Particle system setup
    const particleCount = 2000;
    const particles = new THREE.BufferGeometry();
    const posArray = new Float32Array(particleCount * 3);
    const colorArray = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 100;
      posArray[i + 1] = (Math.random() - 0.5) * 100;
      posArray[i + 2] = (Math.random() - 0.5) * 100;

      // Adjust colors based on theme
      if (themeRef.current === "dark") {
        // Dark mode: cool blue tones
        colorArray[i] = 0.2 + Math.random() * 0.3;     // R
        colorArray[i + 1] = 0.3 + Math.random() * 0.5; // G
        colorArray[i + 2] = 0.8 + Math.random() * 0.2; // B
      } else {
        // Light mode: subtle warm tones
        colorArray[i] = 0.8 + Math.random() * 0.2;     // R
        colorArray[i + 1] = 0.6 + Math.random() * 0.3; // G
        colorArray[i + 2] = 0.4 + Math.random() * 0.2; // B
      }
    }

    particles.setAttribute("position", new THREE.BufferAttribute(posArray, 3));
    particles.setAttribute("color", new THREE.BufferAttribute(colorArray, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.1,
      vertexColors: true,
      transparent: true,
      opacity: themeRef.current === "dark" ? 0.4 : 0.2,
      blending: THREE.NormalBlending,
      sizeAttenuation: true
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    // Animation loop
    const clock = new THREE.Clock();
    let frameId: number;

    const animate = () => {
      frameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Update particle positions
      const positions = particles.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i] += Math.sin(elapsedTime * 0.3 + i) * 0.05;
        positions[i + 1] += Math.cos(elapsedTime * 0.2 + i) * 0.05;
        positions[i + 2] += Math.sin(elapsedTime * 0.4 + i) * 0.05;
      }
      particles.attributes.position.needsUpdate = true;

      particleSystem.rotation.y = elapsedTime * 0.1;
      controls.update();
      renderer.render(scene, camera);
    };

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    
    // Theme change observer
    const observer = new MutationObserver(() => {
      themeRef.current = detectTheme();
      
      // Update particle colors
      const colors = particles.attributes.color.array;
      for (let i = 0; i < colors.length; i += 3) {
        if (themeRef.current === "dark") {
          colors[i] = 0.2 + Math.random() * 0.3;
          colors[i + 1] = 0.3 + Math.random() * 0.5;
          colors[i + 2] = 0.8 + Math.random() * 0.2;
        } else {
          colors[i] = 0.8 + Math.random() * 0.2;
          colors[i + 1] = 0.6 + Math.random() * 0.3;
          colors[i + 2] = 0.4 + Math.random() * 0.2;
        }
      }
      particles.attributes.color.needsUpdate = true;
      
      // Update material opacity
      particleMaterial.opacity = themeRef.current === "dark" ? 0.4 : 0.2;
      particleMaterial.needsUpdate = true;
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"]
    });

    window.addEventListener("resize", handleResize);
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
      cancelAnimationFrame(frameId);

      if (initialMountNode && initialMountNode.contains(renderer.domElement)) {
        initialMountNode.removeChild(renderer.domElement);
      }

      scene.remove(particleSystem);
      particles.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      style={{ 
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none"
      }} 
    />
  );
};

export default Particle3DUniverse;