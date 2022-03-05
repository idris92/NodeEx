const http = require('http');

//-->file system<--
const fs = require('fs');

//-->created a serever<--
const server = http.createServer((req, res) => {
	// console.log('request made');
	console.log('request made', req.url, req.method); //this output the request url and request method from the request

	//-->Note: without the response the page will keep rolling

	//-->sending response to the browser
	//creating an response header

	//this output only plain text
	// res.setHeader('Content-Type','text/plain');
	// res.write('hello ninjas');
	// res.end();

	//this output html
	// res.setHeader('Content-Type', 'text/html');
	// res.write('<p>Hello ninjas</p>');
	// res.write('<p>Hello ninjas again</p>');
	// res.end();

	//-->switching between routes<--
	res.setHeader('Content-Type', 'text/html');
	let path = './views/';
	switch (req.url) {
		case '/':
			res.statusCode = 200;
			path += 'index.html';
			break;
		case '/about':
			res.statusCode = 200;
			path += 'about.html';
			break;
		case '/about-me':
			//trying to do a redirect, case study of when a user want to go to about but clicked about-me
			res.statusCode = 301;
			//setHeader for the location and give it a redirect route
			res.setHeader('Location', '/about');
			res.end();
		default:
			res.statusCode = 404;
			path += '404.html';
			break;
	}

	//-->making use of the file system to return html element<--
	fs.readFile(path, (err, data) => {
		if (err) {
			console.log(err);
			res.end();
		} else {
			// res.write(data);  //note if we are not writing more than one element we can pass the data into then end directly
			res.end(data);
		}
	});
});

//-->create a listener<--
server.listen(3002, () => {
	console.log('listening for requests on port 3002');
});

// --> status code <--

// 100 Range --> information response
// 200 Range --> Success Code
// 300 Range --> Code of Redirect
// 400 Range --> User of Client error code
// 500 Range --> Server error codes

//--> Installing NodeMon using npm <--
//--> run npm install -g nodemon  //if this is installed instead of running a server with
// node server we will be using nodemon server and with this it automatically update any changes

//--> creating a package json in node which keep track of dependencies <--
// run npm init and enter to keep default configurations

//-->installing utility library 'lodash' using npm
//npm i --save lodash
// to use lodash we --> const _ = require('lodash');
//example to get a random number using lodash
//const num =_.random(0, 20);
//console.log(num)
//another example, making a function run once using lodash
//const greet = _.once(()=>{
//    console.log('hello');
//})
