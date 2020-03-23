class GradeForm {
    constructor (formElement) {
        this.formElement = formElement;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.formElement.addEventListener('submit', function(){
            var updateButton = document.getElementById('updateButton');
            var addButton = document.getElementById('addButton');
            if (updateButton.textContent === "Update"){
                this.handleUpdate();
            } else {
            this.handleSubmit();
            }
        })
    }
    onSubmit(createGrade){
        this.createGrade = createGrade;
    }
    handleSubmit(event){
        event.preventDefault();
        var formData = new FormData(event.target);
        var name = formData.get('name');
        var course = formData.get('course');
        var grade = formData.get('grade');
        this.createGrade(name, course, grade);
        event.target.reset();
    }

    handleUpdate(event){
        var updateButton = document.getElementById('updateButton');
        var addButton = document.getElementById('addButton');
        updateButton.classList.add('hidden');
        addButton.classList.remove('hidden');
        event.target.reset();
    }
}
