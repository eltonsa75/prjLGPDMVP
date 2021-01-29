export class QuestionResp {
    
    public id: number
    public application_config_id: number
    public question_id: number
    public phase_id: number
    public interviewer_id: number
    public respondent_id: number
    public answer_yes_no: number
    public answer_comments: string
    public answer_observation: string
  	
    constructor(data) {     
        id: data.id
        application_config_id: data.application_config_id
        question_id: data.question_id
        phase_id: data.phase_id
        interviewer_id: data.interviewer_id
        respondent_id: data.response_id
        answer_yes_no: data.answer_yes_no
        answer_comments: data.answer_comments
        answer_observation: data.answer_observation
    }
    
    }