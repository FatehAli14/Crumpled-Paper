class Paper {
    constructor(x, y, width, height) {
        var options = {
            isStatic : false,
            'restitution':0.1,
            'friction':3,
            'density':1.3
        }
        this.body = Bodies.circle(200,100,20,options);
        this.image=loadImage("paper.png");
        World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, 20, 20);
      }
}