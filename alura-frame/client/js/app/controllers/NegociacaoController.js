
class NegociacaoController {

    constructor(){
        let $= document.querySelector.bind(document);// função com jQuery e metodo bind.

        this._inputData = $('#data')
        this._inputQuantidades = $('#quantidade');
        this._inputValor = $('#valor');

    }

    adiciona(event){
        event.preventDefault();

       

                let negociacao = new Negociacao(
                    DateHelper.textoParaData(this._inputData.value),  
                    this._inputQuantidades.value,
                    this._inputValor.value
                );

                    console.log(negociacao);
            
                
                    console.log(DateHelper.dataParaTexto(negociacao.data));
      //  console.log(typerof(this._inutDate.value));// informa qual é o tipo de sintaxe que esta sendo exibida, neste caso o inputDate esta devolvendo uma string, gerando conflito com  a sintaxe do getTime.
      ///   console.log(this._inputData.value)

         // cosntruindo uma data pelo cosntructor com o getTime.

      
                  
         //split passa uma arrey para a string ex: 2016-12-15.replace tambem da certo.
       
        

    }
}