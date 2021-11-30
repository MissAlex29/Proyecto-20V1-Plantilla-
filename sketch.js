var canvas,bg;
var cat, catImg1,catImg2,catImg3;
var mouse, mouseImg1,mouseImg2,mouseImg3;

function preload() {
    //Imagen de fondo 
    bg = loadImage("Images/garden.png");

    //Gato acostado
    
    //Gato caminando
    
    //Gato sentado
    

    //Ratón buscando
    
    //Ratón burlandose 
    
    //Ratón con queso 
    
}

function setup(){
    createCanvas(1000,800);
    
    //Objeto - gato
    cat = createSprite(870,600);
    
     //Objeto - ratón
    mouse = createSprite(200,600);
    

}

function draw() {
    //Fondo de pantalla 
    background(bg);

    //Cóndición para detactar colisión de los objetos 
    

    drawSprites();
}


function keyPressed(){
    //Condición movimiento de gato - raton burlandose 
    
    
}