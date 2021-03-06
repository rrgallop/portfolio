/** @type {HTMLCanvasElement} */
            
const FPS = 30;
const FRICTION = 0.03;  // (0 = no friction)
const SHIP_THRUST = 5;  // acceleration pixels/sec^2
const SHIP_HEIGHT = 30;  // ship height in pixels
const SHIP_EXPLODE_DURATION = 1;  // duration of ship explosion
const SHIP_INV_DURATION = 3;  // duration of respawn invulnerability
const SHIP_BLINK_DURATION = .1;  // duration of ship blink duration
const TURN_SPEED = 360;  // turn speed (deg/sec)

const LASER_AMOUNT = 5;  // max number of lasers on screen
const LASER_SPEED = 500;  // speed of lasers in pixels/sec

const ASTEROIDS_NUM = 5;  // average number of asteroids spawned
const ASTEROID_JAG = .3;  // controls jaggedness of asteroid
const ASTEROID_SPEED = 50;  // max start speed of asteroid in pixels/sec
const ASTEROID_SIZE = 100;  // starting size of asteroid in pixels
const ASTEROIDS_VERTICES = 10;  // avg # of vertices on each asteroid

const SHOW_COLLISION = false;  // show or hide collision geometry

var canv = document.getElementById("gameCanvas");
var context = canv.getContext("2d");

var ship = newShip();

var asteroids = [];
createAsteroids();

function newShip(){
    var newShip = {
        // ship starting coordinates
        x: canv.width / 2,
        y: canv.height / 2,
        explodeTime: 0,
        radius: SHIP_HEIGHT / 2,
        angle: 90 / 180 * Math.PI,  // convert to radians
        rotation: 0,
        blinkTime: Math.ceil(SHIP_BLINK_DURATION*FPS),
        blinkNumber: Math.ceil(SHIP_INV_DURATION/SHIP_BLINK_DURATION),
        thrusting: false,
        thrust: {
            x: 0,
            y: 0
        }
    }
    return newShip;
}


function newAsteroid(x, y){
    var asteroid = {
        x: x,
        y: y,
        xv: Math.random() * ASTEROID_SPEED / FPS * (Math.random() < .5 ? 1 : -1),
        yv: Math.random() * ASTEROID_SPEED / FPS * (Math.random() < .5 ? 1 : -1),
        radius: ASTEROID_SIZE / 2,
        angle: Math.random() * Math.PI * 2,  // convert to radians
        vertices: Math.floor(Math.random() * (ASTEROIDS_VERTICES + 1) + ASTEROIDS_VERTICES / 2),
        offsets: [],
    };

    // create vertex offsets array
    for (var i = 0; i < asteroid.vertices; i++){
        asteroid.offsets.push(Math.random() * ASTEROID_JAG * 2 + 1 - ASTEROID_JAG);
    }
    return asteroid;
}

function distanceBetween(x1, y1, x2, y2){
    return Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2))
}

function createAsteroids() {
    var x,y;
    var asteroidVariance;
    
    for (var i = 0; i < ASTEROIDS_NUM+2; i++){
        do {
            x = Math.floor(Math.random() * canv.width);
            y = Math.floor(Math.random() * canv.height);
            
        }while(distanceBetween(ship.x,ship.y,x,y) < ASTEROID_SIZE + ship.radius);
        // x = Math.floor(Math.random() * canv.width);
        // y = Math.floor(Math.random() * canv.height);
        asteroids.push(newAsteroid(x, y));
    }
}

function shipGoBoom() {
    context.fillStyle = "red";
    context.strokeStyle = "lime";
    context.beginPath();
    context.arc(ship.x, ship.y, ship.radius, 0, Math.PI*2, false);
    context.fill();
    context.stroke();

    ship.explodeTime = Math.floor(SHIP_EXPLODE_DURATION * FPS);
}

// event handlers
document.addEventListener("keydown",keyDown);
document.addEventListener("keyup",keyUp);

// game loop
setInterval(update, 1000 / FPS);

