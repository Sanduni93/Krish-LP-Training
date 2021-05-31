class Computer{

constructor(brand){

		this.brand = brand;
	}
	
}

class ComputerBuilder{

	constructor(brand){

		this.computer = new Computer(brand);
//As you can see we only need brand parameter from computer class 
//to create the object.
	}

//the rest of parameters are set as follows	
 	setOperatingSystem(os){
 		this.computer.os = os;
 		return this;
 	}

 	setWarranty(warranty){
 		this.computer.warranty = warranty;
 		return this;
 	}

 	setPrice(price){
 		this.computer.price = price;
 		return this;
 	}

 	setRAM(ram){
 		this.computer.ram = ram;
 		return this;
 	}

 	setScreenSize(screenSize){
 		this.computer.screenSize = screenSize;
 		return this;
 	}

 //to return the values from Computer object, we create a method 
 	builder(){
 		return this.computer;
 	}	
}
//we use builder class instead of Computer to get objcet
let comBuilder = new ComputerBuilder('DELL').builder();

//if you need to pass values for other properties,
// do it like this
let comBuilder1 = new ComputerBuilder('HP').setOperatingSystem('Windows').setPrice('Rs. 80000').builder();
console.log(comBuilder1);