const frutas = ["Manzana", "Plátano"];

frutas.push("Naranja");


console.log("Longitud total del arreglo:", frutas.length);

document.write("<p class='resultado-write'>Arreglo resultante: <strong>[" + frutas.join(", ") + "]</strong></p>");
document.write("<p class='resultado-write'>Longitud total del arreglo: <strong>" + frutas.length + "</strong></p>");
