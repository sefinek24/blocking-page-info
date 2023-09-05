const morgan = require('morgan');

// const skipUserAgents = [];

// const skipUserAgent = () => req => {
// 	const userAgent = req.headers['user-agent'];
// 	return skipUserAgents.includes(userAgent);
// };

const logger = morgan('[:status :method :response-time ms] :url - :user-agent' /* { skip: skipUserAgent() } */);

module.exports = logger;