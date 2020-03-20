class GradeTable {
    constructor (tableElement){
        this.tableEl = tableElement;
    }
    updateGrades(grades){
        var tbody = this.tableEl.querySelector('tbody');
        for(var i = 0; i < grades.length; i++){
            var row = document.createElement('tr');
            var name = document.createElement('td');
            name.textContent = grades[i].name;
            var course = document.createElement('td');
            course.textContent = grades[i].course;
            var grade = document.createElement('td');
            grade.textContent = grades[i].grade;
            row.appendChild(name);
            row.appendChild(course);
            row.appendChild(grade);
            tbody.appendChild(row);
        }

        console.log(grades);
    }
}
