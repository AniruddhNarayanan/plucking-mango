class boy{
    constructor(x, y, width,height){
        var options={
            isStatic:true
        }
        this.Body = Bodies.rectangle(x, y, width, height, options);
        this.width=width;
        this.height=height;
        this.image=loadImage("boy.png");
    }
    display(){
        push();
        translate(this.Body.position.x, this.Body.position.y);
        imageMode(CENTER);
        // fill("purple");
        image(this.image,0,0,this.width,this.height);
        pop();
       }
   }