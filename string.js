class String{
    constructor(body1, point2){
        
        var options={
            bodyA:body1,
           pointB:point2,
          length:1,
          stiffness:0.004
        }
        this.rope=Matter.Constraint.create(options)
        World.add(world,this.rope);
    }
    attach(body){
        this.rope.bodyA = body;
    }
    

    fly(){
        this.rope.bodyA = null;
    } 
    
    display()
    {
        if(this.rope.bodyA){
            var pointA=this.rope.bodyA.position;
            var pointB=this.rope.pointB;
            strokeWeight(2);
    
            var Anchor1X=pointA.x;
            var Anchor1Y=pointA.y;
    
            var Anchor2X=pointB.x;
            var Anchor2Y=pointB.y;
    
            line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
        }
        
    }
    
   
    
}
