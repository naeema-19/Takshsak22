



const canvas =document.querySelector('');
const scene =new THREE.Scene();

const sizes={
    width:canvas.width,
    height:canvas.height
}

const camera = new THREE.PerspectiveCamera(75,sizes.width/sizes.height,0.1,100)
camera.position.set(0,1,2)
scene.add(camera)

const renderer =new THREE.WebGLRenderer({
    canvas:canvas
})

renderer.setSize(sizes.width,sizes.height)