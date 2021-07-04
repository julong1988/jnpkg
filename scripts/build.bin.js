const Listr = require('listr');
const { buildBins } = require('./tasks');

const tasks = new Listr(buildBins);

tasks.run().then(() => console.log('Success')).catch(err => {
	console.error(err);
});