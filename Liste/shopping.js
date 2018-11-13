/**
 * Funktion zum Aktualisieren der dargestellten Einkaufsliste
 */
function update() {
	// Auf Liste im HTML zugreifen
	var list = document.getElementById('list');

	// "Alte" Listenpunkte entfernen
	list.innerHTML = '';

	// Alle Listenpunkte einzeln durchgehen
	for (var i = 0; i < shopping.length; i++) {
		// Aktuellen Listenpunkt im HTML ausgeben
        list.innerHTML += '<li>' + shopping[i].name + ' &times; ' + shopping[i].amount + '<button onclick="remove('+i+')">'+ 'Entfernen' + '</button>'+'</li>';
        
	}
}

/**
 * Neues Produkt zur Einkaufsliste hinzufügen
 */
function add() {
	// Titel aus Eingabefeld auslesen
    var newItem = document.getElementById('item').value;
    var newAmount = parseInt(document.getElementById('amount').value);

	// Produkt zur Einkaufsliste hinzufügen
	shopping.push({name: newItem,amount: newAmount});

	// Darstellung aktualisieren
	update();
}

// Einkaufsliste definieren
var shopping = JSON.parse(localStorage.getItem('data'));
if (!shopping) {
    shopping = [];
}


// Darstellung beim Laden der Webseite aktualisieren
update();

function save() {
    localStorage.setItem('data', JSON.stringify(shopping));
    console.log(shopping);
}



 function remove(i) {
    shopping.splice(i, 1);
    update();
} 

