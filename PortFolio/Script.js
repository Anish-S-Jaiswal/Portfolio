const apiurl = "https://api.dictionaryapi.dev/api/v2/entries/en/";
var meaning = document.getElementById('input2').value;
var syno = document.getElementById('input3').value;
async function dics()
{
    var a = "hello";
    var a = document.getElementById('input1').value;
    const response = await fetch(apiurl + a);
    var data = await response.json();
     let meaning=data[0].meanings[0].definitions[0].definition;
     document.getElementById('input2').value=meaning;
     syno = data[0].meanings[0].synonyms[0];
     document.getElementById('input3').value=syno;
}
dics();