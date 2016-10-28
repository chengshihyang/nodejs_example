var myObj = {
	    specialFunction: function () {
		    console.log("special");
	    },
	 
	    anotherSpecialFunction: function () {
		    console.log("another special");
	    },
	 
	    getAsyncData: function (cb) {
		    console.log("cb:" + this);
		    cb();
	    },
	 
	    render: function () {
		    console.log("outer:" + this);
		    var that = this;
		    this.getAsyncData(function () {
			    //that.specialFunction();
			    //that.anotherSpecialFunction();

			    //this.specialFunction();
			    //this.anotherSpecialFunction();
			    console.log("inner:" + this);
		    });
	    }
};
 
myObj.render();
