var params = {
    bgColor : 0
};

function setup(){
    createCanvas(1200, 800);
    params.bgColor = color(255, 204, 0);
}

function draw(){
    background(params.bgColor);
    strokeWeight(1);
    fill(params.bgColor);
    circle(mouseX, mouseY, 20);
}
