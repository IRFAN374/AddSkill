// import textgears from 'textgears-api';

// const textgearsApi = textgears('QzDHhSFOTJUTOswK', {language: 'en-US'});
// textgearsApi.checkGrammar('I is a engineer')
//     .then((data) => {
//         for (const error of data.errors) {
//             console.log('Error: %s. Suggestions: %s', error.bad, error.better.join(', '));
//         }
//     })
//     .catch((err) => {});



function loadFileAsText(){
    var fileToLoad = document.getElementById("fileToLoad").files[0];
  
    var fileReader = new FileReader();
    fileReader.onload = function(fileLoadedEvent){
        var textFromFileLoaded = fileLoadedEvent.target.result;
        document.getElementById("inputTextToSave").value = textFromFileLoaded;
    };
  
    fileReader.readAsText(fileToLoad, "UTF-8");
  }
  document.getElementById("inputTextToSave").addEventListener('ondbclick', ()=>{

  })
  fetch("https://api.textgears.com/spelling?text=&language=en-GB&key=QzDHhSFOTJUTOswK")
  .then(response => response.JSON())
  .then (data => console.log(data));