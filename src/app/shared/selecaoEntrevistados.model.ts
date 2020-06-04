export class SelecaoEntrevistado{
    
    // Obs: Colocar o mesmo nome do campo do Banco
    constructor(
        public interviewee_1_id: number,
        public interviewee_2_id: number,
        public interviewee_3_id: number,
        public interviewee_4_id: number,
        public interviewee_5_id: number,
        public location: string,
        public general_considerations: string

    ){}
}