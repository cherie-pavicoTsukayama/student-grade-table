class App {
    constructor(gradeTable, pageHeader, gradeForm){
        this.handleGetGradesError = this.handleGetGradesError.bind(this);
        this.handelGetGradesSuccess = this.handelGetGradesSuccess.bind(this);
        this.gradeTable = gradeTable;
        this.pageHeader = pageHeader;
        this.gradeForm = gradeForm;
        this.createGrade = this.createGrade.bind(this);
        this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
        this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
        this.deleteGrade = this.deleteGrade.bind(this);
        this.handleDeleteGradeError = this.handleDeleteGradeError.bind(this);
        this.handleDeleteGradeSuccess = this.handleDeleteGradeSuccess.bind(this);
        this.updateGrade = this.updateGrade.bind(this);
        this.handleUpdateGradeError = this.handleUpdateGradeError.bind(this);
        this.handleuUpdateGradeSuccess = this.handleuUpdateGradeSuccess.bind(this);
    }
    handleGetGradesError(error) {
        console.error(error);
    }
    handelGetGradesSuccess(grades) {
        this.gradeTable.updateGrades(grades);
        var sumOfGrades = 0
        var average;
        for(var i = 0; i < grades.length; i++){
            sumOfGrades += grades[i].grade;
        }
        average = Math.round(sumOfGrades/grades.length);

        this.pageHeader.updateAverage(average);
    }
    getGrades(){
        $.ajax({
            method: "GET",
            headers: {
                "X-Access-Token": "C6nLlY8h"
            },
            url: "https://sgt.lfzprototypes.com/api/grades",
            success: this.handelGetGradesSuccess,
            error: this.handleGetGradesError,
        })

    }
    start(){
        this.getGrades();
        this.gradeForm.onSubmit(this.createGrade);
        this.gradeTable.onDeleteClick(this.deleteGrade);
        this.gradeTable.onUpdateClick(this.updateGrade);
    }
    createGrade(name, course, grade){
        $.ajax({
            method: "POST",
            data: {
                "name": name,
                "course": course,
                "grade": grade,
            },
            headers: {
                "X-Access-Token": "C6nLlY8h"
            },
            url: "https://sgt.lfzprototypes.com/api/grades",
            success: this.handleCreateGradeSuccess,
            error: this.handleCreateGradeError,

        })
    }
    handleCreateGradeError(error){
        console.log('Error:', error);
    }
    handleCreateGradeSuccess(){
        this.getGrades();
    }
    deleteGrade(id){
        console.log(id);
        $.ajax({
            method: "DELETE",
            url: "https://sgt.lfzprototypes.com/api/grades/" + id,
            headers: {
                "X-Access-Token": "C6nLlY8h"
            },
            success: this.handleDeleteGradeSuccess,
            error: this.handleDeleteGradeError
        })
    }
    handleDeleteGradeError(error){
        console.error('handleDeleteGradeError:', error);
    }
    handleDeleteGradeSuccess(){
        this.getGrades();
    }
    updateGrade(id, data){
        //Submit new data for grade of id to the database
        // var elements = this.gradeForm.formElement.children;
        //iterate through elements
    }
    handleUpdateGradeError(error) {
        console.error('handleDeleteGradeError:', error);
    }
    handleuUpdateGradeSuccess() {
        this.getGrades();
}
