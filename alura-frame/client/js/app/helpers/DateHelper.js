class DateHelper {
   constructor(){
    throw new Error( 'Esta classe não pode ser instanciada');
   }
   static dataParaTexto(data){
     return `${data.getDate()}/${data.getMonth()+1}/${datagetFullYear()}`;
   }

   static textoParaData(texto){
     if(!/\d{4}-\d{2}-\d{2}/.test(texto))
        throw new Error('Deve estar no formato aaa-mm-dd');
    return new Date(...texto.split('-').map((item, indice)=>item - indice % 2));
   }
  
}

   
   /*
   // o comando abaixo foi recondionado para o de cima.
  static  dataParaTexto(data){
        return data.getDate() 
        +'/'+ (data.getMonth()+1) 
        +'/'+ data.getFullYear(); 
        console.log(diaMesAno);
    }

  static  textoParaData(texto){
            return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
        }*/


