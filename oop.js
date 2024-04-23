class Person {

    _name;
    _dateOfBirth;
    _placeOfBirth;
  
    constructor(name, dateOfBirth, placeOfBirth){
      this._name = name;
      this._dateOfBirth = dateOfBirth;
      this._placeOfBirth = placeOfBirth;
      
    }
  
    get name(){
      return this._name;
    }
    
    set name(name){
      this._name = name;
    }
  
    get dateOfBirth(){
      return this._dateOfBirth;
    }
  
    talk(){
      return `Hi my name is ${this._name} and I was born in ${this._placeOfBirth}.`;
    }
    
  }
  
  
class AdaStaff extends Person {
  
    _role;
    _base;
  
    constructor(name, dateOfBirth, placeOfBirth, role, base){
  
      super(name, dateOfBirth, placeOfBirth);
      this._role = role;
      this._base = base;
    }
  
    get base(){
      return this._base;
    }
    
    set base(base){
      this._base = base;
    }
  
    get role(){
      return this._role;
    }
    
    set role(role){
      this._role = role;
    }
  
    talk(){
      return `Hi my name is ${this._name}. I work in ${this._base} and my role is ${this._role}.`;
    }
  
  }

class AdaStudent extends Person{
   
    _company;
    _pathway;
    _yearStarted;

    constructor(name, dateOfBirth, placeOfBirth, company, pathway, yearstarted){

      super(name, dateOfBirth, placeOfBirth);
      this._company = company;
      this._pathway = pathway;
      this._yearStarted = yearstarted;
    }

    get company(){
      return this._company;
  } 

    set company(company){
      return this._company = company;
  } 

  get pathway(){
    return this._pathway;
} 

  set pathway(pathway){
    return this._company = pathway;
} 

  get yearstarted(){
    return this._yearStarted;
}   

  talk(){
    return `Hi my name is ${this._name}. I work in ${this._company}. as a ${this._pathway} which i started in ${this._yearstarted}.`;
  }

}
class Cohort {

  _cohortCode;
    
    constructor(cohortCode){
  
      this._cohortCode = cohortCode;
      this.cohort = [];
  
    }
    
    add(adaStudent){
      this.cohort.push(adaStudent)
      return this.cohort.length;
    }
    list(){
      for (let i; i < this.cohort.length; i++){
        console.log(this.cohort[i].name);
      }
    }  
    
    remove(studentName){
      for (let i = 0; i < this.cohort.length; i++){
        if (this.cohort[i].name === studentName){
          this.cohort.splice(i,1);
          return "student deleted";
        }
      }
      return "student not found";
    }

    search(studentName){
      for(let i = 0; i < this.cohort.length; i++){
        if (this.cohort[i].name === studentName){
          console.log("student found")
          return this.cohort[i]
        }
      }
      return 'student not found';
    }

}

  




  const aqil = new Person("Aqil Hussain", "01/01/2000", "Manchester");
  const steve = new AdaStaff("Steve Rich", "01/01/1998", "Lincoln", "Lecturer", "Manchester");
  const bob = new Person("Bob Philip","04/04/1974", "Huddersfield");
  const mary = new AdaStaff("Mary Jane", "05/06/1990" , "Leeds", "Teacher", "Blackburn");
  const doris = new AdaStudent("Doris Edo", " 26/05/1993", "Booking.com", "Software Engineering", "2024");
  
  console.log(steve);
  console.log(bob);
  console.log(steve.talk());
  console.log(mary.talk())

  //Create a new instance of Cohort called april24
const april24 = new Cohort("24-04-LDN-MCR");
//Create an AdaStudent object
const sumilA = new AdaStudent("Sumil Aryin", "22/12/2002", "London", "PwC", "TC", 2024);
//Add sumilA to the april24 cohort array
april24.add(sumilA);
//Create a new Ada student and add them to the array all in one line
april24.add(new AdaStudent("Jess Fryer", "02/02/1998", "Manchester", "PwC", "TC", 2024))
//Check the contents of the array.
console.log(april24.remove("Sumil Aryin"))
console.log(april24.search("Jess Fryer"))

