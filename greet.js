




function greet() {

    
    var name = document.getElementById('name-input').value;
    var age = document.getElementById('age-input').value;
    age = parseInt(age);


    var welcome = document.getElementById('welcome');
    if (age >=18) {
        welcome.innerHTML = "Hallo, " + name + "! Du bist volljährig";  
    }
    else {
        welcome.innerHTML = "Hallo, " + name + "! Du bist nicht volljährig";  
    };
    
    if (name == "Klaus") {
        welcome.className = "vip";
    }
    else {
        welcome.className = "";
    };

};

document.getElementById("welcome-button").addEventListener("click", greet);




console.log('Willkommen in der Konsole');
