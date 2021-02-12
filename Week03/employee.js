var employee = {
    firstName : "Celil",
    lastName : "Reha",
    salary:[],
    totalSalary:function(){return this.salary.reduce((a,b)=>a+b)}
}
var salaryArray=[100,200,300,400,500];
employee.salary=salaryArray;
/*function totalSalary(a){
    var total=0;
    for (let i = 0; i < a.length; i++) {
        total+=a[i];        
    }
    return total;
}
console.log(totalSalary(employee.salary));*/
console.log(employee.totalSalary())
