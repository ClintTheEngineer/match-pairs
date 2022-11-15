let tempArr = [];


function remove(){
    square1.removeChild(images)
    square2.removeChild(images)
    square3.removeChild(images)
    square4.removeChild(images)
    square5.removeChild(images)
    square6.removeChild(images)
    square7.removeChild(images)
    square8.removeChild(images)
    square9.removeChild(images)
    square10.removeChild(images)
    square11.removeChild(images)
    square12.removeChild(images)
    square13.removeChild(images)
    square14.removeChild(images)
    square15.removeChild(images)
    square16.removeChild(images)
}


const imageFiles = [
    './images/alien.png',
    './images/angry-cursing.png',
    './images/angry-mask.png',
    './images/bison.png',
    './images/boar.png',
    './images/classic-heart.png',
    './images/cool-face.png',
    './images/fox.png',
    './images/ghost.png',
    './images/giraffe.png',
    './images/heart-eyes.png',
    './images/horse.png',
    './images/laughing.png',
    './images/music-notes.png',
    './images/pig.png',
    './images/rabbit.png',
    './images/rainy-cloud.png',
    './images/robot.png',
    './images/sad-face.png',
    './images/silly-face.png',
    './images/sleepy.png',
    './images/sparkle-heart.png',
    './images/sunny-cloud.png',
    './images/tooth-smile.png',
    './images/yawn.png',
    './images/zipped-lips.png'
]

const imageNumber = () => {
   return Math.floor(Math.random() * 25);
}

const images = document.createElement('img');


const square1 = document.getElementById('square-1');
const square2 = document.getElementById('square-2');
const square3 = document.getElementById('square-3');
const square4 = document.getElementById('square-4');
const square5 = document.getElementById('square-5');
const square6 = document.getElementById('square-6');
const square7 = document.getElementById('square-7');
const square8 = document.getElementById('square-8');
const square9 = document.getElementById('square-9');
const square10 = document.getElementById('square-10');
const square11 = document.getElementById('square-11');
const square12 = document.getElementById('square-12');
const square13 = document.getElementById('square-13');
const square14 = document.getElementById('square-14');
const square15 = document.getElementById('square-15'); 
const square16 = document.getElementById('square-16'); 

const imageGenerator = (range=25, count=8) => {
    let nums = new Set();
    while (nums.size < count) {
        nums.add(Math.floor(Math.random() * (range - 1 + 1) + 1));
    }
    return [...nums];
}
imageGenerator();

const grid1 = imageGenerator();
const tempGrid = [...grid1, ...grid1];

const fullGrid = tempGrid.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value);


let cursor = document.getElementById('replay');
cursor.onclick = () => {
     location.reload()
}

    


