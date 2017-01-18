var pqMod = require('priorityqueuejs');

var queue=new pqMod( (a, b) => {
		return b.priority - a.priority;
});


queue.enq( {priority: 100, value: 100} );
queue.enq( {priority: 101, value: 101} );
queue.enq( {priority: 102, value: 102} );
queue.enq( {priority: 99, value: 99} );

while (! queue.isEmpty()) {
		var item=queue.deq();
		console.log(item.priority, item.value);
}
