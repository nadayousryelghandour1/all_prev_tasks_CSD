addEventListener('load', function () {
    tasks = document.getElementById("tasks");
    addBtn = document.getElementById("add");
    task = document.getElementById("task");
    var arr = [];

    
    addBtn.addEventListener('click', function () {
        if (task.value.trim() !== "") {
            arr.push(task.value);
            showTasks();
            task.value = "";
        }

    });

    function showTasks() {
        tasks.innerHTML = "";
        arr.forEach(function (ele, index) {
            tasks.innerHTML += `
                <li>
                    <div class='divT'>
                        <span>${ele}</span>
                        <button class="delete" data-index="${index}">Delete</button>
                    </div>
                </li>
            `;
        });
    }



    tasks.addEventListener('click', function (e) {
        if (e.target.classList.contains("delete")) {
            index = parseInt(e.target.dataset.index); 
            arr.splice(index, 1); 
            showTasks(); 
        }
    });


});

