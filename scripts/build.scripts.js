const Listr = require('listr');
const { buildScripts } = require('./tasks');

const tasks = new Listr(buildScripts);

tasks.run().then(() => console.log('Success')).catch(err => {
	console.error(err);
});