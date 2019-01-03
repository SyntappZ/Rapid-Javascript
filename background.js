let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');



window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
})


colorArray = [
    '#6B0C22', 
    '#A30212',
    '#F4CB89',
    '#588C8C',
    '#011C26',
    'rgba(0,0,0,0.2)'
    
];
function Circle(x, y,dx,dy,radius){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

    this.draw = function(){
        c.beginPath();  
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false); 
      
       c.fillStyle = this.color;
        c.fill();
    }
    this.update = function(){
        if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
            this.dx = -this.dx;
        }
        if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
            this.dy = -this.dy;
        }
    
        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
}


let circleArray = [];

function init(){
    
    circleArray = [];
    if(window.screen.width < 750){
        for(let i = 0; i < 200; i++){
            let radius = Math.random() * 2 + 1;
            let x = Math.random()* (innerWidth - radius * 2) + radius;
            let y = Math.random()* (innerHeight - radius * 2) + radius;
            let dx = (Math.random() - 0.5);
            let dy = (Math.random() - 0.5);
            
    
            circleArray.push(new Circle(x, y, dx, dy, radius))
        }
    }else{
        for(let i = 0; i < 800; i++){
            let radius = Math.random() * 2 + 1;
            let x = Math.random()* (innerWidth - radius * 2) + radius;
            let y = Math.random()* (innerHeight - radius * 2) + radius;
            let dx = (Math.random() - 0.5);
            let dy = (Math.random() - 0.5);
            
    
            circleArray.push(new Circle(x, y, dx, dy, radius))
        }
    }
    

}


function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    
    for(let j = 0; j < circleArray.length; j++){
        circleArray[j].update();
    }
}

init();
animate();