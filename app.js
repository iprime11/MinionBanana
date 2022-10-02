var btntranslate = document.querySelector(".button");
var textinputer  = document.querySelector("#textinput");
var textoutputer = document.querySelector("#output");

var serverURl = "https://api.funtranslations.com/translate/minion.json"
btntranslate.addEventListener("click" , clickhandler);

function clickhandler() {
   var inputtext = textinputer.value;
   
fetch(gettranslatedurl(inputtext))
  .then(response=> response.json())
  .then(json => {
      var translatedtext = json.contents.translated;
      textoutputer.innerText= translatedtext;})
  .catch(errorHandler) 

}

function gettranslatedurl(input){
     return serverURl + "?" + "text=" +input

}


function errorHandler(error){
  console.log("error occured" ,error)
   alert("wrong")
}



