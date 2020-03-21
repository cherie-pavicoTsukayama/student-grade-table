class App {
    constructor(gradeTable, pageHeader, gradeForm){
        this.getGradesError = this.handleGetGradesError.bind(this);
        this.getGradesSuccess = this.handelGetGradesSuccess.bind(this);
        this.table = gradeTable;
        this.pageHeader = pageHeader;
        this.gradeForm = gradeForm;
        this.createGrade = this.createGrade.bind(this);
        this.createGradeError = this.handleCreateGradeError.bind(this);
        this.createGradeSuccess = this.handleCreateGradeSuccess.bind(this);
    }
    handleGetGradesError(error) {
        console.error(error);
    }
    handelGetGradesSuccess(grades) {
        this.table.updateGrades(grades);
        var sumOfGrades = 0
        var average;
        for(var i = 0; i < grades.length; i++){
            sumOfGrades += grades[i].grade;
        }
        average = sumOfGrades/grades.length;

        this.pageHeader.updateAverage(average);
    }
    getGrades(){
        $.ajax({
            method: "GET",
            headers: {
                "X-Access-Token": "C6nLlY8h"
            },
            url: "https://sgt.lfzprototypes.com/api/grades",
            success: this.getGradesSuccess,
            error: this.getGradesError
        })

    }
    start(){
        this.getGrades();
        this.gradeForm.onSubmit(this.createGrade);
    }
    createGrade(name, course, grade){
        console.log("name:", name, "course:", course, "grade:", grade);
        $.ajax({
            method: "POST",
            url: "https://sgt.lfzprototypes.com/api/grades",
            data: {
                "name": name,
                "course": course,
                "grade": grade
            },
            headers: {
                "X-Access-Token": "C6nLlY8h"
            },
            success: this.createGradeSuccess,
            error: this.createGradeError

        })
    }
    handleCreateGradeError(error){
        console.log('Error:', error);
    }
    handleCreateGradeSuccess(){
        this.getGrades;
    }
}
