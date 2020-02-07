// classe emplementada na aula 6
class ListaNegociacoes {
    
    constructor() {
        
        this._negociacoes = [];
    }
    
    adiciona(negociacao) {
        
        this._negociacoes.push(negociacao);
    }
    
    get negociacoes() {
        
        return [].concat(this._negociacoes);
    }
}