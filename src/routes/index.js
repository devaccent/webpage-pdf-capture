const express = require("express");
const router = express.Router();
const capture = require("../functions/capture");

router.get("/capture/pdf", async (request, response) => {
	try {
		let result = await capture(request.query);

		response.attachment(`screen-capture.pdf`);
		response.contentType("application/pdf");
		response.send(result);
	} catch(error) {
		response
			.status(500)
			.json({error: error.message});
	}
});

router.get("/capture/png", async (request, response) => {
	//TODO: IMPLEMENT THIS
	response
		.status(500)
		.json({error: 'Not implemented yet'});
});

module.exports = router;
