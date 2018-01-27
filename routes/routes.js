
module.exports.home = function(req, res) {

	res.render('home', {
		title: "Handlebars Demo",
		headline: "Every city has something to say!"
	});
};

module.exports.city = function(req, res) {
	var imageCount = [1,2,3,4];
	var cityName;
	var headline;

	if(req.params.city == "berlin"){
		cityName = "Berlin";
		headline = "Berlin is awesome city!";
	}

	if(req.params.city == "newyork"){
		cityName = "New York";
		headline = "New York is awesome city!";
		imageCount = [1,2,3,4,5,6];
	}

	if(req.params.city == "madrid"){
		cityName = "Madrid";
		headline = "Madrid is awesome city!";
	}

	if(req.params.city == "london"){
		cityName = "London";
		headline = "London is awesome city!";
	}

	if(req.params.city == "paris"){
		cityName = "Paris";
		headline = "Paris is awesome city!";
	}

	res.render('city', {
		title: "Handlebars Demo",
		headline: headline,
		imageCount: imageCount,
		city: req.params.city,
		cityName: cityName
	});
};
