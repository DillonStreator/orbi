const logger = require("../utils/logger");

module.exports = (req, res, next) => {
	const startHrTime = process.hrtime();
	res.on("finish", () => {
		const elapsedHrTime = process.hrtime(startHrTime);
		const elapsedTimeInMs = elapsedHrTime[0] * 1000 + elapsedHrTime[1] / 1e6;
		logger.info(`elapsed request time: ${elapsedTimeInMs}ms`);
	});
	next();
};
