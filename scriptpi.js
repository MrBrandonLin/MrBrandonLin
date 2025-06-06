let pilot;
function init(){
  $.ajaxSetup({async: false});
  
  let link = "http://100.80.137.182:2507";
  let route= "/pilots"
  pilot = $.getJSON(link+route).responseJSON;
  generateCards(pilot);
}

function generateCards(pilot){

  let mainpanel = document.getElementById("mainpanel");
  let build ="";

  for(let i=0; i<pilot.length; i++){
    let pilots = pilot[i]
    build += `<div class="cardpi">`;
	build += `	<br><hr>`;
	build += `	<h1>${pilots.playerName}</h1>`;
	build += `	<img style="width: 200px; height: 400px;" src = "Pilots/${pilots.ability}.png"><br>`;
    build += `	<hr>`;
    build += `	<h2>${pilots.pilotName} (${pilots.class})</h2>`;
    build += `	<p>ABILITY - ${pilots.ability}</p>`;
    build += `  <img style="width: 200px; height: 100px;"	src = "Ability/${pilots.ability}.png"><br>`;
    build += `	<p>WEAPON - ${pilots.pilotWeapons}</p>`;
    build += `  <img style="width: 200px; height: 100px;" src = "PWeapons/${pilots.pilotWeapons}.png"><br>`;
    build += `	<br><hr><br>`;
    build += `</div>`;
  }
  mainpanel.innerHTML = build;
}

function filter1(){
  let input = document.getElementById("input").value;
  console.log(input);
  let List = []; 
  for(let i=0; i<pilot.length;i++){
	let pilots = pilot[i]
	if( pilots.playerName == input) {
      List.push(pilots);
	}
  }
  console.log(`number found ${List.length}`)
  generateCards(List);
}
function filter2(){
  let input = document.getElementById("input").value;
  console.log(input);
  let List = []; 
  for(let i=0; i<pilot.length;i++){
	let pilots = pilot[i]
	if( pilots.pilotName == input) {
      List.push(pilots);
	}
  }
  console.log(`number found ${List.length}`)
  generateCards(List);
}
function filter3(){
  let input = document.getElementById("input").value;
  console.log(input);
  let List = []; 
  for(let i=0; i<pilot.length;i++){
	let pilots = pilot[i]
	if( pilots.class == input) {
      List.push(pilots);
	}
  }
  console.log(`number found ${List.length}`)
  generateCards(List);
}
function filter4(){
  let input = document.getElementById("input").value;
  console.log(input);
  let List = []; 
  for(let i=0; i<pilot.length;i++){
	let pilots = pilot[i]
	if( pilots.ability == input) {
      List.push(pilots);
	}
  }
  console.log(`number found ${List.length}`)
  generateCards(List);
}