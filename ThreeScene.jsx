import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ThreeScene(){
  const mountRef = useRef(null)

  useEffect(()=>{
    const mount = mountRef.current
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, mount.clientWidth/mount.clientHeight, 0.1, 100)
    camera.position.z = 3

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    renderer.setPixelRatio(window.devicePixelRatio || 1)
    mount.appendChild(renderer.domElement)

    const geometry = new THREE.TorusKnotGeometry(0.8, 0.25, 180, 32)
    const material = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 0.1,
      roughness: 0.05,
      transmission: 0.9,
      thickness: 0.6,
      transparent: true,
      opacity: 0.9,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1
    })
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    const light1 = new THREE.DirectionalLight(0xffffff, 1.2)
    light1.position.set(3, 3, 3)
    scene.add(light1)
    const light2 = new THREE.DirectionalLight(0x66aaff, 0.6)
    light2.position.set(-3, -2, -3)
    scene.add(light2)

    const onResize = ()=>{
      const { clientWidth, clientHeight } = mount
      camera.aspect = clientWidth/clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(clientWidth, clientHeight)
    }
    window.addEventListener('resize', onResize)

    let raf
    const animate = ()=>{
      mesh.rotation.x += 0.004
      mesh.rotation.y += 0.006
      renderer.render(scene, camera)
      raf = requestAnimationFrame(animate)
    }
    animate()

    return ()=>{
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      mount.removeChild(renderer.domElement)
      geometry.dispose(); material.dispose(); renderer.dispose()
    }
  }, [])

  return (
    <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden border border-white/10 shadow-glass" ref={mountRef} />
  )
}
