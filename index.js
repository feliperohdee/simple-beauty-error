const stackParser = require('error-stack-parser');

const beautify = (err, context = {}) => {
	if(!(err instanceof Error)){
		err = new Error(err);
	}

	return {
		name: err.name,
		message: err.message,
		context,
		stack: JSON.stringify(stackParser.parse(err), null, 2)
	};
};

module.exports = beautify;
