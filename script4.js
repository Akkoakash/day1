var request = new XMLHttpRequest();
request.open('GET',' https://restcountries.eu/rest/v2/all',true);

request.onload = function(){
    var data = JSON.parse(request.response);
console.log(data);
for(var i=0;i<data.length;i++){
if(data[i].country[0].name=='flag'){
    console.log(country[i].name,region[i].data,sub-region[i].data,population[i].data);
}
}
}