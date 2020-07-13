export class SelecaoEntrevistado{
    
    // Obs: Colocar o mesmo nome do campo do Banco
    constructor(
        public interviewee_1_id_log: number,
        public interviewee_2_id_log: number,
        public interviewee_3_id_log: number,
        public interviewee_4_id_log: number,
        public interviewee_5_id_log: number,
        public location_log: string,
        public general_considerations_log: string,
        public other_participants_log: string

    ){}
}