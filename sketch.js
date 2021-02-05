var o1,o2,o3,o4
var w1
var w2
var w3
var w4
var w5
var w6
var w7
var w8
var w9
var w10
var w11
var w12
var w13
var w14
var w15
var w16
var w17
var w18
var w19
var w20
var w21
var b1
var b2
var b3
var b4
var b5
var b6
var b7
var b8
var b9
var b10
var b11
var b12
var b13
var b14
var b15
var s1
var s2
var s3
var s4
var s5
var s6
var s7
var s8
var s9
var s10
var s11
var s12
var s13
var s14
var s15
var s16
var s17
var s18
var s19
var s20
var s21
var sb1
var sb2
var sb3
var sb4
var sb5
var sb6
var sb7
var sb8
var sb9
var sb10
var sb11
var sb12
var sb13
var sb14
var sb15

function preload() {
bg=loadImage("bg.png")
s1= loadSound("w1.wav")
s2= loadSound("w2.wav")
s3= loadSound("w3.wav")
s4= loadSound("w4.wav")
s5= loadSound("w5.wav")
s6= loadSound("w6.wav")
s7= loadSound("w7.wav")
s8= loadSound("w8.wav")
s9= loadSound("w9.wav")
s10= loadSound("w10.wav")
s11= loadSound("w11.wav")
s12= loadSound("w12.wav")
s13= loadSound("w13.wav")
s14= loadSound("w14.wav")
s15= loadSound("w15.wav")
s16= loadSound("w16.wav")
s17= loadSound("w17.wav")
s18= loadSound("w18.wav")
s19= loadSound("w19.wav")
s20= loadSound("w20.wav")
s21 = loadSound("w21.wav")
sb1 = loadSound("b1.wav")
sb2 = loadSound("b2.wav")
sb3 = loadSound("b3.wav")
sb4 = loadSound("b4.wav")
sb5 = loadSound("b5.wav")
sb6 = loadSound("b6.wav")
sb7 = loadSound("b7.wav")
sb8 = loadSound("b8.wav")
sb9 = loadSound("b9.wav")
sb10 = loadSound("b10.wav")
sb11 = loadSound("b11.wav")
sb12 = loadSound("b12.wav")
sb13 = loadSound("b13.wav")
sb14 = loadSound("b14.wav")
sb15 = loadSound("b15.wav")

}

function setup(){

bgs=createSprite(620,250,1230,550);
bgs.addImage(bg);
bgs.scale=1.4;
o1=createSprite(600,192.5,830,10)
o1.shapeColor="black"
o2=createSprite(600,348,830,10)
o2.shapeColor="black"
o3=createSprite(182.5,270,5,165)
o3.shapeColor="black"
o3=createSprite(1017.5,270,5,165)
o3.shapeColor="black"
w1=createSprite(200,270,30,150)
w1.shapeColor="white"
w2=createSprite(240,270,30,150)
w2.shapeColor="white"
w3=createSprite(280,270,30,150)
w3.shapeColor="white"
w4=createSprite(320,270,30,150)
w4.shapeColor="white"
w5=createSprite(360,270,30,150)
w5.shapeColor="white"
w6=createSprite(400,270,30,150)
w6.shapeColor="white"
w7=createSprite(440,270,30,150)
w7.shapeColor="white"
w8=createSprite(480,270,30,150)
w8.shapeColor="white"
w9=createSprite(520,270,30,150)
w9.shapeColor="white"
w10=createSprite(560,270,30,150)
w10.shapeColor="white"
w11=createSprite(600,270,30,150)
w11.shapeColor="white"
w12=createSprite(640,270,30,150)
w12.shapeColor="white"
w13=createSprite(680,270,30,150)
w13.shapeColor="white"
w14=createSprite(720,270,30,150)
w14.shapeColor="white"
w15=createSprite(760,270,30,150)
w15.shapeColor="white"
w16=createSprite(800,270,30,150)
w16.shapeColor="white"
w17=createSprite(840,270,30,150)
w17.shapeColor="white"
w18=createSprite(880,270,30,150)
w18.shapeColor="white"
w19=createSprite(920,270,30,150)
w19.shapeColor="white"
w20=createSprite(960,270,30,150)
w20.shapeColor="white"
w21=createSprite(1000,270,30,150)
w21.shapeColor="white"
b1=createSprite(220,245,25,100)
b1.shapeColor="black"
b2=createSprite(260,245,25,100)
b2.shapeColor="black"
b3=createSprite(340,245,25,100)
b3.shapeColor="black"
b4=createSprite(380,245,25,100)
b4.shapeColor="black"
b5=createSprite(420,245,25,100)
b5.shapeColor="black"
b6=createSprite(500,245,25,100)
b6.shapeColor="black"
b7=createSprite(540,245,25,100)
b7.shapeColor="black"
b8=createSprite(620,245,25,100)
b8.shapeColor="black"
b9=createSprite(660,245,25,100)
b9.shapeColor="black"
b10=createSprite(700,245,25,100)
b10.shapeColor="black"
b11=createSprite(780,245,25,100)
b11.shapeColor="black"
b12=createSprite(820,245,25,100)
b12.shapeColor="black"
b13=createSprite(900,245,25,100)
b13.shapeColor="black"
b14=createSprite(940,245,25,100)
b14.shapeColor="black"
b15=createSprite(980,245,25,100)
b15.shapeColor="black"
 
}

