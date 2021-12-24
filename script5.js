var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload = function(){
    var data = JSON.parse(request.response);
console.log(data);
for(var i=0;i<data.length;i++){
if(data[i].currencies[0].name=='United States Dollar'){
    console.log(country[i].flag);
}
}
}