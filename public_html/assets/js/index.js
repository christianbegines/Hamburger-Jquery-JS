
var hamburguesa = new Burger(false, false, false);

var generado = false;


function onDragStartIngrediente(event) {
    event.dataTransfer.setData("text", getIdIngredienteFromElementoIngrediente(event.target));
}
function onDragOverTabla(event) {
    event.preventDefault();
}

function generateBurger(burger) {
    hamburguesa = new Burger(false, false, false);
    hamburguesa = asignarIngredientes(burger);
    generado = true;
    $('#pantalla-info').html("");


}

function onDropInTabla(event) {
    try {
        if (generado === true) {
            var idIngrediente = event.dataTransfer.getData("text");
            var ingredienteListoParaTabla = this.generarIngredienteEnTabla(idIngrediente);
            var names = Object.getOwnPropertyNames(hamburguesa);
            
             if ($('#tabla-cocina').find('#panInf-tabla').length || idIngrediente === "panInf") {
                if (!$('#tabla-cocina').find('#' + idIngrediente + '-tabla').length) {
                    if (idIngrediente === "panInf") {

                        $('#tabla-cocina').append(ingredienteListoParaTabla);

                    } else if (idIngrediente === "panSup") {
                        $('#tabla-cocina').prepend(ingredienteListoParaTabla);
                    
                    } else {
                        if (names.indexOf(idIngrediente) !== -1) {
                            $('#panInf-tabla').before(ingredienteListoParaTabla);
                        } else {
                             throw 'el ingrediente no a sido pedido';
                        }
                    }
                } else {
                    throw 'Ya has puesto eso !! Fijate bien';
                }
                hamburguesa[idIngrediente] = true;
            } else {
               throw 'Sin base de pan no vas a ningun lado';
            }
        } else {
            throw 'Atiende o a la calle!';
        }
    } catch (ex) {
        $('#pantalla-info').html('<p class="letras-pantalla_info">'+ex+'</p>');
    }
}

function getIdIngredienteFromElementoIngrediente(elementoIngrediente) {
    var value = $(elementoIngrediente).attr("id");
    if (typeof (value) === typeof (undefined) || value === false) {
        throw "no existe el atributo 'id'";
    }

    if (isNaN(value) === false) {
        throw "El valor de 'id'  es un numero";
    }
    return value;

}

function generarIngredienteEnTabla(idIngrediente) {
    var ingrediente = document.createElement("img");
    var ingredienteDiv = document.createElement("div");
    ingrediente.setAttribute("src", "assets/images/ingredientes/" + idIngrediente + ".png");
    if (idIngrediente === "panSup") {
        ingredienteDiv.setAttribute("class", "en-mesa " + idIngrediente + "");
    } else if (idIngrediente === "panInf") {
        ingredienteDiv.setAttribute("class", "en-mesa  " + idIngrediente + "");
    } else {
        ingredienteDiv.setAttribute("class", "en-mesa  " + idIngrediente + "");
        $('#panInf-tabla').addClass('animacion-montaje_pan-inf_desmontar');
        $('#panSup-tabla').addClass('animacion-montaje_pan-sup_desmontar');
    }

    ingredienteDiv.setAttribute("id", "" + idIngrediente + "-tabla");
    ingredienteDiv.appendChild(ingrediente);
    return ingredienteDiv;
}



