export class TrueFalse{
    questionId: number;
    questionType: string;
    question: string;
    instruction: string;

    constructor(questionId, questionType, question, instruction) {
        this.questionId = questionId;
        this.questionType = questionType;
        this.question = question;
        this.instruction = instruction;
    }
}