class GradeForm {
    constructor (formElement) {
        this.formElement = formElement;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleClick = this.handleClick.bind(this);
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
}
