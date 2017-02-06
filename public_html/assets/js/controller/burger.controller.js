/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function asignarIngredientes(burger) {
    burger = new Burger(false, false, false);  
        var random = ((Math.random() * 1));
        if (random > 0 && random <= 0.2) {
            $('#receta-actual').replaceWith(
                    '<img id="receta-actual"  class="receta mg_left-50" src="assets/images/recetas/receta1.png"/>');

        } else if (random > 0.2 && random <= 0.5) {
            $('#receta-actual').replaceWith(
                    '<img  id="receta-actual" class="receta mg_left-50"  src="assets/images/recetas/receta2.png"/>');
            Object.defineProperty(
                    burger, 'tomate', {value: false, configurable: true, writable: true}
            );
            Object.defineProperty(
                    burger, 'pepinillo', {value: false, configurable: true, writable: true}
            );
            delete burger.carne;

        } else {
            $('#receta-actual').replaceWith(
                    '<img  id="receta-actual" class="receta mg_left-50" src="assets/images/recetas/receta3.png"/>');
            Object.defineProperty(
                    burger, 'lechuga', {value: false, configurable: true, writable: true}
            );


        }   
return burger;

}



function comprobarHamburguesa(burger) {
    var listo = true;
    var ingredientes = Object.getOwnPropertyNames(burger);
    console.log(ingredientes);
    for (var i = 0; i < ingredientes.length; i++) {
        if (burger[ingredientes[i]] === false) {
            listo = false;
        }
    }
    if (listo === true) {
        alert('ENHORABUENA');
        $('#panInf-tabla').removeClass('animacion-montaje_pan-inf_desmontar');
        $('#panInf-tabla').addClass('animacion-montaje_pan-inf_montar');
        $('#panSup-tabla').removeClass('animacion-montaje_pan-sup_desmontar');
        $('#panSup-tabla').addClass('animacion-montaje_pan-sup_montar');
    } else {
        alert('faltan ingredientes,la hamburguesa no esta lista');
    }
}


