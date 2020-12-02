class Paper {
    constructor(x,y){
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.1,
            density: 0.4
        }
         this.radius = 15
         this.x = x
         this.y = y
         this.body = Bodies.circle(this.x,this.y,this.radius,options);
         World.add(world,this.body);
    }

    display(){

        var pos = this.body.position
        push (); 
        translate(pos.x,pos.y);
        fill("yellow");
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop ();
    }
}