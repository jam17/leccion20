function callbackPromedio(a, b, c, callback){

 var promedio=(a+b+c)/3;
 var fx=callback(promedio);//va a tomar el vslor que le den y va a ejecutar callback que no se sabe que hace
 return fx;

}

//segunda parte no tiene nada que ver con la de arriba
var seg=1;

function segundero(){
document.getElementById("titulo").innerHTML = seg; //en vez de decir seecundero no iniciado va a decir 1 o 2 etc
seg ++;
return seg;

}

setInterval(segundero, 1000); //con 1000 pf funciona con milisegundos