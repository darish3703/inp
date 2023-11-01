class student{
    constructor(name,roll,age,branch){
        this.name =name;
        this.roll = roll;
        this.age =age;
        this.branch= branch;
    }

    display() {
        console.log(this.name)
        console.log(this.roll)
        console.log(this.age)
        console.log(this.branch)        
    }
}

var obj =new student("royden",68,21,"inft");
obj.display()