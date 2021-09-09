import './style.css'
import * as three from './node_modules/three/build/three.module'
import  { GLTFLoader } from './node_modules/three/examples/jsm/loaders/GLTFLoader'
//import { OrbitControls } from './node_modules/three/examples/jsm/controls/OrbitControls'


var scene = new three.Scene();

var camera =  new three.PerspectiveCamera(75, window.innerWidth / window.innerHeight ,0.1, 10000);

var renderer = new three.WebGLRenderer({
  canvas : document.querySelector('#bg'),
});

//scene.background = new three.Color(0xffffff);

var light = new three.AmbientLight(0xffffff);
scene.add(light);

var loader = new  GLTFLoader();

loader.load('./MacBook pro.glb', 
	function ( gltf ) {

		scene.add( gltf.scene );

    gltf.scene.add(sound);
       
      var mesh = gltf.scene    
    
  this.tl = new TimelineMax().delay(.3);
  this.tl.to(this.mesh.scale , 1,{x:2 , ease: Expo.easeOut});
  this.tl.to(this.mesh.scale , .5,{x:.5 , ease: Expo.easeOut});
  this.tl.to(this.mesh.position , .5,{x:2 , ease: Expo.easeOut});
  this.tl.to(this.mesh.rotation , .5,{y: Math.PI * 5 , ease: Expo.easeOut});




      
    },
	// called while loading is progressing
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	}

  );



// create an AudioListener and add it to the camera
const listener = new three.AudioListener();
camera.add( listener );

// create the PositionalAudio object (passing in the listener)
const sound = new three.PositionalAudio( listener );

// load a sound and set it as the PositionalAudio object's buffer
const audioLoader = new three.AudioLoader();
audioLoader.load( './my music.wav', function( buffer ) {
	sound.setBuffer( buffer );
	sound.setRefDistance( 30 );
	sound.play();
});




function  update() {
  renderer.setSize(window.innerWidth,window.innerHeight);
  
  camera.aspect = window.innerWidth/window.innerWidth;
  requestAnimationFrame(update);
}

update();

renderer.setPixelRatio(window.devicePixelRatio);
//camera.position.setZ(-5);
camera.position.set( 0, 0, 1 );

//var controls = new OrbitControls(camera , renderer.domElement);





function animate() {
  requestAnimationFrame(animate);
   

  //controls.update();
  renderer.render(scene,camera);
     
  
  
}

  


animate();