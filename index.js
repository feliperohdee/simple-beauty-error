const stringifyStack = x => {
	return JSON.stringify(x)
		.replace(/\"/g, '')
		.replace(/\t/g, '')
		.replace(/\\t/g, '')
		.replace(/\s{2,}/g, '')
		.replace(/\\s{2,}/g, '')
		.replace(/\\n/g, '\n')
		.split('\n')
		.slice(1);
};

const beautify = (err, context = {}) => {
	if(!(err instanceof Error)){
		err = new Error(err);
	}

	return {
		name: err.name,
		message: err.message,
		context,
		stack: stringifyStack(err.stack)
	};
};

module.exports = beautify;
