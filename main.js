canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var car_width=100;
var car_height=90;
var car_x=10;
var car_y=10;
var background_img="bac_pic.jpg";
var car_img="car1.png";
var car_width2=100;
var car_height2=90;
var car_x2=10;
var car_y2=70;
var car_img2="car2.png";

function add(){
background_imgTag=new Image();
background_imgTag.onload=uploadBackground;
background_imgTag.src=background_img;
car_imgTag2=new Image();
car_imgTag2.onload=uploadCar2;
car_imgTag2.src=car_img2;

car_imgTag=new Image();
car_imgTag.onload=uploadCar;
car_imgTag.src=car_img;
}
function uploadBackground() {
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadCar() {
    ctx.drawImage(car_imgTag,car_x,car_y,car_width,car_height);
}

function uploadCar2() {
    ctx.drawImage(car_imgTag2,car_x2,car_y2,car_width2,car_height2);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e) {
    KeyPressed=e.keyCode;
    console.log(KeyPressed);

    if (KeyPressed == '37') {
        left();
        console.log("Left");
    }
    if (KeyPressed == '39') {
        right();
        console.log("Right");
    }

    if (KeyPressed == ' 65') {
        left2();
        console.log("Left");
    }
    if (KeyPressed == '66') {
        right2();
        console.log("Right");
    }
    
if (car_x > 700){
    console.log("car1 won");
    document.getElementById('game_status').innerHTML="Car 1 Won!!";
}
if (car_x2 > 700){
    console.log("car2 won");
    document.getElementById('game_status').innerHTML="Car 2 Won!!";
}
}
function right() {
    if (car_x<=700) {
        car_x=car_x+10;
        console.log( " x = " + car_x + " y = " + car_y );
        uploadBackground();
        uploadCar();
        uploadCar2();
    }
}

function left() {
    if ( car_x>=0) {
        car_x=car_x-10;
        console.log( " x = " + car_x + " y = " + car_y );
        uploadBackground();
        uploadCar();
        uploadCar2();
    }
}
function right2() {
    if (car_x2<=700) {
        car_x2=car_x2+10;
        console.log( " x = " + car_x2 + " y = " + car_y2 );
        uploadBackground();
        uploadCar2();
        uploadCar();

    }
}

function left2() {
    if ( car_x2>=0) {
        car_x2=car_x2-10;
        console.log( " x = " + car_x2 + " y = " + car_y2 );
        uploadBackground();
        uploadCar2();
        uploadCar();
    }
}