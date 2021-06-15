class mango{
        constructor(x, y, radius){
            var options={
                isStatic:true,
                retitution:0,
                friction:1
            }
            this.Body=Bodies.circle(x, y, radius, options)
            this.radius=radius;
            this.image=loadImage("mango.png");
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