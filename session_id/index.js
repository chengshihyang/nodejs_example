var sessions = {};
var key = 'session_id';
var EXPIRES = 20 * 60 * 1000;
var generate = function () {
		var session = {};
		session.id = (new Date()).getTime() + Math.random(); 
		session.cookie = {
				expire: (new Date()).getTime() + EXPIRES
		};
		sessions[session.id] = session;
		return session; 
};

function (req, res) {
		var id = req.cookies[key]; if (!id) {
				req.session = generate();
		} else {
				var session = sessions[id]; if (session) {
						if (session.cookie.expire > (new Date()).getTime()) {
								session.cookie.expire = (new Date()).getTime() + EXPIRES;
								req.session = session;
						} else {
								req.session = generate();
						}
				} else {
						req.session = generate();
				}
		}
		handle(req, res); 
};

var writeHead = res.writeHead;
res.writeHead = function () {
		var cookies = res.getHeader('Set-Cookie');
		var session = serialize('Set-Cookie', req.session.id);
		cookies = Array.isArray(cookies) ? cookies.concat(session):[cookies, session]; res.setHeader('Set-Cookie', cookies);
		return writeHead.apply(this, arguments);
};

var handle = function (req, res) {
		if (!req.session.isVisit) {
				res.session.isVisit = true;
				res.writeHead(200);
				res.end('welcome first');
		}
		else {
				res.writeHead(200);
				res.end('welcome again');
		}
};
