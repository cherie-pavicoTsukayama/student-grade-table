class PageHeader {
    constructor(headerElement){
        this.headerElement = headerElement;
    }
    updateAverage(newAverage){
        var numAverage = this.headerElement.querySelector('span');
        numAverage.textContent = newAverage;
    }
}
