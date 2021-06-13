	function namePracticle() {

	var alphabet = ['a', 'b','c', 'd', 'e','f','g', 'h', 'i', 'j','k', 'l', 'm', 'n', 'o', 'p', 'q','r', 's', 't','u', 'v','w','x','y','z'];
	var names = ['jake', 'harry', 'amelia', 'sophia', 'callum', 'linda', 'ava', 'Ethan', 'William', 'Madison', 'Bethany', 'Victoria', 'David', 'Isabella', 'Faizal',
	'Rhys', 'Nyllie', 'Jennifer', 'Tracy', 'Damian', 'Charlie', 'Michael', 'Charles', 'Emily', 'Maddy', 'Potter', 'Margaret', 'Megan', 'Kate', 'Samantha'];

	var a;
	var b = [];
	var c = [];

		var count;

	for (var i = 0; i < names.length; i++) {
	    var x = names[i];
		var y = x.split('');
	    count = 0;

		for (var j = 0; j < y.length; j++) {
			
			for (var k = 0; k<alphabet.length; k++) {
				
				if (y[j] == alphabet[k]) {	
					
	              do {
	                count = count+(k+1);      	                  
	              }

	              while(y.length<=0);

				}
			}
	    }

	  console.log("The name "+names[i]+" and value is: "+count);
	 
	  c.push(count);


	}

	 console.log(c.sort());
	}

	namePracticle();