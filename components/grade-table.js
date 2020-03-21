class GradeTable {
    constructor(tableElement){
        this.tableEl = tableElement;
    }
    updateGrades(grades){
        var tbody = this.tableEl.querySelector('tbody');
        tbody.innerHTML = "";
        for(var i = 0; i < grades.length; i++){
            var row = this.renderGradeRow();
            tbody.appendChild(row);
        }
    }
    onDeleteclick(deleteGrade){
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
        deleteButton.setAttribute('class', "btn-danger");
        deleteButton.addEventListener('click', this.deleteGrade(data.id));
        var deleteTd = document.createElement('td');
        deleteTd.textContent = deleteButton;
        row.appendChild(name);
        row.appendChild(course);
        row.appendChild(grade);
        row.appendChild(deleteTd);
        return row;


    }
}
