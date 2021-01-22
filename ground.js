class GROUND {

    constructor(x, y, w, h) {
        var prop = { isStatic: true }
        this.body = Matter.Bodies.rectangle(x, y, w, h, prop);
        Matter.World.add(world, this.body);
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
    }

    display() {
        fill("brown");
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.width ,this.height, );
    }

}