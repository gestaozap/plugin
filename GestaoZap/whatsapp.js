var _gaq = _gaq || [];

var processedMsgSet = new Set();

var currentUserSet = "";
// var didInsert = false;

var lncbut = document.getElementsByTagName('body')[0];
var lncbutDiv = document.createElement("div");

lncbutDiv.innerHTML = '<button class=\"button\">Registrar Venda</div>';
lncbutDiv.id = 'pg';
lncbutDiv.addEventListener("click", function(e) {
  // alert("vamo pagar tudo!");
  document.getElementById('pg').style.visibility = 'hidden';

  var nameProduct = prompt("Qual produto vendido?", "");

  if (nameProduct == null || nameProduct == "") {
      txt = "User cancelled the prompt.";
      return;
  } else {
      console.log(nameProduct);
  }

  var value = prompt("Qual valor da venda?", "0.00");

  if (value == null || value == "") {
      txt = "User cancelled the prompt.";
      return;
  } else {
      console.log(value);
  }

  var map = new Object(); // or var map = {};
  map["value"] = value;
  map["product"] = nameProduct;
  map["user"] = currentUserSet.replace(/\s/g, '');
  // updated: this works with Chrome 30:
  var evt=document.createEvent("CustomEvent");
  evt.initCustomEvent("registerSell", true, true, map);
  document.dispatchEvent(evt);

  // createDOM();
  // setupContainerEventListeners();
  // this.classList.add('hide');
});
//
var stylelancbut = "";
stylelancbut += "#pg { height: 40px; border-radius: 50px; width: 60px; background-color: #43d854;  ";
stylelancbut += "position: fixed; top: 15px; left: 15px; z-index: 99999; box-shadow: 0 1px 1px 0 rgba(0,0,0,0.06), 0 2px 5px 0 rgba(0,0,0,0.2);}";
stylelancbut += "#pg:hover { box-shadow: none; top:16px; cursor: pointer; }";
stylelancbut += "#pg.hide { display: none; }";
stylelancbut += "#pg.titleText {text-align: center; font-size: 13px; padding-top: 14px; color: white; }";
var styleElbtn = document.createElement("style");
styleElbtn.innerHTML = stylelancbut;





// Create the XHR object.
function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    // XHR for Chrome/Firefox/Opera/Safari.
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != "undefined") {
    // XDomainRequest for IE.
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    // CORS not supported.
    xhr = null;
  }
  return xhr;
}

// Helper method to parse the title tag from the response.
function getTitle(text) {
  return text.match('texto');
}

// Make the actual CORS request.
function makeCorsRequest(text) {
  // This is a sample server that supports CORS.
  var url = 'https://gestaozap-project.mybluemix.net';

  var xhr = createCORSRequest('POST', url);
  if (!xhr) {
    alert('CORS not supported');
    return;

  // Response handlers.
  xhr.onload = function() {
    var text = xhr.responseText;
    var title = getTitle(text);
    console.log('Response from CORS request to ' + url + ': ' + text);
  };

  xhr.onerror = function() {
    alert('Woops, there was an error making the request.');
  };

  // xhr.setRequestHeader("Content-type", "application/json");
  // xhr.setRequestHeader("Authorization", "Basic " + Nzg0Zjk5MjMtMDA4Ny00NDFjLWIxMzEtNDgwYjIwMDBiM2E2OjFFUjZNUVU3NFFzQg==);
  var data = JSON.stringify({"text": text});


  xhr.send(data);
}}



var didInsert = false;

