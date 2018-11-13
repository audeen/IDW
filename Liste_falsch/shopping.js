/* Nicht die geilste Lösung, da das Array geleert wird */

var shopping = ['Milch', 'Eier', 'Brot', 'Mehl'];
list();

function list () {

    for (i=0; i < shopping.length; i++) {
        document.getElementById("list").innerHTML += "<li>" + shopping[i] + "</li>";
};
}

function add_item() {
    var item = document.getElementById("item").value;
    shopping.splice(0, shopping.length);
    shopping.push(item);
    

    list();
   
}

