import * as THREE from 'three';
const ABR02 = () => {
    const CargarOBJ = () => {
        const Canvas = document.querySelector('.webgl')
        const Scene = new THREE.Scene()
        const Sizes = {
            width: window.innerWidth,
            height: window.innerHeight
        }
        const camera = new THREE.PerspectiveCamera(75, Sizes.width / Sizes.height, 0.1, 100)
        camera.position.set(0, 1, 2)
        Scene.add(camera)

        const renderer = new THREE.WebGL1Renderer({
            canvas: Canvas
        })

        renderer.setSize(Sizes.width, Sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        renderer.shadowMap.enabled = true
        renderer.gammaOuput = true
    };

    return (
        <div>
            {() => CargarOBJ}
        </div>
    )
}
export default ABR02;