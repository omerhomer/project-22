class rope{
	constructor(body1,body2,pointA,pointB)
	{
this.pointA = pointA;
this.pointB = pointB;

var options = {
	bodyA:body1,
	bodyB:body2,
	pointB:{x:this.pointA, y:this.pointB},	
	stiffness:0.05,
	length:200,
}

	//create rope constraint here
	this.rope = Constraint.create(options);
	World.add(world,this.rope)
	}


    //create display() here 
display(){
	if(this.rope.bodyA){
		var pointA = this.rope.bodyA.position;
		var pointB = this.pointB;
		strokewieght(3);
		line(pointA.x,pointA.y,pointB.x,pointB.y);
	}
}
}
