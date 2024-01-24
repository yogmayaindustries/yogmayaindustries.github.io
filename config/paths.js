const path = require('path');

const getDestFolder = path => path.match(/([^\/]*)\/*$/)[1].slice(0, -1);

const CSS = process.env.CSS === 'true';
const { MODE } = process.env;
const DEVMODE = MODE === 'development';

const dest = '../build/css/';

const buildPathFolder = `${dest}/scripts/`;
console.log("buildPathFolder:", buildPathFolder);

const buildPath = path.relative('', buildPathFolder);

module.exports = {
	CSS,
	MODE,
	dest,
	buildPath,
	path
};
