class Division {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image = loadImage("Bat.png")
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("white");
      stroke("white")
      rect(pos.x, pos.y, this.width, this.height);
      image(this.image,pos.x-114.5,pos.y-60,225,400)
    }
  };
