var currentDay = $("#currentDay");

function displayDate() {
    var today = moment().format('dddd, MMM DD, YYYY hh:mm:ss a');
    currentDay.text(today);
};

setInterval(displayDate, 1000);

//if current hour, then color = 
//if >current hour, then color = 
//if <current hour, then color = 
// var currentHour = moment().format('hh');

// $(function colorChange() {
//     if (".hour" = currentHour) {
//         $(".present").animate({
//             backgroundColor: "#ff6961",
//             color: "white",
//         })
//         console.log(.hour);
//         console.log(currentHour);
//     } else if {
//     (".hour" > currentHour) {
//         $(".future").animate({
//             backgroundColor: "#77dd77",
//             color: "white",
//         })
//         console.log(.hour);
//         console.log(currentHour);
//     }
// } else if {
//     (".hour" < currentHour) {
//     $(".past").animate({
//         backgroundColor: "#d3d3d3",
//         color: "white",
//     })
//     console.log(.hour);
//     console.log(currentHour);
// }
//   }
// });




//9am
var description9a = document.getElementById("description9a");
var saveButton9a = document.getElementById("save-button9a");

saveButton9a.addEventListener("click", function (event) {
    event.preventDefault();

    var newDescription = description9a.value;

    localStorage.setItem("newDescription", JSON.stringify(newDescription));
    renderMessage();
});

function renderMessage() {
    var savedHour = JSON.parse(localStorage.getItem("newDescription"));
    if (savedHour !== null) {
        document.querySelector(".message").textContent = savedHour + " is saved to local storage!"
    }
};

//10am
var description10a = document.getElementById("description10a");
var saveButton10a = document.getElementById("save-button10a");

saveButton10a.addEventListener("click", function (event) {
    event.preventDefault();

    var newDescription = description10a.value;

    localStorage.setItem("newDescription", JSON.stringify(newDescription));
    renderMessage();
});

function renderMessage() {
    var savedHour = JSON.parse(localStorage.getItem("newDescription"));
    if (savedHour !== null) {
        document.querySelector(".message").textContent = savedHour + " is saved to local storage!"
    }
};


//11am
var description11a = document.getElementById("description11a");
var saveButton11a = document.getElementById("save-button11a");

saveButton11a.addEventListener("click", function (event) {
    event.preventDefault();

    var newDescription = description11a.value;

    localStorage.setItem("newDescription", JSON.stringify(newDescription));
    renderMessage();
});

function renderMessage() {
    var savedHour = JSON.parse(localStorage.getItem("newDescription"));
    if (savedHour !== null) {
        document.querySelector(".message").textContent = savedHour + " is saved to local storage!"
    }
};


//12pm
var description12p = document.getElementById("description12p");
var saveButton12p = document.getElementById("save-button12p");

saveButton12p.addEventListener("click", function (event) {
    event.preventDefault();

    var newDescription = description12p.value;

    localStorage.setItem("newDescription", JSON.stringify(newDescription));
    renderMessage();
});

function renderMessage() {
    var savedHour = JSON.parse(localStorage.getItem("newDescription"));
    if (savedHour !== null) {
        document.querySelector(".message").textContent = savedHour + " is saved to local storage!"
    }
};


//1pm
var description1p = document.getElementById("description1p");
var saveButton1p = document.getElementById("save-button1p");

saveButton1p.addEventListener("click", function (event) {
    event.preventDefault();

    var newDescription = description1p.value;

    localStorage.setItem("newDescription", JSON.stringify(newDescription));
    renderMessage();
});

function renderMessage() {
    var savedHour = JSON.parse(localStorage.getItem("newDescription"));
    if (savedHour !== null) {
        document.querySelector(".message").textContent = savedHour + " is saved to local storage!"
    }
};


//2pm
var description2p = document.getElementById("description2p");
var saveButton2p = document.getElementById("save-button2p");

saveButton2p.addEventListener("click", function (event) {
    event.preventDefault();

    var newDescription = description2p.value;

    localStorage.setItem("newDescription", JSON.stringify(newDescription));
    renderMessage();
});

function renderMessage() {
    var savedHour = JSON.parse(localStorage.getItem("newDescription"));
    if (savedHour !== null) {
        document.querySelector(".message").textContent = savedHour + " is saved to local storage!"
    }
};


//3pm
var description3p = document.getElementById("description3p");
var saveButton3p = document.getElementById("save-button3p");

saveButton3p.addEventListener("click", function (event) {
    event.preventDefault();

    var newDescription = description3p.value;

    localStorage.setItem("newDescription", JSON.stringify(newDescription));
    renderMessage();
});

function renderMessage() {
    var savedHour = JSON.parse(localStorage.getItem("newDescription"));
    if (savedHour !== null) {
        document.querySelector(".message").textContent = savedHour + " is saved to local storage!"
    }
};


//4pm
var description4p = document.getElementById("description4p");
var saveButton4p = document.getElementById("save-button4p");

saveButton4p.addEventListener("click", function (event) {
    event.preventDefault();

    var newDescription = description4p.value;

    localStorage.setItem("newDescription", JSON.stringify(newDescription));
    renderMessage();
});

function renderMessage() {
    var savedHour = JSON.parse(localStorage.getItem("newDescription"));
    if (savedHour !== null) {
        document.querySelector(".message").textContent = savedHour + " is saved to local storage!"
    }
};


//5pm
var description5p = document.getElementById("description5p");
var saveButton5p = document.getElementById("save-button5p");

saveButton5p.addEventListener("click", function (event) {
    event.preventDefault();

    var newDescription = description5p.value;

    localStorage.setItem("newDescription", JSON.stringify(newDescription));
    renderMessage();
});

function renderMessage() {
    var savedHour = JSON.parse(localStorage.getItem("newDescription"));
    if (savedHour !== null) {
        document.querySelector(".message").textContent = savedHour + " is saved to local storage!"
    }
};

