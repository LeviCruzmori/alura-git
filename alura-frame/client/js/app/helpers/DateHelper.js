class DateHelper {
   
  static  dataParaTexto(data){
        return data.getDate() 
        +'/'+ (data.getMonth()+1) 
        +'/'+ data.getFullYear(); 
        console.log(diaMesAno);
    }

  static  textoParaData(texto){
            return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
        }


}