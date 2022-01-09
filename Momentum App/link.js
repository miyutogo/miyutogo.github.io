function showLink() {
    var show = document.getElementById("linksDisplay");

    if(show.style.display === "none") {
        show.style.display = "block";
    } else {
        show.style.display = "none";
    }
}

function searchItem() {
    var search = document.getElementById("searchBar");

    if(search.style.display === "none") {
        search.style.display = "block";
    } else {
        search.style.display = "none";
    }
}

function showToDo() {
    var show = document.getElementById("todoList");

    if(show.style.display === "block") {
        show.style.display = "none";
    } else {
        show.style.display = "block";
    }
}

