function getAlerted(){
	// var name = "Ram";
	// var number = 20;
	// document.getElementById('demo').innerHTML = name;
	
	var person1= {name:"Rama", age:25, location:'San Francisco', graduated:true};
	var person2 = {name:"Medina", age:23, location:'Las Vegas', graduated:false};
	var person3 = {name:"Alex", age:25, location:'Los Angeles', graduated:true};

	// document.getElementById('demo').innerHTML = 
	// person2.name + " is " + person2.age + " years old";
    
    var people = [person1,person2,person3];
    //console.log(people);
    for(var i=0; i < people.length; i++){
    	//document.getElementById('demo').innerHTML += people[i].name;  
    	if(people[i].graduated == true){
    		document.getElementById('demo').innerHTML += people[i].name + ' ' +
    		"is Graduated." + "<br>";
    	}
    	else{
    		document.getElementById('demo').innerHTML += people[i].name + ' ' +
    		"is not Graduated." + "<br>";
    	}
    }
}