/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function generateBurger() {
    var burger = new Burger(false, false, false);
    var random = ((Math.random() * 1));

    if (random > 0 && random <= 0.2) {
        $('#receta-actual').replaceWith('<img id="receta-actual" src="assets/images/recetas/receta1.png"/>');

    } else if (random > 0.2 && random <= 0.5) {
        $('#receta-actual').replaceWith('<img  id="receta-actual"  src="assets/images/recetas/receta2.png"/>');
        Object.defineProperty(burger, 'tomate', {value: false});
        Object.defineProperty(burger, 'pepinillo', {value: false});
        delete burger.carne;
    } else {
        $('#receta-actual').replaceWith('<img  id="receta-actual"  src="assets/images/recetas/receta3.png"/>');
        Object.defineProperty(burger, 'lechuga', {value: false});
    }
    
}

