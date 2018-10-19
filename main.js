var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var width = ctx.canvas.width
var height = ctx.canvas.height

var ball = {
  x: 100,
  y: 100,
  vx: 5,
  vy: 2,
  radius: 50,
  color: "red",
  draw: function() {
    ctx.save()
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.restore()
  },
  update: function() {
    this.x += this.vx
    this.y += this.vy
    if(this.x>=width-this.radius) {
      this.vx -= 2*this.vx
      this.color = "chartreuse"
    }
    if(this.x<=0+this.radius) {
      this.vx += -2*this.vx
      this.color = "blue"
    }
    if(this.y>=height-this.radius) {
      this.vy -= 2*this.vy
      this.color = "purple"
    }
    if(this.y<=0+this.radius) {
      this.vy += -2*this.vy
      this.color = "red"
    }
  }
};

setInterval(function() {
  update()
  drawEverything()
}, 1000/60)

function update() {
  ball.update()
}

function drawEverything() {
  ctx.clearRect(0, 0, width, height)
  ball.draw()
}

var buttonin = document.getElementById("inbutton")
var buttonde = document.getElementById("debutton")

buttonin.onclick = function(){
  console.log("Increase")
  ball.vx *= 1.1;
  ball.vy *= 1.1;
}
buttonde.onclick = function(){
  console.log("Decrease")
  ball.vx /= 1.1;
  ball.vy /= 1.1;
}