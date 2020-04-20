export class Question {

    public id: number 
    public phase_id: number
	public questions_daughter: number
	public question_mother: string
	public question_edited_number: number           
    public question_enunciation: string
    public answer_feedback: string
	public question_mother_if_yes: number
	public question_mother_if_no: number
    public questionnaire_version_id_carga: number
    public if_yes: string
    public if_no: string
    public if_back: string
	
    constructor(data) {
        id: data.id
        phase_id: data.phase_id
        questions_daughter: data.questions_daughter
        question_mother: data.question_mother
        question_edited_number: data.question_edited_number           
        question_enunciation: data.question_enunciation
        answer_feedback: data.answer_feedback
        question_mother_if_yes: data.question_mother_if_yes
        question_mother_if_no: data.question_mother_if_no
        questionnaire_version_id_carga: data.questionnaire_version_id_carga
        if_yes: data.if_yes
        if_no: data.if_no
        if_back: data.if_back
    }
    
    }