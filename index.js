let myGamePeace;

// invoke myGameArea.start() method
startGame = () => myGameArea.start()


// 
let myGameArea = {
    canvas: document.createElement('canvas'),
    start: function() {
        this.canvas.width = 480
        this.canvas.height = 270
        this.context = this.canvas.getContext('2d')
        document.body.insertBefore(this.canvas, document.body.childNodes[0])
    }
}

// setter - constructor which adds components onto gamearea
component = (width, height, color, x, y) => {
    this.width = width
    this.height = height
    this.x = x
    this.y = y
    ctx = myGameArea.context
    ctx.fillStyle = color
    ctx. fillRect = (this.x, this.y, this.width, this.height)
}


