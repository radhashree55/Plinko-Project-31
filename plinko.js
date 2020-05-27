class Plinko {
    constructor(x,y,radius) {
      var options ={
        isStatic:true,
         
      }
      this.body = Bodies.circle(x,y,radius/2,options);
      this.radius = radius;

      World.add(world, this.body);
    }  

    display() {
      var pos =this.body.position;
      fill(255);
      ellipse(pos.x,pos.y,this.radius);
    }
  }
  