//Main Audio
	var ma = new Audio();
	ma.src="assets/Sound/amongmain.mp3";

function clickGame(){
	var ss = document.getElementById("mainn");
	ss.remove();
    ma.play();
	ma.loop=true;
	addfon();




}


function addfon() {  
	lo = document.createElement('img');
    lo.src = "assets/Image/banner.png";
    lo.setAttribute("style","position: absolute;height: 250px;width: 370px;top: 100px;left: 570px;");
	document.getElementById('bd').appendChild(lo);

	buu = document.createElement('button');
	buu.setAttribute("id","inn");
	document.getElementById('bd').appendChild(buu);
	document.getElementById("inn").innerHTML="Character Move";
	document.getElementById("inn").setAttribute("style","border-radius:15px; padding:10px;position: absolute;height: 90px;width: 170px;top: 400px;left: 470px;font-size:30px;");
	document.getElementById("inn").setAttribute("onclick","mini()");


	buu1 = document.createElement('button');
	buu1.setAttribute("id","inn1");
	document.getElementById('bd').appendChild(buu1);
	document.getElementById("inn1").innerHTML="Mini Game";
	document.getElementById("inn1").setAttribute("style","border-radius:15px; padding:10px;position: absolute;height: 90px;width: 170px;top: 400px;left: 870px;font-size:30px;");
	document.getElementById("inn1").setAttribute("onclick","mini1()");

	



}

function mini(){
	ma.pause();
	var en = new Audio();
	en.src = "assets/Sound/enter.mp3";
	en.play();
	setTimeout(function(){
	 location.replace('amongusmove.html');
	 }
	 , 500);
	

	

	
}

function mini1(){
	ma.pause();
	var en = new Audio();
	en.src = "assets/Sound/enter.mp3";
	en.play();
	setTimeout(function(){
	 location.replace('amongus.html');
	 }
	 , 500);

	
}

