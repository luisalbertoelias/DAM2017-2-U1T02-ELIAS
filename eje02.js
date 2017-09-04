// Luis Alberto Elías Burgara

//Función donde verifica si es un palindromo o no
var cadena = "anita lava la tina";
cadena = cadena.toLowerCase();

function palindromo(cadena){
    var palindromo = '';  
    var lower = cadena.replace(/\s+/g,""); 

    for(var i = lower.length -1 ; i >= 0; i--){ 
        palindromo = palindromo + lower[i]; 
    } 

    if(lower == palindromo){ 
        console.log('Es palindromo') 
    }else{ 
        console.log('No es palindromo') 
    } 
}

//Función para contar palabras
function contarPalabras(cadena){
    var cadena2 = cadena.split(" ");
    console.log("Palabras: "+cadena2.length);
;}

//Contar número de letras sin espacio
function contarLetras (cadena){
    var sinEspacios = cadena.toString().replace(/ /g,"");
    console.log("Letras: "+sinEspacios.length);
}

//Contar vocales
function contarVocales(cadena){
    var sinEspacios = cadena.toString().replace(/ /g,"");
    var contador = 0;
    for(var i=0; i<=sinEspacios.length; i++){
        if(cadena[i] == "a"){
            contador++;
        }else{
            if(cadena[i] == "e"){
                contador++;
            }else{
                if(cadena[i] == "i"){
                    contador++;
                }else{
                    if(cadena[i] == "o"){
                        contador++;
                    }else{
                        if(cadena[i] == "u"){
                            contador++
                        }
                    }
                }
            }
        }
    }//for
    console.log(contador+1);
}

function contarConsonantes (cadena){
    var contador = 0;
    var consonantes = ["b","c","d","f","g","h","j","k","l","m","n","ñ","p","q","r","s","t","v","w","x","y","z"];
    var sinEspacios = cadena.toString().replace(/ /g,"");
    for (var i in sinEspacios){
        for (var j in consonantes)
            if (sinEspacios [i] == consonantes [j] ){
            contador++; 
        }
    }
    console.log("Consonantes: "+contador);
}

palindromo(cadena);
contarPalabras(cadena);
contarLetras(cadena);
contarVocales(cadena);
contarConsonantes(cadena);