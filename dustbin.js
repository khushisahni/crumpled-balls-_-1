class Dustbin{
    constructor(x){

        this.x = x
        this.y = 650
        this.width = 200
        this.height = 100
        //this.thickness = 20
        this.angle = 0

        var options = {
            isStatic : true
        }

        this.bottomBody = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        this.leftBody = Bodies.rectangle(this.x - this.width/2,this.y - this.height/2,this.width/4,this.height,options);
        //Matter.Body.setAngle(this.leftBody,this.angle);
        this.rightBody = Bodies.rectangle(this.x + this.width/2,this.y - this.height/2,this.width/4,this.height,options);
        //Matter.Body.setAngle(this.rightBody.this.angle);

        //World.add(world,this.bottomBody,this.leftBody,this.rightBody);
        World.add(world,this.bottomBody);
        World.add(world,this.leftBody);
        World.add(world,this.rightBody);

        //this.bodyl = Bodies.rectangle();
    }
    display()
{
    var posBottom=this.bottomBody.position;
    var posLeft=this.leftBody.position;
    var posRight=this.rightBody.position;


    push()
    translate(posLeft.x, posLeft.y);
    rectMode(CENTER)
    //strokeWeight(4);
    //angleMode(RADIANS)
    fill(255)
    stroke(255)
    //rotate(this.angle)
    rect(0,0,this.width/4, this.height);
    pop()

    push()
    translate(posRight.x, posRight.y);
    rectMode(CENTER)
    //strokeWeight(4);
    stroke(255)
    //angleMode(RADIANS)
    fill(255)
    //rotate(-1*this.angle)
    rect(0,0,this.width/4, this.height);
    pop()

    push()
    translate(posBottom.x, posBottom.y);
    rectMode(CENTER)
    //strokeWeight(4);
    stroke(255)
    //angleMode(RADIANS)
    fill(255)
    rect(0,0,this.width, this.height-50);
    pop()
    
  }
}