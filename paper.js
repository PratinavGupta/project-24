class PAPPER {

    constructor(x, y) {
        var prop = { isStatic: false, restitution: 0.3, density: 1.3 }
        this.body = Matter.Bodies.circle(x, y, 20, prop);
        Matter.World.add(world, this.body);
    }

    display() {
        fill("yellow");
        ellipse(this.body.position.x, this.body.position.y, 40);
    }

}