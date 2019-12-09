const stackParser = require('error-stack-parser');

module.exports = (err, context = {}, maxStack = 10) => {
	if(!(err instanceof Error)){
		err = new Error(err);
	}

	return {
		name: err.name,
		message: err.message,
		context,
		stack: [].concat(stackParser.parse(err))
			.slice(0, maxStack)
	};
};