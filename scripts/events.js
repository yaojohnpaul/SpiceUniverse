var events = {
	begSuccess: ["A pinch of salt dropped from the sky.", "Someone dropped 2g of salt. You picked it up.", "You picked off the salt from leftover french fries.", "You performed on the sidewalk. An ammused bypasser dropped off some salt as a tip.", "A kind stranger gave you a pack of salt."],
	begFail: ["People pass by you. You were ignored.", "A child spat on you.", "You cried out but no one gave you their attention.", "\"Notice me, senpai!\", you yelled. You were ignored.", "You beg for spice. You were ignored."],
	/**
		params is an object that passes data to be included in the event
		text: text in event
		id: event id
	*/
	init: function(params)
	{
		var obj = $("<div>");
								
		if(params.text) obj.text(params.text);
		if(params.id) obj.attr("id", params.id);
	}
};