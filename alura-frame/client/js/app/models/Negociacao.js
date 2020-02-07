/* regra de negocios em js */  
  
  // metodo negociacao
   class Negociacao{

        constructor(data, quantidade, valor){

            this._data = new Date(data.getTime());// o underline siguinifica que os metodo só pode ser acessa pela classe.
            this._quantidade = quantidade;
            this._valor = valor;
            Object.freeze(this);//congela o objeto impedindo a mudança de valor por terceiros.
        }


        // metodo volume

        get volume(){
            return this._quantidade * this._valor;
        }
        // metodo acessador
        get data(){
            return new Date(this._data.getTime);// getTime // blindando a classe.
        }
        get quantidade(){
            return this._quantidade;
        }
        get valor(){
            return this._valor;
        }
    }