class GradeForm {
    constructor (formElement) {
        this.formElement = formElement;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.formElement.addEventListner('submit', this.handleSubmit);
    }
    onSubmit(createGrade){
        this.createGrade = createGrade;
    }
    handleSubmit(event){
        console.log("hi");
        event.preventDefault();

    }
}