function draw(){
   createCanvas(1230,550);
    background(0);
    fill("white")
    textSize(30)
    text("Use Your Keyboard Keys to Play The Piano as Noted Letters",210,50)
fill("white")
textSize(25)
text("Q",190,380)
text("W",230,380)
text("E",270,380)
text("R",310,380)
text("T",350,380)
text("A",390,380)
text("S",430,380)
text("D",470,380)
text("F",510,380)
text("G",550,380)
text("H",590,380)
text("J",630,380)
text("K",670,380)
text("L",710,380)
text("Z",750,380)
text("X",790,380)
text("C",830,380)
text("V",870,380)
text("B",910,380)
text("N",950,380)
text("M",990,380)
fill("white")
textSize(25)
text("1",210,180)
text("2",250,180)
text("3",330,180)
text("4",370,180)
text("5",410,180)
text("6",490,180)
text("7",530,180)
text("8",610,180)
text("9",650,180)
text("0",690,180)
text("Y",770,180)
text("U",810,180)
text("I",890,180)
text("O",930,180)
text("P",970,180)

   if(keyWentDown("1")){
      b1.shapeColor=(77,74,73)
      sb1.play();
   }
else{
   b1.shapeColor="black"
}
if(keyWentDown("2")){
   b2.shapeColor=(77,74,73)
   sb2.play();
}
else{
b2.shapeColor="black"
}
if(keyWentDown("3")){
   b3.shapeColor=(77,74,73)
   sb3.play();
}
else{
b3.shapeColor="black"
}
if(keyWentDown("4")){
   b4.shapeColor=(77,74,73)
   sb4.play();
}
else{
b4.shapeColor="black"
}
if(keyWentDown("5")){
   b5.shapeColor=(77,74,73)
   sb5.play();
}
else{
b5.shapeColor="black"
}
if(keyWentDown("6")){
   b6.shapeColor=(77,74,73)
   sb6.play();
}
else{
b6.shapeColor="black"
}
if(keyWentDown("7")){
   b7.shapeColor=(77,74,73)
   sb7.play();
}
else{
b7.shapeColor="black"
}
if(keyWentDown("8")){
   b8.shapeColor=(77,74,73)
   sb8.play();
}
else{
b8.shapeColor="black"
}
if(keyWentDown("9")){
   b9.shapeColor=(77,74,73)
   sb9.play();
}
else{
b9.shapeColor="black"
}
if(keyWentDown("0")){
   b10.shapeColor=(77,74,73)
   sb10.play();
}
else{
b10.shapeColor="black"
}
if(keyWentDown("y")){
   b11.shapeColor=(77,74,73)
   sb11.play();
}
else{
b11.shapeColor="black"
}
if(keyWentDown("u")){
   b12.shapeColor=(77,74,73)
   sb12.play();
}
else{
b12.shapeColor="black"
}
if(keyWentDown("i")){
   b13.shapeColor=(77,74,73)
   sb13.play();
}
else{
b13.shapeColor="black"
}
if(keyWentDown("o")){
      b14.shapeColor=(77,74,73)
      sb14.play();
   }
else{
   b14.shapeColor="black"
}
if(keyWentDown("p")){
      b15.shapeColor=(77,74,73)
      sb15.play();
   }
else{
   b15.shapeColor="black"
}
if(keyWentDown("q")){
w1.shapeColor=(77,74,73)
s1.play();
}
else{
w1.shapeColor="white"
}
if(keyWentDown("w")){
w2.shapeColor=(77,74,73)
s2.play();
}
else{
w2.shapeColor="white"
 }
if(keyWentDown("e")){
w3.shapeColor=(77,74,73)
s3.play();
}
else{
w3.shapeColor="white"
}
if(keyWentDown("r")){
w4.shapeColor=(77,74,73)
s4.play();
}
else{
w4.shapeColor="white"
 }
if(keyWentDown("t")){
w5.shapeColor=(77,74,73)
s5.play();
 }
else{
w5.shapeColor="white"
 }
if(keyWentDown("a")){
w6.shapeColor=(77,74,73)
s6.play();
 }
else{
w6.shapeColor="white"
 }
if(keyWentDown("s")){
w7.shapeColor=(77,74,73)
s7.play();
 }
else{
w7.shapeColor="white"
 }
if(keyWentDown("d")){
w8.shapeColor=(77,74,73)
s8.play();
 }
else{
w8.shapeColor="white"
 }
if(keyWentDown("f")){
w9.shapeColor=(77,74,73)
s9.play();
 }
else{
w9.shapeColor="white"
 }
if(keyWentDown("g")){
w10.shapeColor=(77,74,73)
s10.play();
 }
else{
w10.shapeColor="white"
 }
if(keyWentDown("h")){
w11.shapeColor=(77,74,73)
s11.play();
 }
else{
w11.shapeColor="white"
 }
if(keyWentDown("j")){
w12.shapeColor=(77,74,73)
s12.play();
 }
else{
w12.shapeColor="white"
 }
if(keyWentDown("k")){
w13.shapeColor=(77,74,73)
s13.play();
 }
else{
w13.shapeColor="white"
 }
if(keyWentDown("l")){
w14.shapeColor=(77,74,73)
s14.play();
 }
else{
w14.shapeColor="white"
 }
if(keyWentDown("z")){
w15.shapeColor=(77,74,73)
s15.play();
 }
else{
w15.shapeColor="white"
 }
if(keyWentDown("x")){
w16.shapeColor=(77,74,73)
s16.play();
 }
else{
w16.shapeColor="white"
 }

if(keyWentDown("c")){
w17.shapeColor=(77,74,73)
s17.play();
 }
else{
w17.shapeColor="white"
 }
if(keyWentDown("v")){
w18.shapeColor=(77,74,73)
s18.play();
 }
else{
w18.shapeColor="white"
 }
if(keyWentDown("b")){
w19.shapeColor=(77,74,73)
s19.play();
 }
else{
w19.shapeColor="white"
 }
if(keyWentDown("n")){
w20.shapeColor=(77,74,73)
s20.play();
 }
else{
w20.shapeColor="white"
 }
if(keyWentDown("m")){
w21.shapeColor=(77,74,73)
s21.play();
 }
else{
w21.shapeColor="white"
 }

    drawSprites();
}
