var name;

function storeusername(){
  name = document.getElementById('username').value;
  if(name=='' || name==' '){
    name=='ananoymous';
  }
  if(window.localStorage.getItem(name)){
    setTimeout(startplaying,1500);
    document.querySelector('p').innerText=name+"'s last score"+window.localStorage.getItem(name);
  }
  else{
    window.localStorage.setItem(name, 0);
  }

  function startplaying(){
    document.getElementById('input').setAttribute('hidden',true);
    document.querySelector('canvas').removeAttribute('hidden');
    game.state.start('load')
  }
}

function gettop10(){
  console.log('hi')
  var http = new XMLHttpRequest();

  function event(){

  }

http.addEventListener("load", event);
  http.open('POST','/username',true);
  http.send('username='+document.getElementById('username').value)
}
