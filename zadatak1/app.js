

function welcome(){
	alert("Welcome");
}


setInterval(function(){
	var color = ["yellow", "green", "red", "purple", "orange"];
	var nColor = Math.floor(Math.random()*5 + 1);
	document.body.style.backgroundColor = color[nColor];


}, 1000);



function chtext(){
	var t = document.getElementById("text");
	t.textContent = "Text has changed";
	t.style.fontSize = "30px";
	t.style.backgroundColor = "white";
}

function chimg(){
	var img = document.getElementById("img");
	img.src = "hello2.jpg"

}

function radio(){
	var m = document.getElementById("male");
	var f = document.getElementById("female");
	var output = document.getElementById("prikaz");

	if(m.checked){
		output.innerHTML = "<h3> Izabran je MALE</h3>";
	} else if(f.checked){
		output.innerHTML = "<h3> Izabran je FEMALE</h3>";
	} else {
		output.innerHTML = "<h3> Nije izabran nijedan</h3>";
	}

}




function showInput(){
	var fn = document.getElementById("fn").value;
	var ln = document.getElementById("ln").value;
	var animal = document.getElementById("animal").value;
	var output = document.getElementById("prikaz2");

	output.innerHTML = "<h3>" + fn + "</h3><br>" + "<h3>" + ln + "</h3><br>" + "<h3>" + animal + "</h3><br>";
}

function chlocation(){
	location.href = "thx.html";
	return false;
}


function back(){
	location.href = "index.html";
	return false;
	
}