function keyDown(/** @type {KeyboardEvent} */ ev) {
    switch(ev.keyCode){
        case 32:  // space bar (shoot laser)
            
            break;
        case 37:  // left arrow start rotating left
            ship.rotation = TURN_SPEED / 180 * Math.PI / FPS;
            break;
        case 39:  // right arrow start rotating right
            ship.rotation = -TURN_SPEED / 180 * Math.PI / FPS;
            break;
        case 38:  // up arrow thrust ship forward
            ship.thrusting = true;
            break;
    }
}

function keyUp(/** @type {KeyboardEvent} */ ev) {
    switch(ev.keyCode){
        case 32:  // space bar (allow shooting)
            
            break;
        case 37:  // left arrow stop rotating left
            ship.rotation = 0;
            break;
        case 39:  // right arrow stop rotating right
            ship.rotation = 0;
            break;
        case 38:  // up arrow cease thrust
        ship.thrusting = false;
            break;
    }
}
// handles changes to game state
function update() {
    var exploding = ship.explodeTime > 0;
    var blinkOn = ship.blinkNumber % 2 == 0;

    // draw space
    context.fillStyle = "black";
    context.fillRect(0, 0, canv.width, canv.height);

    // draw ship
    if (!exploding){
        if (blinkOn){    
            context.strokeStyle = "white";
            context.lineWidth = SHIP_HEIGHT / 5;
            context.beginPath();
            context.moveTo(  // nose of the ship (1/3 ahead)
                ship.x + 4/3 * ship.radius * Math.cos(ship.angle),
                ship.y - 4/3 * ship.radius * Math.sin(ship.angle)
            );
            context.lineTo(  // rear left
                ship.x - ship.radius * (2/3 * Math.cos(ship.angle) + Math.sin(ship.angle)),
                ship.y + ship.radius * (2/3 * Math.sin(ship.angle) - Math.cos(ship.angle))
            );
            context.lineTo(  // rear left
                ship.x - ship.radius * (2/3 * Math.cos(ship.angle) - Math.sin(ship.angle)),
                ship.y + ship.radius * (2/3 * Math.sin(ship.angle) + Math.cos(ship.angle))
            );
            context.closePath();
            context.stroke();
        }
        if (ship.blinkNumber > 0){
            // reduce blinktime
            ship.blinkTime--;

            // reduce blinkNumber
            if (ship.blinkTime == 0){
                ship.blinkTime = Math.ceil(SHIP_BLINK_DURATION*FPS);
                ship.blinkNumber--;
            }
        }
        
        if (SHOW_COLLISION){
            context.strokeStyle = "lime";
            context.beginPath();
            context.arc(ship.x, ship.y, ship.radius, 0, Math.PI * 2, false);
            context.fill();
        }
    }else{
        // ship go boom
        context.fillStyle = "darkred";
        context.beginPath();
        context.arc(ship.x, ship.y, ship.radius*1.8, 0, Math.PI * 2, false);
        context.fill();
        context.fillStyle = "red";
        context.beginPath();
        context.arc(ship.x, ship.y, ship.radius*1.5, 0, Math.PI * 2, false);
        context.fill();
        context.fillStyle = "orange";
        context.beginPath();
        context.arc(ship.x, ship.y, ship.radius*1.2, 0, Math.PI * 2, false);
        context.fill();
        context.fillStyle = "yellow";
        context.beginPath();
        context.arc(ship.x, ship.y, ship.radius*.9, 0, Math.PI * 2, false);
        context.fill();
        context.fillStyle = "white";
        context.beginPath();
        context.arc(ship.x, ship.y, ship.radius*.6, 0, Math.PI * 2, false);
        context.fill();
        
        
    }
    // draw asteroids
    var x, y, radius, angle, vertices, offsets;
    
    context.lineWidth = SHIP_HEIGHT / 5;
    for (var i = 0; i < asteroids.length; i++){
        context.strokeStyle = "slategrey";
        // get asteroid properties
        x = asteroids[i].x;
        y = asteroids[i].y;
        radius = asteroids[i].radius;
        angle = asteroids[i].angle;
        vertices = asteroids[i].vertices;
        offsets = asteroids[i].offsets;
        // draw path
        context.beginPath();
        context.moveTo(
            x + radius * offsets[0] * Math.cos(angle),
            y + radius * offsets[0] * Math.sin(angle)
        );

        // draw asteroid
        for (var j = 1; j < vertices; j++){
           context.lineTo(
                x + radius * offsets[j] * Math.cos(angle + j * Math.PI * 2 / vertices),
                y + radius * offsets[j] * Math.sin(angle + j * Math.PI * 2 / vertices)
           );   
        }
        context.closePath();
        context.stroke();

        if (SHOW_COLLISION){
            context.strokeStyle = "red";
            context.beginPath();
            context.arc(x, y, radius, 0, Math.PI * 2, false);
            context.stroke();
        }

        
    }

    

    // rotate ship by modifying ship angle
    ship.angle += ship.rotation;

    // ship thrust
    if (ship.thrusting) {
        ship.thrust.x += SHIP_THRUST * Math.cos(ship.angle) / FPS;
        ship.thrust.y -= SHIP_THRUST * Math.sin(ship.angle) / FPS;
        if (!exploding){
                
            // draw flame when thrusting! \m/
            context.strokeStyle = "yellow";
            context.fillStyle = "red";
            context.lineWidth = SHIP_HEIGHT / 10;
            context.beginPath();
            context.moveTo(  // center rear of ship
                ship.x - 7/3 * ship.radius * Math.cos(ship.angle),
                ship.y + 7/3 * ship.radius * Math.sin(ship.angle)
            );
            context.lineTo(  // rear left
                ship.x - ship.radius * (2/3 * Math.cos(ship.angle) + .25 * Math.sin(ship.angle)),
                ship.y + ship.radius * (2/3 * Math.sin(ship.angle) - .25 * Math.cos(ship.angle))
            );
            context.lineTo(  // rear right
                ship.x - ship.radius * (2/3 * Math.cos(ship.angle) - .25 * Math.sin(ship.angle)),
                ship.y + ship.radius * (2/3 * Math.sin(ship.angle) + .25 * Math.cos(ship.angle))
            );
            context.closePath();
            context.fill();
            context.stroke();
        }
    } else {
        ship.thrust.x -= FRICTION * ship.thrust.x / FPS;
        ship.thrust.y -= FRICTION * ship.thrust.y / FPS;
    }

    if (!exploding){
        // move ship
        ship.x += ship.thrust.x;
        ship.y += ship.thrust.y;

        // check for asteroid collisions
        if (ship.blinkNumber == 0){  // only if not currently invulnerable
                
            for (var i = 0; i < asteroids.length; i++){
                if (distanceBetween(ship.x,ship.y,asteroids[i].x,asteroids[i].y) < ship.radius + asteroids[i].radius){
                    shipGoBoom();
                }
            }
        }

        // handle edge of screen
        if (ship.y < 0 - ship.radius){
            ship.y = canv.height + ship.radius;
        }else if (ship.y > canv.height + ship.radius){
            ship.y = 0 - ship.radius;
        }
        if (ship.x < 0 - ship.radius){
            ship.x = canv.width + ship.radius;
        }else if (ship.x > canv.width + ship.radius){
            ship.x = 0 - ship.radius;
        }
    }else{
        ship.explodeTime--;
        if (ship.explodeTime == 0){
            ship = newShip();
        }
    }

    // move asteroids
    for (var i = 0; i < asteroids.length; i++){
        
        asteroids[i].x += asteroids[i].xv;
        asteroids[i].y += asteroids[i].yv;

        // handle edge of screen
        if (asteroids[i].x < 0 - asteroids[i].radius){
            asteroids[i].x = canv.width + asteroids[i].radius;
        } else if (asteroids[i].x > canv.width + asteroids[i].radius){
            asteroids[i].x = 0 - asteroids[i].radius;
        }
        if (asteroids[i].y < 0 - asteroids[i].radius){
            asteroids[i].y = canv.height + asteroids[i].radius;
        } else if (asteroids[i].y > canv.height + asteroids[i].radius){
            asteroids[i].y = 0 - asteroids[i].radius;
        }
    }

    // center dot of ship (for debugging)
    context.fillStyle = "red";
    context.fillRect(ship.x - 1, ship.y - 1, 2, 2);
}