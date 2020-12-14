var userInput = document.querySelector('#txt-input');
var btnTransalate = document.querySelector('#btn-translate');
var translatedOutput = document.querySelector('#txt-output');
var btnReset = document.querySelector("#btn-reset");


function errorHandler() {
    alert("This is a limited free API and can be called only 5 times per hour. Please try again after an hour.");
}		
		
btnTransalate.addEventListener('click', () => {
    var inputText = userInput.value;
    var URL = 'https://api.funtranslations.com/translate/minion.json?text=' + inputText;

    fetch(URL)
        .then(response => response.json())
        .then(json => translatedOutput.innerText = json.contents.translated)
        .catch(errorHandler);
});	

btnReset.addEventListener('click', () => {
    userInput.value = " ";
});	