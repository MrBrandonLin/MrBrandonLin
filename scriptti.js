let titan;
function init(){
  $.ajaxSetup({async: false});
  
  let link = "http://100.80.137.182:2507";
  let route= "/titans"
  titan = $.getJSON(link+route).responseJSON;
  generateCards(titan);
}

function generateCards(titan){

  let mainpanel = document.getElementById("mainpanel");
  let build ="";

  for(let i=0; i<titan.length; i++){
    let titans = titan[i]
    build += `<div class="cardpi" >`;
	    build += `	<br><hr>`;
	    build += `	<h1>${titans.playerName}</h1>`;
	    build += `	<img style="width: 250px; height: 400px;" src = "Titans/${titans.titanName}.webp"><br>`;
        build += `	<hr>`;
        build += `	<h2>${titans.titanName} - HP ${titans.titanHealth}</h2>`;
        build += `	<p>KITS - ${titans.kits}</p>`;
        build += `  <img style="width: 100px; height: 100px;" src = "Kit/${titans.kits}.webp"><br>`;
        build += `	<p>WEAPON - ${titans.titanWeapons}</p>`;
        build += `  <img style="width: 200px; height: 100px;" src = "TWeapons/${titans.titanWeapons}.webp"><br>`;
        build += `	<br><hr><br>`;
        build += `</div>`;
  }
  mainpanel.innerHTML = build;
}

function filter1(){
  let input = document.getElementById("input").value;
  console.log(input);
  let List = []; 
  for(let i=0; i<titan.length;i++){
	let titans = titan[i]
	if( titans.playerName == input) {
      List.push(titans);
	}
  }
  console.log(`number found ${titans.length}`)
  generateCards(List);
}
function filter2(){
  let input = document.getElementById("input").value;
  console.log(input);
  let List = []; 
  for(let i=0; i<titan.length;i++){
	let titans = titan[i]
	if( titans.titanName == input) {
      List.push(titans);
	}
  }
  console.log(`number found ${titans.length}`)
  generateCards(List);
}
function filter1(){
  let input = document.getElementById("input").value;
  console.log(input);
  let List = []; 
  for(let i=0; i<titan.length;i++){
	let titans = titan[i]
	if( titans.kits == input) {
      List.push(titans);
	}
  }
  console.log(`number found ${titans.length}`)
  generateCards(List);
}
function filter4(){
  let input = document.getElementById("input").value;
  console.log(input);
  let List = []; 
  for(let i=0; i<titan.length;i++){
	let titans = titan[i]
	if( titans.titanWeapons == input) {
      List.push(titans);
	}
  }
  console.log(`number found ${titans.length}`)
  generateCards(List);
}