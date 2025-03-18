const imputAmigo = document.getElementById ("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById ("listaAmigos");
const ulResultado = document.getElementById("resultado");
function agregarAmigo() {
    //if(imputAmigo.value == ""){ // tambien puedes colocarle !imputAmigo
        //alert("Por Favor Debes Ingresar un Nombre Valido Gracias")
    //}
    listaAmigos.push(imputAmigo.value);
    //ulListaAmigos.innerHTML = ulListaAmigos.innerHTML+imputAmigo.value;
   ulListaAmigos.innerHTML += `<li>${imputAmigo.value}</li>`;
};

function sortearAmigo(){
const random = Math.floor((Math.random() * listaAmigos.length));
const amigoSecreto =  listaAmigos[random];
ulResultado.innerHTML = `<li>El Amigo Secreto es: ${amigoSecreto}</li>`;
}


