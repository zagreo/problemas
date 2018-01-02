export interface Parametro {

  nombre: string;//para poder usar identificadores personalizados aparte de los generados por defecto: p0, p1, p2,...etc
  valor:any;//puede ser un número o una cadena que se calculará con la función generadora
  tipo: string;//enumeración de tipos Aleatorio, secuencial, calculado, constante
  generador: any; //función que genera el valor del parámetro, en el caso de Aleatorio o secuencial el rango de valores: inicial..final o lista separada por ;

}
