class Computer{

constructor(brand,{os, warranty, price, ram, screenSize} = { }){

		this.brand = brand;
		this.os = os;
		this.warranty = warranty
		this.price = price;
		this.ram = ram;
		this.screenSize = screenSize;
	}
	
}

//we use builder class instead of Computer to get objcet
let computer = new Computer('Asus',{ram: '4GB', warranty:'4 Years'});
console.log(computer);