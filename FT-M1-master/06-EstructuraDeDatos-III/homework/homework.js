"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

class BinarySearchTree {
  constructor (value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.size =1;
  };
  size(){ 
    return this.size; //esta func retorna el tamaño del árbol
  }
  insert(nuevoValor){
    this.size++;  //incrementa el tamaño del arbol
    if (nuevoValor < this.value) { //si el valor q inserto es menor q la raiz lo coloca a la izquierda
      if (!this.left) {
        this.left = new BinarySearchTree(nuevoValor); // si no colocar el nuevo valor a la izquierda
      }else{
        this.left.insert(nuevoValor);
      }

    }else{
      if (!this.right) {
        this.right = new BinarySearchTree(nuevoValor);
      } else {
        this.right.insert(nuevoValor);
      }
    }
  }
  contains(anyValue){
    if (anyValue === this.value) { // Comparamos el valor de la raiz con un nuevo valor q ingresa al arbol
      return true;
    };
    if (anyValue < this.value) { // si el valor es menor se sigue por la izq buscando la condicion de igualdad
      if (this.left?.contains( anyValue)) {
        return true;
      }
    }else{
      if (this.right?.contains(anyValues)) {
        return true;
      };
    }
    return false;
  }
 //Este está ok
 depthFirstForEach(saver, recorrido){
  switch (recorrido) {
    case 'pre-order':
      saver(this.value); // Ejecuta el cb, guarda el valor
      this.left?.depthFirstForEach(saver, recorrido); // si hay algo a la izq lo guarda y sigue bajando
      this.right?.depthFirstForEach(saver, recorrido); // si no hay nada a la izquierda o ya está guardado el valor, guarda el derecho
      
      break;  
    case 'post-order':  
      this.left?.depthFirstForEach(saver, recorrido); //recorre el arbol por la izq hasta el final, al llegar al úñtimo elemento lo guarda
      this.right?.depthFirstForEach(saver, recorrido); // una vez guardado el izq, pasa al hermano derecho y lo guarda
      saver(this.value); // sube un nivel y ejecuta el cb para volver a repetir el proceso 
      break;
    default:
      this.left?.depthFirstForEach(saver, recorrido); // recorre por la izq hasta el final
      saver(this.value);
      this.right?.depthFirstForEach(saver, recorrido);
      break;
  }
 }

 //Este está ok
 breadthFirstForEach(saver, arr = []){
  saver(this.value); // guarda la raiz
  if (this.left) {
    arr.push(this.left); // si hay algo a la izq de la raiz lo pusheo al array
  }
  if (this.right) {
    arr.push(this.right); // si hay algo a la derecha de la raiz lo pusheo al array
  }
  if (arr.length) {
    arr.shift().breadthFirstForEach(saver, arr); // si el array no esta vacio saca el primer elemento y lo guarda en saver
  }
 }
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
