var bird;
var walls = [];

function setup() {
    createCanvas(600, 400);
    bird = new Bird();
    walls.push(new Wall());
}

function draw() {
    background(51);
    if (bird.gameOver == false) {
        bird.show();
    } else {
        bird.show();
        console.log('game over');
        noLoop();
    }
    if (walls[walls.length - 1].pos.x + walls[walls.length - 1].xGap < width) {
        walls.push(new Wall());
    }

    for (i = walls.length - 1; i > -1; i--) {
        if ((bird.pos.x >= walls[i].pos.x &&
            bird.pos.x <= (walls[i].pos.x + walls[i].width)) &&
            ((bird.pos.y > 0 && bird.pos.y < walls[i].upH) ||
                (bird.pos.y > (height - walls[i].downH) && bird.pos.y < height))) {
            bird.gameOver = true;
        }
        if (walls[i].terminate == false) {
            walls[i].show();
        } else {
            walls.splice(i, 1);
        }
    }
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        bird.vel.set(0, -4.2);
    } else if (keyCode === DOWN_ARROW) {
        bird.vel.add(0, 1);
    } else if (keyCode == 13) {
        console.log('new game start');
        bird = new Bird();
        walls = [];
        walls.push(new Wall());
        loop();
    }
}