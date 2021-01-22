class WALL {

    constructor(x, y, w, h) {
        var prop = { isStatic: true }
        this.body = Matter.Bodies.rectangle(x, y, w, h, prop);
        Matter.World.add(world, this.body);
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    display() {
        fill("lightblue");
        rect(this.x, this.y, this.w, this.h);
    }

}