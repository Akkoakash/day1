var table=document.createElement('table');
table.setAttribute('class','table');
var thead=document.createElement('thead');
thead.setAttribute('class','thead-dark');
var tr =document.createElement('tr');
var th1=createElement('tr','first');
var th2=createElement('tr','last');
tr.append(th1,th2);
thead.append(tr);

var tbody=document.createElement('tbody');
var tr=document.createElement('tr');
var td1=createElement('td','john');
var td2=createElement('td','last');
tr.append(th1.th2);
thead.append(tr);

var tbody=document.createElement('tbody');
var tr=document.createElement('tr');
var td1=createElement('td','mark');
var td2=createElement('td','otto');
tr.append(th1.th2);
thead.append(tr);
table.append(thead,tbody);
document.body.append(table);







function createelement(element,value){
    var element=document.createElement(elename);
    element.innerHTML=value;
   return element;
}