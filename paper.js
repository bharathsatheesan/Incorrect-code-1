class Paper {
    constructor(radius){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2 
        }
        this.body = Bodies.circle(200, 350, 40, options);
        this.radius = radius;
        this.image = loadImage("paper.png");

        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        translate(pos.x, pos.y);
        imageMode(CENTER);
        fill("white");
        image(this.image, 0, 0, this.radius, 150);
    }
}