window.addEventListener('load',
  function () {

    alert('Bienvenido a mi pagina');
  }, false);

var d = new Date();
//document.write(d.getHours());

var d = new Date();


var d = new Date();
var dia = new Array(7);
dia[0] = "Domingo";
dia[1] = "Lunes";
dia[2] = "Martes";
dia[3] = "Miercoles";
dia[4] = "Jueves";
dia[5] = "Viernes";
dia[6] = "Sabado";
//document.write("Hoy es: " + dia[d.getDay()]);

var mm = new Date();
var m2 = mm.getMonth() + 1;
var mesok = (m2 < 10) ? '0' + m2 : m2;
var mesok = new Array(12);
mesok[0] = "Enero";
mesok[1] = "Febrero";
mesok[2] = "Marzo";
mesok[3] = "Abril";
mesok[4] = "Mayo";
mesok[5] = "Junio";
mesok[6] = "Julio";
mesok[7] = "Agosto";
mesok[8] = "Septiembre";
mesok[9] = "Octubre";
mesok[10] = "Noviembre";
mesok[11] = "Diciembre";
//document.write("Este mes es: " + mesok[mm.getMonth()]);

//<![CDATA[
function makeArray() {
  for (i = 0; i < makeArray.arguments.length; i++)
    this[i + 1] = makeArray.arguments[i];
}
var months = new makeArray('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo',
  'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre');
var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;
var yy = date.getYear();
var year = (yy < 1000) ? yy + 1900 : yy;



let const1 = [d.getDay()]
let text1 = const1.toString();
let const2 = mesok[mm.getMonth()]
let text2 = const2.toString();
let const3 = year;
let text3 = const3.toString();
let const4 = d.getHours();
let text4 = const4.toString();
let const5 = d.getMinutes();
let text5 = const5.toString();
let const6 = d.getSeconds();
let text6 = const6.toString();
let const7 = dia[d.getDay()];
let text7 = const7.toString();


alert("Hoy es " + text7 + " " + text1 + " de " + text2 + " del " + text3 + " y son las " + text4 + " horas " + text5 + " minutos " + text6 + " segundos")



let text8 = "Hoy es " + text7 + " " + text1 + " de " + text2 + " del " + text3 + " y son las " + text4 + " horas " + text5 + " minutos " + text6 + " segundos"
//alert("Hoy es ", const1 + " de " + const2 + " del " + year) + document.write(" y son las " + +d.getHours() + " horas "  + +d.getMinutes() + " minutos  " + +d.getSeconds() + " segundos"')

document.write('<center>');
document.write("Hoy es " + dia[d.getDay()] + " " + day + " de " + months[month] + " del " + year) + document.write(" y son las " + +d.getHours() + " horas " + +d.getMinutes() + " minutos  " + +d.getSeconds() + " segundos");
document.write('</center>');
//text8 = document.write("Hoy es " + dia[d.getDay()] + " " +day + " de " + months[month] + " del " + year) + document.write(" y son las " + +d.getHours() + " horas "  + +d.getMinutes() + " minutos  " + +d.getSeconds() + " segundos")


//Elemento contador
iniciarContador('micontador');
//Inicia la cuenta atrás
//bloque es el id del bloque usado para alojar el contador regresivo.
function iniciarContador(bloque) {
  let hoy = new Date();
  let ini = hoy.valueOf();
  let fin = leerFinal(bloque)
  let tiempo = Math.floor((fin - ini) / 1000); //pasar a segundos enteros)
  let obContador = { timer: null, "tiempo": tiempo };
  contar(obContador, bloque); //para evitar el delay inicial de 1 segundo
  obContador.timer = setInterval(contar, 1000, obContador, bloque);
}
//Decrementa el tiempo hasta la fecha final
//Argumento:  objeto con  temporizador y el tiempo restante
function contar(contador, bloque) {
  let partes = [];
  if (contador.tiempo <= 0) {
    clearInterval(contador.timer);
    contador.tiempo = 0;  //por si la fecha final ha pasado
  }
  else {
    contador.tiempo--;
  }
  partes = formatTiempo(contador.tiempo);
  mostrarTiempo(partes, bloque);
}
//Convierte el tiempo restante en partes  dias, horas, minutos, segundos
function formatTiempo(tiempo) {
  let dias, horas, minutos, segundos, partes;
  [minutos, segundos] = dividir(tiempo, 60);
  [horas, minutos] = dividir(minutos, 60);
  [dias, horas] = dividir(horas, 24);
  partes = [dias, horas, minutos, segundos];
  return partes;
}
//divide números enteros devuelve [cociente, resto]
function dividir(num, den) {
  num = Math.floor(num);
  let coc = Math.floor(num / den);
  let resto = num % den;
  return [coc, resto];
}
//Poner en la página web
//Argumento : array dias,horas,minutos,segundos
//Partes estarán dentro del bloque contador
function mostrarTiempo(partes, bloque) {
  let bloques = document.querySelectorAll("#" + bloque + " .dig span");
  for (let i = 0; i < bloques.length; i++) {
    bloques[i].innerHTML = partes[i].toString().padStart(2, 0);
  }
}
//Lee el valor de  fecha final desde un elemento con id = contador
//devuelve fecha final como valor
//formato de fecha año-mes-dia o año/mes/dia
function leerFinal(bloque) {
  let fecha;
  let milisec = 0;
  let datos = document.getElementById(bloque);
  datos = datos.dataset.final;
  fecha = new Date(datos);
  if (!isNaN(fecha.valueOf())) {
    fecha = new Date(fecha);
    milisec = fecha.valueOf();
  }
  return milisec;
}
