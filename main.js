canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

background_img = "mars.jpg";

rover_img = "rover.png";

rover_height = 100;
rover_width = 90;

rover_x = 10;
rover_y = 10;

function add( ){
    background_imgTag = new Image ();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_img;

    rover_imgTag = new Image ();
    rover_imgTag.onload = uploadRover;
    rover_imgTag.src = rover_img;
}

function uploadBackground() {
    ctx.drawImage (background_imgTag, 0 , 0,canvas.width,canvas.height);
}
function uploadRover() {
    ctx.drawImage (rover_imgTag, rover_x,rover_y,rover_width,rover_height);
}

function up() {
    if(rover_y >=0)
    {
        rover_y = rover_y -10;
        console.log("When up arrow is pressed , x = "+rover_x +"y =" +rover_y );
        uploadBackground();
        uploadRover();
    }
    
}

function down() {
    if(rover_y < 600) 
    {
        rover_y = rover_y +10;
        console.log("When down arrow pressed , y =" + rover_y + "x = "+ rover_x);
        uploadBackground();
        uploadRover();
 }
}

function right() {
    if(rover_x <800) {
        rover_x = rover_x +10;
        console.log("When right arrow is pressed , y ="  + rover_y + "x =" + rover_x );
        uploadBackground();
        uploadRover();   
    }
}
function left() {
    if(rover_x >0) {
        rover_x = rover_x-10;
        console.log("When left arrow is pressed , y="+rover_y + "x = " + rover_x);
        uploadBackground();
        uploadRover();
    }
}

ctx.drawImage(rover_imgTag , rover_x , rover_y , rover_height , rover_width);

nasa_mars_img_array = ["nasa_image_1.jpeg" , "nasa_image_2.jpeg" , "nasa_image_3.jpeg" , "nasa_image_4.jpeg"];

random_number = Math.floor(Math.random () * 4);

background_img = nasa_mars_img_array[random_number];

console.log("background_image = " + background_image);