class App {
    handleGetGradesError(error){
        console.error(error);
    }
    handelGetGradesSuccess(grades) {
        console.log(grades);
    }
    constructor(){
        var getGradesError = this.handleGetGradesError.bind(this);
        var gGetGradesSuccess = this.handelGetGradesSuccess.bind(this);
    }
}
