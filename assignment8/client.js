


addEventListener('load', function () {
    table = document.getElementById("showInfo");
    head = document.getElementById("head");
    data = new XMLHttpRequest();
    data.open("GET", "https://api.jsonbin.io/v3/b/68fcf992d0ea881f40bb2b6c", true);
    data.send("");
    data.onreadystatechange = function () {

        if (data.readyState == 4 && data.status == 200) {
            dataarry = JSON.parse(data.responseText).record;
            obj = dataarry[0];
            for (i in obj) {
                head.innerHTML += `<th>${i}</th>`
            }


            dataarry.forEach(function (ele) {
                table.innerHTML += `<tr>
            <td>${ele.firstName}</td>
            <td>${ele.lastName}</td>
            <td>${ele.phone}</td>
            <td>${ele.address}</td>
            <td>${ele.track}</td>
            <td>${ele.courses}</td>
            <td><img src="${ele.image}" width='100' , height='100'/></td>
            <td>${ele.position}</td>
        </tr>`
            });
            console.log(dataarry);


        }
    }
})

