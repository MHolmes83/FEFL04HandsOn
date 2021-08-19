class Employee {
    constructor(name, salary, hireDate) {
        this.name = name;
        this.salary = salary;
        this.hireDate = hireDate;
    }

    getName(){
        console.log(this.name.toUpperCase());
    }
    getSalary(){
        console.log(this.salary);
    }
    getHireDate(){
        console.log(this.hireDate);
    }
}

class Manager extends Employee{
    constructor(name, salary, hireDate, descriptionOfJob){
        super(name, salary, hireDate);
        this.descriptionOfJob = descriptionOfJob;
    }

    jobDescription(){
        console.log(this.name + " was hired on " + this.hireDate + " with a starting salary of " + this.salary + " to " + this.descriptionOfJob + ".");
    }
}

class Designer extends Employee{
    constructor(name, salary, hireDate, experience){
        super(name, salary, hireDate);
        this.experience = experience;
    }

    yearsExperience(){
        console.log(this.name + " was hired on " + this.hireDate + " with a starting salary of " + this.salary + " because of " + this.experience + ".");
    }
}

class SalesAssociate extends Employee{
    constructor(name, salary, hireDate, degrees){
        super(name, salary, hireDate);
        this.degrees = degrees;
    }

    degreeCompleted(){
        console.log(this.name + " was hired on " + this.hireDate + " with a starting salary of " + this.salary + " due to their " + this.degree + " degree.");
    }
}

let lupita = ("Lupita", "02 April 2017", "$75,000", "manages the sales staff");
let yasuke = ("Yasuke", "03 June 2019", "$95,000", 9);
let dean = ("Dean", "18 August 2020", "$23,000", "BS - Computer Science");

lupita.jobDescription();
yasuke.yearsExperience();
dean.degreeCompleted();