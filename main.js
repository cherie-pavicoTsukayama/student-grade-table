var headerEl = document.querySelector("header");
var tableElement = document.querySelector("table");
var pageHeader = new PageHeader(headerEl);
var  table = new GradeTable(tableElement);
var app = new App(table, pageHeader);
app.start();
