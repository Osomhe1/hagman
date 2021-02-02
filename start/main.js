// constant
const COLOR_SPACE = 'black';
const COLOR_STARS = 'white';
const STAR_NUM = 200; //Number of star in thr star animation
const STAR_SIZE = 0.005; 
const STAR_SPEED = 0.05;

// set up canvas
var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.height = document.documentElement.clientHeight;
canvas.width = document.documentElement.clientWidth;
document.body.appendChild(canvas);

// set up star
var stars = [];
var starSpeed = STAR_SPEED *canvas.width;
var xv = starSpeed * randomSign() * Math.random();
// using pythagoras theorem
var yv = Math.sqrt(Math.pow(starSpeed, 2) - Math.pow(xv, 2)) * randomSign();
for(let i = 0; i < STAR_NUM; i++) {
    let speedMult = Math.random() * 1.5 + 0.5;
    stars[i] = {
        r:Math.random() * STAR_SIZE * canvas.width / 2,
        y:Math.floor(Math.random() * canvas.height),
        x:Math.floor(Math.random() * canvas.width),
        xv: xv * speedMult, 
        yv:yv * speedMult 
    }
}


// loop
var timeDelta, timeLast = 0;
requestAnimationFrame(loop);

function loop(timeNow) {
    
    // calculate the time difference
    timeDelta = timeNow - timeLast
    timeLast = timeNow;

    // space background
    ctx.fillStyle = COLOR_SPACE;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // draw the star
    ctx.fillStyle = COLOR_STARS;
    for(let i =0; i< STAR_NUM; i++){
        ctx.beginPath();
        ctx.arc(stars[i].x, stars[i].y, stars[i].r, 0, Math.PI * 2);
        ctx.fill();

        // update the x position
        stars[i].x += stars[i].xv * timeDelta * 0.001;

        // reposition thr star to the other side if it goes off the screen
        if(stars[i].x < 0 -stars[i].r) {
            stars[i].x = canvas.width + stars[i].r
                  }else if(stars[i].x > canvas.width + stars[i].r){
                      stars[i].x = 0 - stars[i].r;
                  }

        
        // update the y position
        stars[i].y += stars[i].yv * timeDelta * 0.001;

        // reposition the star to the other side if it goes off the screen
        if(stars[i].y < 0 -stars[i].r) {
            stars[i].y = canvas.width + stars[i].r
                  }else if(stars[i].y > canvas.width + stars[i].r){
                      stars[i].y = 0 - stars[i].r;
                  }
    }


    // call the next frame
    requestAnimationFrame(loop);
}

function randomSign() {
    return Math.random() >= 0.5 ? 1 : -1;
    
}