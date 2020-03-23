class GradeTable {
    constructor(tableElement, noGradesElement){
        this.tableEl = tableElement;
        this.noGradesElement = noGradesElement;
    }
    updateGrades(grades){
        var tbody = this.tableEl.querySelector('tbody');
        tbody.innerHTML = "";
        for(var i = 0; i < grades.length; i++){
            var row = this.renderGradeRow(grades[i], this.deleteGrade, this.selectStudentInfo);
            tbody.appendChild(row);
        }
        var noGrades = document.querySelector('p');
        if(grades.length === 0){
            noGrades.classList.remove('d-none');
        } else {
            noGrades.classList.add('d-none');
        }
    }
    onDeleteClick(deleteGrade){
        this.deleteGrade = deleteGrade;
    }
    onUpdateClick(updateGrade){
        this.updateGrade = updateGrade;
    }
    renderGradeRow(data, deleteGrade, selectedStudentInfo){
        var row = document.createElement('tr');
        var name = document.createElement('td');
        name.textContent = data.name;
        var course = document.createElement('td');
        course.textContent = data.course;
        var grade = document.createElement('td');
        grade.textContent = data.grade;
        var deleteButton = document.createElement('button');
        var trashIcon = document.createElement('i');
        trashIcon.setAttribute('class', 'fas fa-trash-alt red')
        deleteButton.setAttribute('class', "text-align-right operation-button");
        deleteButton.appendChild(trashIcon);
        deleteButton.addEventListener('click', function () {
            deleteGrade(data.id)
        });
        var updateButton = document.createElement('button');
        var updateIcon = document.createElement('i');
        updateIcon.setAttribute('class', 'fas fa-edit blue');
        updateButton.setAttribute('class', 'operation-button');
        updateButton.appendChild(updateIcon);
        updateButton.addEventListener('click', function() {
            selectedStudentInfo(data.id, data);
            // selectedStudentInfo(data.id, data);
        })
        var operationTd = document.createElement('td');
        operationTd.setAttribute('class', "text-align-right")
        operationTd.appendChild(updateButton);
        operationTd.appendChild(deleteButton);
        row.appendChild(name);
        row.appendChild(course);
        row.appendChild(grade);
        row.appendChild(operationTd);
        return row;
    }

    selectStudentInfo(id, data){
        console.log('id:', id , 'data:', data);
        var updateButton = document.getElementById('updateButton');
        var addButton = document.getElementById('addButton');
        updateButton.classList.remove('hidden');
        addButton.classList.add('hidden');
        var nameInput = document.getElementById('name');
        var courseInput = document.getElementById('course');
        var gradeInput = document.getElementById('grade');
        nameInput.setAttribute('value', data.name);
        courseInput.setAttribute('value', data.course);
        gradeInput.setAttribute('value', data.grade);

    }
}