const facebook_clickbait = function(node) {
  console.log("in")

  if(document.getElementById("main") && !document.getElementById("ciabToolbar") && didInsert == false) {
    console.log("in!");

    didInsert = true;
    const userName = document.getElementById("main").getElementsByClassName("_1wjpf")[0].innerHTML;
    console.log(userName);

    if(currentUserSet == userName) {
      return;
    }

    currentUserSet = userName;

    console.log("didInsert");
    // didInsert = true;
    // fetch(chrome.extension.getURL('/toolbar.html'))
    //   .then(response => response.text())
    //   .then(data => {

    var data = '<div style=\"background: #ccc;height: 60px;\"> <ul id = \"ciabToolbar\"> <li class \"menu1\" style=\"float: left;\" title = \"#TITLEMENU1\"> Menu 1  </li><li class \"menu2\" style=\"float: left;margin-left: 20px;\" title = \"#TITLEMENU2\"> Menu 2 </li><li> <a id=\"click-this\">Click this</a> <!-- Fixed --> </li></ul><button></div>'


        console.log(data);
        console.log("x");

        // data.getElementById("ciabToolbar").getElementsByClassName("menu1")[0].title = currentUserSet;
        // console.log("b");
        // console.log(data.getElementById("ciabToolbar"));
        // console.log(data.getElementById("ciabToolbar").getElementsByClassName("menu1"));
        // data.getElementById("ciabToolbar").getElementsByClassName("menu2")[0].setAttribute('title', currentUserSet);
        data = data.replace("#TITLEMENU1", userName);
        data = data.replace("#TITLEMENU2", "jose");

        document.getElementById("main").insertAdjacentHTML('afterbegin', data);
        addActivateBtn();
        // var script = ;
        // var scriptLink =document.createElement();
        // console.log("-");
        document.head.innerHTML = document.head.innerHTML + " <style> .button {    background-color: #444AB0; /* Green */    border: none;    color: white;    padding: 15px 32px;    text-align: center;    text-decoration: none;    display: inline-block;    font-size: 16px;    margin: 4px 2px;    cursor: pointer;}</style> ";
        // console.log(document.head);

        // console.log("a");
        //Erro!
        // var xhr = new XMLHttpRequest();
        // xhr.open("GET", "https://gestaozap-project.mybluemix.net/api/sale", true);
        // xhr.onreadystatechange = function() {
        //   if (xhr.readyState == 4) {
        //     console.log("IN!");
        //     console.log(xhr);
        //   }
        // }
        // xhr.send();

      setInterval(function(){ didInsert = false; }, 3000);
  }

    const chatText = [...node.getElementsByClassName('Tkt2p')];
    // console.log(images)

      chatText.forEach(function(el) {
        var msgs = [...el.getElementsByClassName('copyable-text')];

        msgs.forEach(function(i) {
          // console.log(msgs)
          if(!processedMsgSet.has(i.textContent) && i.textContent.includes("vou querer")){
            console.log(i.textContent)
            // msgs[0].insertAdjacentHTML('afterend', "<input id=\"Lançar Pagamento\" type=\"button\" value=\"clickme\" onclick=\"fazerPG();\" />");
            // msgs[0].insertAdjacentHTML('afterend', styleElbtn.innerHTML);

            processedMsgSet.add(i.textContent)
            // lncbutDiv.id = i.textContent + "_bt";
            //
            i.appendChild(lncbutDiv);
            document.getElementById('pg').style.visibility = 'visible';
            // i.appendChild(styleElbtn);
          }
        });
    });
};

function fazerPG() {

}

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    // xmlHttp.send( null );
    return xmlHttp.responseText;
}


function doFunction(){
  alert("EY!");
}

// Button to enable the UI
function addActivateBtn() {
  var body = document.getElementsByTagName('body')[0];
  var startBtnDiv = document.createElement("div");
  startBtnDiv.innerHTML = '<div class="titleText">Whats<br/>All<br/>App</div>';
  startBtnDiv.id = 'btnOpenWhatsAllApp';
  startBtnDiv.addEventListener("click", function( e ) {

      var map = new Object(); // or var map = {};
      // map["value"] = "R$400,00";
      map["user"] = currentUserSet.replace(/\s/g, '');;
      // updated: this works with Chrome 30:
      var evt=document.createEvent("CustomEvent");
      evt.initCustomEvent("getSells", true, true, map);
      document.dispatchEvent(evt);

    // alert("TESTE");
    // createDOM();
    // setupContainerEventListeners();
    // this.classList.add('hide');
  });

  var style = "";
  style += "#btnOpenWhatsAllApp { height: 70px; border-radius: 50px; width: 70px; background-color: #43d854;  ";
  style += "position: fixed; top: 15px; left: 15px; z-index: 99999; box-shadow: 0 1px 1px 0 rgba(0,0,0,0.06), 0 2px 5px 0 rgba(0,0,0,0.2);}";
  style += "#btnOpenWhatsAllApp:hover { box-shadow: none; top:16px; cursor: pointer; }";
  style += "#btnOpenWhatsAllApp.hide { display: none; }";
  style += "#btnOpenWhatsAllApp .titleText {text-align: center; font-size: 13px; padding-top: 14px; color: white; }";
  var styleEl = document.createElement("style");
  styleEl.innerHTML = style;
  body.appendChild(startBtnDiv);
  body.appendChild(styleEl);
}

const observer = new MutationObserver(function(mutations) {
      facebook_clickbait(document.body);
});

const config = { attributes: true, childList: true, characterData: false, subtree: true }

observer.observe(document.body, config);


facebook_clickbait(document.body);
