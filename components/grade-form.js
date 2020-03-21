class GradeForm {
    constructor (formElement) {
        this.formElement = formElement;
    }
    onSubmit(createGrade){
        this.createGrade = createGrade;
    }
    handleSubmit(event){
        console.log("hi");
        event.preventDefault();

    }
}
