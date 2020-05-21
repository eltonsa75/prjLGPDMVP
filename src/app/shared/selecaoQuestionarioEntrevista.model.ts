export class SelecaoQuestionarioEntrevista{
    
    // Não esquecer de colocar dentro do Constructor
    constructor(
        public cliente: string ,
        public filial: string,
        public unidadeNegocio: string,
        public area: string,
        public questionario: string

    ){}
}