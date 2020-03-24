class GradeForm {
    constructor (formElement) {
        this.formElement = formElement;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.formElement.addEventListener('reset', this.handleReset);
        this.formElement.addEventListener('submit',  this.handleClick)
    }
    handleClick(event){
    event.preventDefault();
    var updateButton = document.getElementById('updateButton');
    var addButton = document.getElementById('addButton');
    if (updateButton.classList[1] === 'hidden') {
        this.handleSubmit();
    }
    if (addButton.classList[1] === 'hidden') {
        this.handleUpdate();
    }
    }

    onSubmit(createGrade){
        this.createGrade = createGrade;
    }
    handleSubmit(){
        var formData = new FormData(event.target);
        var name = formData.get('name');
        var course = formData.get('course');
        var grade = formData.get('grade');
        this.createGrade(name, course, grade);
        event.target.reset();
    }

    handleUpdate(){
        console.log('Update Pushed')
        var updateButton = document.getElementById('updateButton');
        var addButton = document.getElementById('addButton');
        updateButton.classList.add('hidden');
        addButton.classList.remove('hidden');
        // event.target.reset();
    }

    handleReset(){
        console.log('Reset button was pushed');
        var nameInput = document.getElementById('name');
        var courseInput = document.getElementById('course');
        var gradeInput = document.getElementById('grade');
        nameInput.removeAttribute('value');
        courseInput.removeAttribute('value');
        gradeInput.removeAttribute('value');
    }
}
