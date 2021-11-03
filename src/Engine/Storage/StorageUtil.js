function getTemporaryPath(){
	const randomNumber = Math.floor(Math.random() * 1000000) + 10000;
	return `/usr/src/app/generated/screenshot-${new Date().getTime()}-${randomNumber}`
}

module.exports = {getTemporaryPath};
