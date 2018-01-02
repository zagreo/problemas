
function matrizTex(m){
  if(typeof m == "string"){
    m = JSON.parse(m);
  }
  if(Array.isArray(m)){
    let codigo: string = "\\begin{pmatrix} ";
    m.forEach((fila)=>{
      fila.forEach((elemento)=>{
        codigo = codigo + elemento+" & ";
      });
      codigo = codigo.slice(0,-2) + "\\\\";
    });
    // console.log(codigo.slice(0,-2) + "\\end{pmatrix}");
    return codigo.slice(0,-2) + "\\end{pmatrix}";
  }else{
    return "error: "+m;
  }

}
