var headerEl = document.querySelector("header");
var tableElement = document.querySelector("table");
var pageHeader = new PageHeader(headerEl);
var table = new GradeTable(tableElement, pElement);
var formEl = document.querySelector("form");
var gradeForm = new GradeForm(formEl);
var app = new App(table, pageHeader, gradeForm);
var pElement = document.querySelector('p');

app.start();
