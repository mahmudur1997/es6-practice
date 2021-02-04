class Student{
    constructor(sId, sName){
       this.id=sId;
       this.name=sName;
       this.school="noapara model school";
    }

}
const student1=new Student(5,"rakib");
const student2=new Student(7,"sakib");
console.log(student1.name,student2.name);
