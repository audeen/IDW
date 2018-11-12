




function greet() {

    
    var name = document.getElementById('name-input').value;
    var age = document.getElementById('age-input').value;
    age = parseInt(age);


    var welcome = document.getElementById('welcome');
    welcome.innerHTML = "Hallo, " + name + ", du bist " + age + " Jahre alt";  ;
    welcome.className = "vip";

};

document.getElementById("welcome-button").addEventListener("click", greet);




console.log('Willkommen in der Konsole');
