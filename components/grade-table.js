class GradeTable {
    constructor(tableElement, noGradesElement){
        this.tableEl = tableElement;
        this.noGradesElement = noGradesElement;
    }
    updateGrades(grades){
        var tbody = this.tableEl.querySelector('tbody');
        tbody.innerHTML = "";
        for(var i = 0; i < grades.length; i++){
            var row = this.renderGradeRow(grades[i], this.deleteGrade);
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
    renderGradeRow(data, deleteGrade){
        var row = document.createElement('tr');
        var name = document.createElement('td');
        name.textContent = data.name;
        var course = document.createElement('td');
        course.textContent = data.course;
        var grade = document.createElement('td');
        grade.textContent = data.grade;
        var deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete"
        deleteButton.setAttribute('class', "btn-danger operations delete-button");
        deleteButton.addEventListener('click', function () {
            deleteGrade(data.id)
        });
        var deleteTd = document.createElement('td');
        deleteTd.setAttribute('class', "operations")
        deleteTd.appendChild(deleteButton);
        row.appendChild(name);
        row.appendChild(course);
        row.appendChild(grade);
        row.appendChild(deleteTd);


        return row;


    }
}
