class Ground{
constructor(x,y,width,height){
var option={
    isStatic:true
}
this.body =Bodies.rectangle(x,y,width,height,option);
this.width=width;
this.height=height;
}
display(){
    push();
var pos=this.body.position;
rectMode(CENTER);
fill("brown");
rect(pos.x,pos.y,this.width,this.height);
pop();
}
}




