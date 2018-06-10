var _gaq = _gaq || [];

var processedMsgSet = new Set();

var currentUserSet = "";
// var didInsert = false;

var resumoHtml = '<div id="resumo" style="padding-top: 10px; border-top: 2px solid #CCC;background: #020f59;color:#fff;"><p style="font-size: 14px;margin-left: 10px;font-weight: bold; margin-bottom: 10px;">Meu Orçamento Mensal:</p><p style="font-size: 14px;margin-left: 10px;">Seu ganho médio mensal: <span style="float:right;margin-right: 20px;">R$4.111,89</span></p><p style="margin-left: 10px;"><span style="display: block;  background: #09d261;  width: 50%;height: 10px;"></span></p><p style="font-size: 14px;margin-left: 10px;"><br>Você gastou uma média de: <span style="float:right;margin-right: 20px;">R$4.492,70</span> </p><p style="margin-left: 10px;margin-bottom: 15px;"><span style="display: block;background: #ef4343;width: 60%;height: 10px;"></span></p></div>';

var toolbar = '<div style="background: #020F59;height: 60px;z-index: 999999999;"><ul id = "ciabToolbar" style=" margin-top: 20px;font-size: 16px; color: #fff;"><li class = "menu1" style="float: left;margin-left: 25px;margin-right: 30px;" title = "#TITLEMENU1"> <img id="imageLogo" src="data:image/png;base64,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" style="width: 120px;margin-top: -8px;"/></li><li class "menu2" style="float: left;margin-left: 20px;" title = "#TITLEMENU2"> Historico </li><li class "menu2" style="float: left;margin-left: 20px;" title = "#TITLEMENU2"> Venda </li><li class "menu2" style="float: left;margin-left: 20px;" title = "#TITLEMENU2"> Promoção </li><li class "menu2" style="float: right;margin-right: 20px;" title = "#TITLEMENU2"> a receber: <span style=" color: white; background: #09d261; ">R$500,00</span> </li></ul><button</div>';


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
var didInsertSide = false;

const facebook_clickbait = function(node) {
  console.log("in")

  if(didInsertSide == false){
    document.getElementById("side").insertAdjacentHTML('beforeend', resumoHtml)
    didInsertSide = true;
  }

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

    // var data = '<div style=\"background: #ccc;height: 60px;\"> <ul id = \"ciabToolbar\"> <li class \"menu1\" style=\"float: left;\" title = \"#TITLEMENU1\"> Menu 1  </li><li class \"menu2\" style=\"float: left;margin-left: 20px;\" title = \"#TITLEMENU2\"> Menu 2 </li><li> <a id=\"click-this\">Click this</a> <!-- Fixed --> </li></ul><button></div>'
    //
    //
    //     console.log(data);
    //     console.log("x");
    //
    //     // data.getElementById("ciabToolbar").getElementsByClassName("menu1")[0].title = currentUserSet;
    //     // console.log("b");
    //     // console.log(data.getElementById("ciabToolbar"));
    //     // console.log(data.getElementById("ciabToolbar").getElementsByClassName("menu1"));
    //     // data.getElementById("ciabToolbar").getElementsByClassName("menu2")[0].setAttribute('title', currentUserSet);
    //     data = data.replace("#TITLEMENU1", userName);
    //     data = data.replace("#TITLEMENU2", "jose");

        document.getElementById("main").insertAdjacentHTML('afterbegin', toolbar);
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
