/*///// Código del ejercicio de configuración de canvas (S05. Ex.01.) ///*/
const CANVAS = document.getElementById("lienzo");
const CTX = CANVAS.getContext("2d");
CANVAS.width = window.innerWidth;
CANVAS.height = window.innerHeight;

function updateCanvasSize() {
  CANVAS.width = CANVAS.getBoundingClientRect().width;
  CANVAS.height = CANVAS.getBoundingClientRect().height;
}

function renderLines() {
  /*///// 2. Secuencia de comandos para dibujar una linea ///*/
  /* 
    1. Definir el estilo de la línea (como color y grosor).
    2. Definir el inicio de la línea usando la función beginPath()
    3. Definir el punto de origen de la línea usando la función moveTo(x, y)
    4. Definir otro punto en el canvas al cual se va a conectar la línea usando lineTo(x, y)
    5. Definir tantos puntos como se desee
    *. (Opcional) Usar la función closePath() para trazar una línea desde el último punto hasta el origen de la línea.
    6. Usar la función stroke() para renderizar la línea en el canvas
    
    7. En caso de desear realizar más líneas, se repiten los pasos del 1 al 6.
  */
  function CordenadaRefresh(refrescar) {
    CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);
    // coca cola a las constantes
    var H = window.width;
    const X = refrescar.clientX;
    const Y = refrescar.clientY;
    
    for (let i = 0; i < 40; i++) {
      CTX.strokeStyle = "#FFFFFF";
      CTX.lineWidth = 2;
      CTX.beginPath();
      CTX.moveTo((i * 20), 0);
      CTX.lineTo(X, Y);
      CTX.stroke();
  }
    //localizar target
    var coordinatesh2 = document.getElementById("Target");

    // cambiar los valores del h2es

    coordinatesh2.style.transform = `translate(${X}px, ${Y}px)`;
    //por si quieres ver tambein en la consola
  }

  // agregar ansiedad a la pagina
  document.addEventListener("mousemove", CordenadaRefresh, updateCanvasSize);

}

window.addEventListener("esize", updateCanvasSize);
requestAnimationFrame(renderLines);