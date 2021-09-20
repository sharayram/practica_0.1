var frase = prompt ("ingrese su frase: ");
var t = 0;
var vocales = ['a','e','i','o','u']


for(var u=0; u<=frase.length; u++){
    if(vocales.indexOf(frase[u])>=0){
        ++t;
    }
}

console.log("La frase/palabra tiene: "+t+" vocales");