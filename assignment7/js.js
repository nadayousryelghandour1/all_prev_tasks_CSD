addEventListener('load', function () {
    console.log("Default Method : document.images");
    console.log(document.images);

    console.log("Document Method : document.getElementsByTagName(\"img\")");
    console.log(document.getElementsByTagName("img"));


    city = document.querySelectorAll("option");
    console.log("Find all options for city drop down list");
    console.log(city)
    console.log(city[0])
    console.log(city[1])
    console.log(city[2])


    rows = document.querySelectorAll("table[class = bPink] tr");
    console.log("Find all rows for second table");
    console.log(rows)
    console.log(rows[0])
    console.log(rows[1])
    console.log(rows[2])

    fontblue = document.getElementsByClassName("fontBlue");
    console.log("Find all element for class fontblue");
    console.log(fontblue);

    //***************************************************************************************** */

    table = document.querySelector("table[class = bPink]");
    anchor = table.children[0].children[0].children[0].children[0];
    text = table.children[0].children[0].children[1];
    anchor.href = "Training.com";
    text.innerText = "Training"


    image = document.getElementsByTagName("img")[1];
    image.style.border = "6px solid pink";

    checkbox = document.querySelectorAll("input[type = checkbox ]");
    for (var i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked) {
            alert(checkbox[i].value)
        }
    }

    example = document.getElementById("example");
    example.style.backgroundColor = "pink";

    //***************************************************************************************** */


    img = document.querySelector("#img")
    next = document.querySelector("#next")
    prev = document.querySelector("#prev")
    show = document.querySelector("#show")
    _stop = document.querySelector("#_stop")
    counter = 1;
    flag = false;

    next.addEventListener('click', function () {
        counter++;
        if (counter > 5) {
            counter = 1;
        }
        img.src = "images/" + counter + ".jpg";
    })

    prev.addEventListener('click', function () {
        counter--;
        if (counter < 1) {
            counter = 5;
        }
        img.src = "images/" + counter + ".jpg";
    })

    show.addEventListener('click', function () {
        flag = true;

        setInterval(function () {
            if (flag) {
                counter++;
                if (counter > 5) {
                    counter = 1;
                }
                img.src = "images/" + counter + ".jpg";
            } else {
                clearInterval();
            }

        }, 500)

    })

    _stop.addEventListener('click', function () {
        flag = false;
    })

    //***************************************************************************************** */

    var students = [
        { name: "Ali", age: 20, Crs: "CS", id: 1 },
        { name: "Sara", age: 22, Crs: "Math", id: 2 },
        { name: "Omar", age: 19, Crs: "Physics", id: 3 },
        { name: "Laila", age: 21, Crs: "CS", id: 4 },
        { name: "Hassan", age: 23, Crs: "Engineering", id: 5 },
        { name: "Mona", age: 20, Crs: "Biology", id: 6 },
        { name: "Kareem", age: 24, Crs: "Math", id: 7 },
        { name: "Noor", age: 18, Crs: "CS", id: 8 }
    ];

    select = document.getElementsByClassName("students")[0];

    students.forEach(function (ele, index) {
        select.innerHTML += `<option value=${index + 1}>${ele.id}</option>`
    })


    info = document.getElementById("info");


    select.addEventListener('change', function () {
        stID = parseInt(this.value);
        student = students.find(function (ele) {
            if (ele.id == stID) {
                return ele;
            }
        })

        info.innerHTML = `<p>Student name : ${student.name}</p>
        <p>Student age : ${student.age}</p>
        <p>Crs : ${student.Crs}</p>
        <p>ID : ${student.id}</p>
        <hr/>`
    });

    list = document.getElementById("list");

    students.forEach(function(ele, index) {
        if (index%2 == 0) {
            list.innerHTML += `<div class = 'even'><p>Student name : ${ele.name}</p>
        <p>Student age : ${ele.age}</p>
        <p>Crs : ${ele.Crs}</p>
        <p>ID : ${ele.id}</p>
        <hr/></div>`
        }else{
            list.innerHTML += `<div class = 'odd'><p>Student name : ${ele.name}</p>
        <p>Student age : ${ele.age}</p>
        <p>Crs : ${ele.Crs}</p>
        <p>ID : ${ele.id}</p>
        <hr/></div>`
        }
    })



})

