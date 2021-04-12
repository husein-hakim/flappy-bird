class bird{
    constructor(x, y){
        var options={
            isStatic:false,
            density:1
          //  frictionAir:1
        }
        this.x = x
        this.y = y
        this.body = Bodies.rectangle(x, y, 50, 50, options)
        this.image = loadImage("Frame-1.png")
       World.add(world, this.body)
    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y)
        rotate(this.body.angle)
        scale(2.2)
        imageMode(CENTER)
        image(this.image, 0, 0, 20, 20)
        pop();
    }
}