function Bird() {
    this.pos = createVector(100, height / 2);
    this.vel = createVector(0, 0);
    this.gravity = createVector(0, 0.2);
    this.gameOver = false;

    this.update = function () {
        this.vel.add(this.gravity);
        this.pos.add(this.vel);
    }

    this.show = () => {
        if (this.pos.y <= height - 5 && this.pos.y > 5) {
            this.update();
        } else {
            this.gameOver = true;
        }
        if (this.gameOver == false) {
            noStroke();
            fill(255,255,0);
            ellipse(this.pos.x, this.pos.y, 10, 10);
        } else {
            noStroke();
            fill(255,255,0);
            ellipse(this.pos.x, this.pos.y, 10, 10);
        }
    }
}