class stone{
        constructor(x, y, radius){
            var options={
                isStatic:false,
                restitution:0,
                friction:1,
                density:1.2
            }
            this.Body = Bodies.circle(x, y, radius, options);
            this.radius=radius;
            this.image=loadImage("stone.png");
            World.add(world,this.Body);
        }
        display(){
            push();
            translate(this.Body.position.x, this.Body.position.y);
            imageMode(CENTER);
            // fill("purple");
            image(this.image,0,0,this.radius,this.radius);
            pop();
           }
    }