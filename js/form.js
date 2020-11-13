class Form{
    constructor(){this.input=createInput("name")
    this.button=createButton('play')
    this.greeting=createElement('h3')}
    display(){
        var title=createElement('h2')
        title.html("Car Racing Game")
        title.position(130,0)
        
        this.input.position(130,160)
        this.button.position(250,200)
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            playerCount+=1
            player.index=playerCount;
            player.name=this.input.value()
            player.update(name)
            player.updateCount(playerCount)
            this.greeting.html("hello"+player.name)
            this.greeting.position(130,160)
        })

    }
    hide(){
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
    }
}