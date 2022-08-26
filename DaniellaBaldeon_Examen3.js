
let arreglo1= [3, 2, 1, 1, 2, 3, 2, 3, 1];

let arreglo2=[1, 1, 2, 2, 1, 1, 1, 2, 1];

console.log("Arreglo 1: " + arreglo1);
console.log("Arreglo 2: " + arreglo2);

arreglo1.forEach(
    function(elemento, index, arr) {
         for (var i=0; i<arreglo2.length; i++) {
          var mult=  arreglo1[index]*arreglo2[i]; 
          var suma=  arreglo1[index]+arreglo2[i];
          console.log(arreglo1[index] + "*" + arreglo2[i] + "=" + mult);
          console.log(arreglo1[index] + "+" + arreglo2[i] + "=" + suma);
        console.log("--------------------------------");
    
    }

}
)



