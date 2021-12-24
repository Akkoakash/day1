var board = document.createElement("div")
board.style.width = "1030"
board.style.display = "flex"
board.style.flexDirection = "row"
board.style.flexWrap = "wrap"

const APIKey = "fc579142-f849-447d-ac45-8bb1e142e527";
fetch("https://restcountries.com/v3.1/all")
.then(function(data) {
    return data.json();
})
.then(function (dataobj) {
    console.log(dataobj)
    dataobj.forEach(function (element) {
        var mydiv = document.createElement("div");
        mydiv.style.width = "200px";
        mydiv.style.display = "flex";
        mydiv.style.flexDirection = "coloumn";
        mydiv.style.border = "1px solid black";
        mydiv.style.marginRight = "20px";
        mydiv.style.marginBottom = "20px";
        mydiv.style.marginLeft = "30px";

        board.appendChild(mydiv)

        var box = document.createElement("img");
        box.style.width = "199px";
        box.style.height = "100px";
        box.style.border = "1px solid black";
        box.setAttribute("src", element.flag.png);
        var button = document.createElement("button");
        button.style.width = "100px";
        box.style.height = "30px";
        box.style.backgroundColor = "white";
        button.innerText = "Get Weather";
        button.style.textAlign = "center"
        mydiv.appendChild(button)
        mydiv.appendChild(box);

       var value1 = document.createElement("div");
       value1.style.width ="200px";
       value1.style.height = "50px";
       value1.innerText = "element.name.common";

       mydiv.appendChild(value2);
       button.addEventListener("click", (Event) => {
           fetch("https://api.openweathermap.org/data/2.5/weather" + Event.target.dataset.name + "&appid" + APIkey)
           .then((response) => {
               return response.json();
           })
           .then((result) => {
               console.log(result);
               alert('weather for:' + data[i].name + '\n' + 'weather:' + result.main.temp)
           })
           .catch((err) => {
               alert("check error exist!")
           })
       })
        })
        document.body.appendChild(board);
})