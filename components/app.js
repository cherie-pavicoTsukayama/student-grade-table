class App {
    constructor(gradeTable){
        this.getGradesError = this.handleGetGradesError.bind(this);
        this.getGradesSuccess = this.handelGetGradesSuccess.bind(this);
        this.table = gradeTable;
    }
    handleGetGradesError(error) {
        console.error(error);
    }
    handelGetGradesSuccess(grades) {
        this.table.updateGrades(grades);
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
