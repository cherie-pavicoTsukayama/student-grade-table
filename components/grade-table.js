class GradeTable {
    constructor(tableElement, noGradesElement){
        this.tableEl = tableElement;
        this.noGradesElement = noGradesElement;
    }
    updateGrades(grades){
        var tbody = this.tableEl.querySelector('tbody');
        tbody.innerHTML = "";
        for(var i = 0; i < grades.length; i++){
            var row = this.renderGradeRow(grades[i]);
            tbody.appendChild(row);
        }
        if(!grades){
            var noGrades = document.querySelector('p');
            noGrades.classList.remove('d-none');
        }
    }
    onDeleteClick(deleteGrade){
        this.deleteGrade = deleteGrade;
    }
    renderGradeRow(data, deleteGrade){
        var row = document.createElement('tr');
        var name = document.createElement('td');
        console.log('data: ', data);
        name.textContent = data.name;
        var course = document.createElement('td');
        course.textContent = data.course;
        var grade = document.createElement('td');
        grade.textContent = data.grade;
        var deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete"
        deleteButton.setAttribute('class', "btn-danger");
        deleteButton.addEventListener('click', this.deleteGrade(data.id));
        var deleteTd = document.createElement('td');
        deleteTd.appendChild(deleteButton);
        row.appendChild(name);
        row.appendChild(course);
        row.appendChild(grade);
        row.appendChild(deleteTd);
        return row;


    }
}
