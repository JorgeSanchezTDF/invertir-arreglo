function invertirArreglo() {
  let arreglo: number[] = []; // arreglo vacio
  let cantidadDeElementos: number = Number(
    prompt("Ingrese la cantidad de elementos del arreglo")
  );
  for (let i = 0; i < cantidadDeElementos; i++) {
    //Pido los elementos del arreglo
    arreglo[i] = Number(prompt("Ingrese un numero")); //Los guardo en el arreglo
  }
  for (let i = cantidadDeElementos - 1; i >= 0; i--) {
    //Imprimo el arreglo invertido
    console.log(arreglo[i]); //Imprimo el elemento
  }
}

invertirArreglo(); //Llamo a la funcion
