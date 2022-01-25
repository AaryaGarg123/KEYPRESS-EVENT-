canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
function add() {
	img_imgTag = new Image();
	img_imgTag.onload = uploadimg; 
	img_imgTag.src = img_image;   

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
    keyPressed=e.keyCode;
    console.log(keyPressed);

    if(keyPressed >97 && keyPressed<122) (keyPressed >65 &&keyPressed <90)
    aplhabetkey();
    document.getElementById("d1").innerHTML="you pressed Alphabet key";
    console.log("alphabet key");
    
    if(keyPressed >97 && keyPressed<122) (keyPressed >65 &&keyPressed <90)
    numberkey();
    document.getElementById("d1").innerHTML="you pressed Number key";
    console.log("number key");

    if(keyPressed >97 && keyPressed<122) (keyPressed >65 &&keyPressed <90)
    arrowkey();
    document.getElementById("d1").innerHTML="you pressed Arrow key";
    console.log("arrow key");

    if(keyPressed >97 && keyPressed<122) (keyPressed >65 &&keyPressed <90)
    specialkey();
    document.getElementById("d1").innerHTML="you pressed Special key";
    console.log("special key");

    if(keyPressed >97 && keyPressed<122) (keyPressed >65 &&keyPressed <90)
     otherkey();
    document.getElementById("d1").innerHTML="you pressed Other key";
    console.log("other key");
}

function aplhabetkey()
{
	 img_image="Alpkey.png";
add();
}
function numberkey()
{
    img_image="numkey.png";
    add();
}
function arrowkey()
{
    img_image="Arrkey.png";
    add();
}
function specialkey()
{
    img_image="spkey.png";
    add();	
}
function otherkey()
{
    img_image="otherkey.png";
    add();
}
}