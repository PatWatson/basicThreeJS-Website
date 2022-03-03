// javascript


import * as THREE from 'three'; // three js

// three things needed for three js scene: scene, camera, renderer
var scene = new THREE.Scene(); // set up scene

var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 ); // set up camera

var renderer = new THREE.WebGLRenderer(); // set up renderer
renderer.setSize( window.innerWidth, window.innerHeight );

document.body.appendChild( renderer.domElement );

// spinning cube
const guardTexture = new THREE.TextureLoader().load('GUARD-iconLogo.png');
var geometry = new THREE.BoxGeometry( 3, 3, 3 ); // create size of cube
var material = new THREE.MeshBasicMaterial( { map: guardTexture } ); // create texture of cube sides
var cube = new THREE.Mesh( geometry, material );
scene.add( cube ); // add cube to scene


camera.position.z = 5; // camera positioning

var animate = function () { // animate function
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render( scene, camera ); // render scene and camera
};

animate(); // call animate function