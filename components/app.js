class App {
    constructor(gradeTable){
        var getGradesError = this.handleGetGradesError.bind(this);
        var gGetGradesSuccess = this.handelGetGradesSuccess.bind(this);
        this.gradeTable = gradeTable;
    }
    handleGetGradesError(error) {
        console.error(error);
    }
    handelGetGradesSuccess(grades) {
        console.log(grades);
    }
    getGrades(){
        $.ajax({
            method: "GET",
            headers: {
                "X-Access-Token": "C6nLlY8h"
            },
            url: "https://sgt.lfzprototypes.com/api/grades",
            success: this.handelGetGradesSuccess,
            error: this.handleGetGradesError
        })
    }
    start(){
        this.getGrades();
    }
}
