import * as THREE from "three";
//　three.jsの処理を書いていく
export default class ArtworkGL{
  constructor(props){
    this.props = props;
    this.init();
  }

  init(){
    const scene = new THREE.Scene()

    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({color: 0xff0000})
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    const sizes = {
      width: 800,
      height: 600
    }

    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
    camera.position.z = 3
    scene.add(camera)

    const renderer = new THREE.WebGLRenderer({
      canvas: this.props.$canvas
    })
    renderer.setSize(sizes.width, sizes.height)

    renderer.render(scene, camera)

    // window.addEventListener("resize", this.resize.bind(this));
    // this.loop();
  }

  loop(){

  }
}