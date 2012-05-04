function App() {

}

App.prototype.parseIp = function(address) {
	var octets = address.split('.')
	for(var i=0; i<octets.length; i++) { octets[i] = parseInt(octets[i], 10); } 
	return octets;
};

App.prototype.arraySort = function(addresses){
	return addresses.sort(function(a,b){
		var oct1 = a[0] - b[0];
		var oct2 = a[1] - b[1];
		var oct3 = a[2] - b[2];
		var oct4 = a[3] - b[3];
		if(oct1 !== 0) { return oct1; } 
		if(oct2 !== 0) { return oct2; } 
		if(oct3 !== 0) { return oct3; } 
		if(oct4 !== 0) { return oct4; } 
	});

};

App.prototype.sortAddresses = function(addresses){
	var octetArray = [];
	var sortedArray = [];
	var temp;

	for(var i = 0; i < addresses.length; i++) {
	 	octetArray.push(this.parseIp(addresses[i]));
	}
	
	temp = this.arraySort(octetArray);
	for(var j = 0; j < temp.length; j++) {
		sortedArray.push(temp[j].join('.'));
	}
	return sortedArray;
};