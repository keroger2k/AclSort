describe("acl application", function() {
  var app;

  beforeEach(function() {
    app = new App();
  });

  it("should not be null", function() {
    expect(app).toBeDefined();
  });

  it("should be able to parse ip address into number array containing four entries", function() {
  	var arr = app.parseIp("1.2.3.4");
  	expect(arr).toEqual([1,2,3,4]);
  	expect(arr.length).toEqual(4);
  });

  describe("given a list of arrays with octets in them", function() {
  	it("should sort a list numerically", function() {
  		expect(app.arraySort([
  			[9,10,11,12],
  			[1,2,3,4],
  			[5,6,7,8]
  		])).toEqual([
  			[1,2,3,4],
  			[5,6,7,8],
  			[9,10,11,12]
  		]);
  	});

  	it("should sort a list by the first octect that is different", function() {
  		expect(app.arraySort([
  			[1,21,11,12],
  			[1,2,3,4],
  			[5,6,7,8]
  		])).toEqual([
  			[1,2,3,4],
  			[1,21,11,12],
  			[5,6,7,8]
  		]);
  	});
  });

  describe("given a list of string ip addresses", function() {
  	it("should sort them numerically", function() {
  		expect(app.sortAddresses([
  			'192.168.10.10',
  			'10.245.56.78',
  			'10.245.54.80',
  			'172.16.32.22',
  			'172.17.32.22'
  			])).toEqual([
  			'10.245.54.80',
  			'10.245.56.78',
  			'172.16.32.22',
  			'172.17.32.22',
  			'192.168.10.10'
  		]);
  	});
  });
});