function Wall() {
    this.pos = createVector(width, 0);
    this.vel = createVector(-2, 0);
    this.xGap = 200;
    this.yGap = 100;
    this.width = 50;
    this.upH = int(random(10, height - this.yGap));
    this.downH = height - (this.yGap + this.upH);
    this.terminate = false;

    this.update = () => {
        this.pos.add(this.vel);
    }
    this.show = () => {
        this.update();
        if (this.pos.x > 0 - this.width) {
            stroke(0);
            fill(0, 255, 0);
            rect(this.pos.x, this.pos.y, this.width, this.upH);
            rect(this.pos.x, this.upH + this.yGap, this.width, this.downH);
        } else {
            this.terminate = true;
        }
    }
}