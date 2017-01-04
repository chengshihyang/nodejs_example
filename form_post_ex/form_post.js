var request=require('request');
var fs=require('fs');

var formData = {
  // Pass a simple key-value pair
  my_field1: 'my_value1',
  my_field2: 'my_value2',
  // Pass data via Buffers
  my_buffer: new Buffer([1, 2, 3]),
	my_file: fs.createReadStream('./temp.txt')
};

request.post({url:'http://172.18.2.183:8080/upload', formData: formData}, function optionalCallback(err, httpResponse, body) {
  if (err) {
    return console.error('upload failed:', err);
  }
  console.log('Upload successful!  Server responded with:', body);
});
