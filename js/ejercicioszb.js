// Reto 1
function ejercicioZab (n) { 
    if (n <= 0 || n > 100){
    console.log("El numero debe ser mayor a 0 y menor o igual a 100");
    return;
}

    for(let i = 1; i <= n; i++) {
        let row = " ";
        for (let j = 1; j <= n; j++) {
            if (j <= n - i) {
                row += " ";
            } else {
                row += "*";
            }
        }
        console.log(row);

    }
}
 
ejercicioZab(10)


// Reto 2
function pagesTurn(n, p) {
    if (n <= 0 || p <= 1 || p > n) {
    return;
    }

    let pageTurns = 0;
    if (p <= (n + 1) / 2) {
    if (p % 2 === 0) {
        pageTurns = p / 2;
    } else {
        pageTurns = (p - 1) / 2;
    }
    } else {
    if (n % 2 === 0) {
        pageTurns = (n - p + 1) / 2;
    } else {
        pageTurns = (n - p) / 2;
    }
    }
    console.log(pageTurns);
}

pagesTurn(6, 2);

//Reto 3
function encontrarTipoAve(arr) {
    let conteo = []; // Array para almacenar el conteo de cada tipo de ave
    let maxOcurrencias = 0; // Variable para almacenar el máximo número de ocurrencias
    let tipoMasComun = arr[0]; // Variable para almacenar el tipo más común de ave
    for (let i = 0; i < arr.length; i++) { // Recorre el array de aves
      let tipoActual = arr[i]; // Almacena el tipo de ave actual en una variable
  
      if (!conteo[tipoActual]) { // Si no existe una posición en el array para el tipo de ave actual
        conteo[tipoActual] = 0; // Crea una posición en el array y asigna 0 como conteo inicial
      }
      conteo[tipoActual]++; // Incrementa el conteo del tipo de ave actual en 1
  
      if (conteo[tipoActual] > maxOcurrencias) {
        // Si el conteo actual es mayor que el máximo número de ocurrencias registrado hasta ahora,
        // actualiza el máximo número de ocurrencias y el tipo más común
        maxOcurrencias = conteo[tipoActual];
        tipoMasComun = tipoActual;
      } else if (conteo[tipoActual] === maxOcurrencias && tipoActual < tipoMasComun) {
        // Si el conteo actual es igual al máximo número de ocurrencias registrado hasta ahora,
        // pero el tipo actual es menor que el tipo más común registrado hasta ahora,
        // actualiza el tipo más común
        tipoMasComun = tipoActual;
      }
    }
  
    return "Tipo: " + tipoMasComun; // Retorna el tipo más común de ave
  }
  
  let arr = [1, 4, 4, 2, 1, 1, 1]; // Array de aves
  let resultado = encontrarTipoAve(arr); // Llama a la función encontrarTipoAve con el array de aves
  console.log(resultado); // Imprime el resultado