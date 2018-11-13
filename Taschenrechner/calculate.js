
function calculate() {
    
    var number_1 = document.getElementById('number-1').value;
    number_1 = parseInt(number_1);
    var number_2 = document.getElementById('number-2').value;
    number_2 = parseInt(number_2);
    var sum = number_1 + number_2;
    
    
    
/*     if (polite)
    {
        document.getElementById('sum').innerHTML = "Sehr geehrter Benutzer, Ihre Summe lautet: " + sum;
    }
    
    else 
    {
        document.getElementById('sum').innerHTML = "Summe: " + sum;
    }
 */

return sum;

};

function answer(polite) {
    if (polite) {
        document.getElementById('sum').innerHTML = "Sehr geehrter Benutzer, Ihre Summe lautet: " + calculate();
    }

    else {
        document.getElementById('sum').innerHTML = "Summe: " + calculate();
    }
}



