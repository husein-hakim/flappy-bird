class ground{
    constructor(){
        var options={
            isStatic:true
        }
       
        this.body = Bodies.rectangle(20, 147, 480, 50, options)
      
        this.image = loadImage("ground-removebg-preview.png")
       World.add(world, this.body)
    }

    display(){
       // push();
       // translate(this.body.position.x, this.body.position.y)
       this.body.position.x+=-2
       if(this.body.position.x<0){
           this.body.position.x=240
       }
       scale(3)
        imageMode(CENTER)
        image(this.image, this.body.position.x, this.body.position.y, 480,50)
    }
}