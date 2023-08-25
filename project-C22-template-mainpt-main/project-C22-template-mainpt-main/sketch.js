const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ARQUEIRO
var engine, world;
var canvas;
var palyer, playerBase, playerArcher;
var baseimage;
var Jodagor
function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;              
  angleMode(DEGREES);
   options = {IsStatic:true}
  
  
  
  
  //criar corpo da base do jogador             
   ARQUEIRO = Bodies.rectangle(200,350,180,150,options)            
  World.add(world,ARQUEIRO)
   //criar corpo do jogador
   Jodagor = Bodies.rectangle(250,ARQUEIRO.position.y - 160,50,180,options)
   World.add(world,Jodagor)
  

}

function draw() {
  background(backgroundImg);

  //exibir a imagem do jogador usando a função image()
   image(baseimage,ARQUEIRO.position.x,ARQUEIRO.position.y,180,150)

  //exibir a imagem da base do jogador usando a função image()
  image(playerimage,Jodagor.position.x,Jodagor.position.y,50,180)

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("ARQUEIRO ÉPICO", width / 2, 100);
}
