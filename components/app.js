class App {
    constructor(){
        var getGradesError = this.handleGetGradesError.bind(this);
        var gGetGradesSuccess = this.handelGetGradesSuccess.bind(this);
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
            url: "https://sgt.lfzprototypes.com/api/grades",
            header: {
                "X-Access-Token": "C6nLlY8h"
            },
            success: this.getGradesSuccess(),
            error: this.getGradesError()
        })
    }
    start(){
        this.getGrades;
    }
}
