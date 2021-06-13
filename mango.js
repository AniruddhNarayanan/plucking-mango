class mango{
    constructor(x, y, radius){
        var options={
            isStatic:true,
            retitution:0,
            friction:1
        }
        this.body=Bodies.circle(x, y, radius, options)
        this.radius=radius;
        this.image=loadImage("mango.png");
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        // fill("purple");
        image(this.image,0,0,this.radius,this.radius);
        pop();
       }
}