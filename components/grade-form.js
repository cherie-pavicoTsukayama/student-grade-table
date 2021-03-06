class GradeForm {
    constructor (formElement) {
        this.formElement = formElement;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.formElement.addEventListener('reset', this.handleReset);
        this.formElement.addEventListener('submit',  this.handleClick);
        this.currentStudentUpdating = null;
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
        this.handleReset
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
        var updateButton = document.getElementById('updateButton');
        var addButton = document.getElementById('addButton');
        var id = document.getElementById('gradeForm')
        id = id.getAttribute('data-current-student')
        updateButton.classList.add('hidden');
        addButton.classList.remove('hidden');
        var formData = new FormData(event.target);
        var name = formData.get('name');
        var course = formData.get('course');
        var grade = formData.get('grade');
        console.log("updated Name:", name);
        console.log("updated Course:", course);
        console.log("updated Grade:", grade);
        this.createGrade(name, course, grade, id);
        event.target.reset();
    }

    handleReset(){
        var nameInput = document.getElementById('name');
        var courseInput = document.getElementById('course');
        var gradeInput = document.getElementById('grade');
        var updateButton = document.getElementById('updateButton');
        var addButton = document.getElementById('addButton');
        nameInput.removeAttribute('value');
        courseInput.removeAttribute('value');
        gradeInput.removeAttribute('value');
        updateButton.classList.add('hidden');
        addButton.classList.remove('hidden');
    }
}
