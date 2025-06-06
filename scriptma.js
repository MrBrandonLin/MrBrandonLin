let map;
function init(){
  $.ajaxSetup({async: false});
  
  let link = "http://100.80.137.182:2507";
  let route= "/maps"
  map = $.getJSON(link+route).responseJSON;
  generateCards(map);
}

function generateCards(map){

  let mainpanel = document.getElementById("mainpanel");
  let build ="";

  for(let i=0; i<map.length; i++){
    let maps = map[i]
    build += `<div>`;
	build += `	<br><hr>`;
	build += `	<img src = "Maps/${maps.mapName}.webp">`;
    build += `	<h1>${maps.mapName}</h3><b1>`;
    build += `	<div>OBJECTIVE - ${maps.mapObjective}</div><br>`;
    build += `	<div>LOBBY SIZE - ${maps.mapLobbysize}</div><br>`;
    build += `	<p>GAME MODE - ${maps.gameModes}</p><br>`;
    build += `	<br><hr><br>`;
    build += `</div>`;
  }
  mainpanel.innerHTML = build;
}

function filter1(){
  let input = document.getElementById("input").value;
  console.log(input);

  let List = []; 
  
  for(let i=0; i<map.length;i++){
	let maps = map[i]
	if( maps.mapName == input) {
      List.push(maps);
	}
  }
  console.log(`number found ${maps.length}`)
  generateCards(List);
}

function filter2(){
  let input = document.getElementById("input").value;
  console.log(input);

  let List = []; 
  
  for(let i=0; i<map.length;i++){
	let maps = map[i]
	if( maps.mapObjective == input) {
      List.push(maps);
	}
  }
  console.log(`number found ${maps.length}`)
  generateCards(List);
}

function filter3(){
  let input = document.getElementById("input").value;
  console.log(input);

  let List = []; 
  
  for(let i=0; i<map.length;i++){
	let maps = map[i]
	if( maps.mapLobbysize >= input) {
      List.push(maps);
	}
  }
  console.log(`number found ${maps.length}`)
  generateCards(List);
}