class App {
    constructor(gradeTable, pageHeader){
        this.getGradesError = this.handleGetGradesError.bind(this);
        this.getGradesSuccess = this.handelGetGradesSuccess.bind(this);
        this.table = gradeTable;
        this.pageHeader = pageHeader;
    }
    handleGetGradesError(error) {
        console.error(error);
    }
    handelGetGradesSuccess(grades) {
        this.table.updateGrades(grades);
        var sumOfGrades = 0
        for(var i = 0; i < grades.length; i++){
            sumOfGrades += grades[i].grade;
        }
        var average = sumOfGrades/grades.length;

        console.log(average);
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
    }
}
