function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(220);
    
    // Draw a circle that follows the mouse with a trail effect
    fill(100, 150, 255, 100);
    noStroke();
    circle(mouseX, mouseY, 50);
    
    // Draw some floating particles
    for (let i = 0; i < 5; i++) {
        let x = noise(frameCount * 0.01 + i * 100) * width;
        let y = noise(frameCount * 0.01 + i * 200) * height;
        
        fill(255, 100, 150, 150);
        circle(x, y, 20);
    }
} 