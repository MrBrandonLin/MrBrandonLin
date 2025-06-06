let player;
function init(){
  $.ajaxSetup({async: false});
  
  let link = "http://100.80.137.182:2507";
  let route= "/player"
  player = $.getJSON(link+route).responseJSON;
  generateCards(player);
  test();
}

function generateCards(player){

  let mainpanel = document.getElementById("mainpanel");
  let build ="";

  for(let i=0; i<player.length; i++){
    let players = player[i]
    build += `<div class="cardpl" >`;
	build += `	<br><hr>`;
	build += `	<img src = "Pilots/${players.playerPilot}.png">`;
    build += `	<h1>${players.playerName}</h1>`;
    build += `	<div>PLAYER ID- ${players.playerId}</div>`;
    build += `	<h3>ALL TIME WINS - ${players.allTimeWins}</h3>`;
    build += `	<h3>HOURS PLAYED - ${players.hoursPlayed}</h3>`;
    build += `	<br><hr>`;
    build += `	<h2>KILL RECORDS</h2>`;
    build += `	<h3>PLAYERS - ${players.pilotKills }</h3>`;
    build += `	<h3>TITANS - ${players.titanKills}</h3><br>`;
    build += `	<br><hr><br>`;
    build += `</div>`;
  }
  mainpanel.innerHTML = build;
}

function filter1(){
  let input = document.getElementById("input").value;
  console.log(input);
  let List = []; 
  for(let i=0; i<player.length;i++){
	let players = player[i]
	if( players.playerName == input) {
      List.push(players);
	}
  }
  console.log(`number found ${List.length}`)
  generateCards(List);
}

function filter2(){
  let input = document.getElementById("input").value;
  console.log(input);
  let List = []; 
  for(let i=0; i<player.length;i++){
	let players = player[i]
	if( players.allTimeWins >= input) {
      playerList.push(players);
	}
  }
  console.log(`number found ${player.length}`)
  generateCards(List);
}

function filter3(){
  let input = document.getElementById("input").value;
  console.log(input);
  let List = []; 
  for(let i=0; i<player.length;i++){
	let players = player[i]
	if( players.hoursPlayed >= input) {
      playerList.push(players);
	}
  }
  console.log(`number found ${player.length}`)
  generateCards(List);
}

function filter4(){
  let input = document.getElementById("input").value;
  console.log(input);
  let List = []; 
  for(let i=0; i<player.length;i++){
	let players = player[i]
	if( players.playerPilot == input) {
      playerList.push(players);
	}
  }
  console.log(`number found ${player.length}`)
  generateCards(List);
}