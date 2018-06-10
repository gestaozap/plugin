function injectJs(link) {
        var scr = document.createElement("script");
        scr.type="text/javascript";
        scr.src=link;
        (document.head || document.body || document.documentElement).appendChild(scr);
}

document.addEventListener('registerSell', function (e)
{
  var data=e.detail;
  console.log("received "+data);
  var sendString = '{ "value":"'+ data["value"] + '", "description": "'+ data["product"] +'", "date": "01/04/2018", "name":"'+data["user"]+'"}';
  console.log(sendString);
  chrome.runtime.sendMessage({
      method: 'POST',
      action: 'xhttp',
      url: ' http://gestaozap-project.mybluemix.net/api/sale',
      data: sendString
  }, function(responseText) {
      alert(responseText);
      console.log(responseText);
      /*Callback function to deal with the response*/
  });

});

document.addEventListener('getSells', function (e)
{
  var data=e.detail;
  console.log("received "+data);
  // var sendString = '{ "value":"'+ data["value"] + '", "description": "TATTO YX", "date": "01/04/2018", "name":"'+data["user"]+'"}';
  var saleUrl = 'http://gestaozap-project.mybluemix.net/api/sale/' + data["user"]
  console.log(saleUrl);
  chrome.runtime.sendMessage({
      method: 'GET',
      action: 'xhttp',
      url: saleUrl,
      data: ""
  }, function(responseText) {
      var response = JSON.parse(responseText);
      var vals = [];

      response.forEach(function(el) {
        vals.push(el.description + " - " + el.value);
      });

      alert(vals.join('\n'))
      console.log(responseText);
      /*Callback function to deal with the response*/
  });

});

injectJs(chrome.extension.getURL("/whatsapp.js"));
