var first = {
	exec: function(){
		var self = this;
		var second = {
			exec: function(){
				console.log(self.level); // returns 1, because "self" was created as a pointer to the "first" object.
		                console.log(this.level); // returns 2, because "this" was silently created in the object constructor as a pointer to the "second" object.
			},
			level: 2
		};
		second.exec();
        },
	level: 1
};

first.exec();
