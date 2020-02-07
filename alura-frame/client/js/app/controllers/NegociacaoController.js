
class NegociacaoController {

    constructor(){
        let $= document.querySelector.bind(document);// função com jQuery e metodo bind.

        this._inputData = $('#data')
        this._inputQuantidades = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = ListaNegociacoes();//função chamada em index.

    }

    adiciona(event){
        event.preventDefault();
        this._listaNegociacoes.adiciona(this._criaNegociacao());//função adiciona e limpa formulario
        this._limpaFormulario();   
    }
    
        _criaNegociacao(){
            return new Negociacao(
                DateHelper.textoParaData(this._inputData.value),
                this._inputQuantidades.value,
                this._inputValor.value
            );
        }  
        _limpaFormulario(){
            this._inputData.value = '';
            this._inputQuantidade.value = 1;
            this._inputValor.value = 0.0;
            this._inputData.focus(); 
        }

    }

//  console.log(typerof(this._inutDate.value));// informa qual é o tipo de sintaxe que esta sendo exibida, neste caso o inputDate esta devolvendo uma string, gerando conflito com  a sintaxe do getTime.
      ///   console.log(this._inputData.value)

         // cosntruindo uma data pelo cosntructor com o getTime.

      
                  
         //split passa uma arrey para a string ex: 2016-12-15.replace tambem da certo.
       