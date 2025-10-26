addEventListener('load', function () {
    students = [
        { name: "Ali", age: 20, Crs: "CS" },
        { name: "Sara", age: 22, Crs: "Math" },
        { name: "Omar", age: 19, Crs: "Physics" },
        { name: "Laila", age: 21, Crs: "CS" },
        { name: "Hassan", age: 23, Crs: "Engineering" },
        { name: "Mona", age: 20, Crs: "Biology" },
        { name: "Kareem", age: 24, Crs: "Math" },
        { name: "Noor", age: 18, Crs: "CS" }
    ];

    table = document.getElementById("table");
    table.innerHTML = `<tr>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
        </tr>`

    students.forEach(function (ele) {
        table.innerHTML += `<tr>
            <td>${ele.name}</td>
            <td>${ele.age}</td>
            <td>${ele.Crs}</td>
        </tr>`
    });

    search = document.getElementsByName("search")[0];

    icon = document.getElementById("searchIcon");

    show = document.getElementById("show");

    table2 = document.getElementById("showInfo");

    function showInfo(res) {
        table2.innerHTML = ' ';
        show.innerText = ' '
        if (res.length == 0) {
            show.innerText = "No Match Was Found";
        } else {
            table2.innerHTML = `<tr>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
        </tr>`
            res.forEach(function (ele) {
                table2.innerHTML += `<tr>
            <td>${ele.name}</td>
            <td>${ele.age}</td>
            <td>${ele.Crs}</td>
        </tr>`
            })


        }
    }

    icon.addEventListener('click', function (e) {
        e.preventDefault();
        if (search !== '' || search.value != undefined) {
            res = students.filter(function (ele) {
                if (ele.name.toLowerCase() == search.value.toLowerCase() || ele.Crs.toLowerCase() == search.value.toLowerCase()) {
                    return ele;
                }
            });

            showInfo(res);
        } else {
            show.innerText = "Please Enter Name or Course";

        }

    });

    search.addEventListener("keyup", function (e) {
        e.preventDefault();
        if (e.key == "Enter" && (search.value !== '' || search.value != undefined)) {
            res = students.filter(function (ele) {
                if (search.value != '') {
                    if (ele.name.toLowerCase() == search.value.toLowerCase() || ele.Crs.toLowerCase() == search.value.toLowerCase()) {
                        return ele;
                    }
                }

            });

            showInfo(res);
        }


    });

    select = document.getElementById("sort");
    sortTable = document.getElementById("sortTable");

    select.addEventListener('change', function () {
        if (parseInt(this.value) == 1) {
            students.sort(function (a, b) {
                return a.name.localeCompare(b.name)
            })
        } else if (parseInt(this.value) == 2) {
            students.sort(function (a, b) {
                return a.age - b.age
            })
        }
        sortTable.innerHTML = `<tr>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
        </tr>`

        students.forEach(function (ele) {
            sortTable.innerHTML += `<tr>
            <td>${ele.name}</td>
            <td>${ele.age}</td>
            <td>${ele.Crs}</td>
        </tr>`
        });

    })

    



    





})

