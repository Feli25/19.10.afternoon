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
    if(this.x>=width) {
      this.vx -= 2*this.vx
    }
    if(this.x<=0) {
      this.vx += -2*this.vx
    }
    if(this.y>=height) {
      this.vy -= 2*this.vy
    }
    if(this.y<=0) {
      this.vy += -2*this.vy
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
