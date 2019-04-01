MM.UI.Value = function() {
	this._select = document.querySelector("#value");
	this._select.addEventListener("change", this);
}

MM.UI.Value.prototype.update = function() {
	var value = MM.App.current.getValue();
	if (value === null) { value = ""; }
	if (typeof(value) == "number") { value = "num" }

	this._select.value = value;
}

MM.UI.Value.prototype.handleEvent = function(e) {
	var value = this._select.value;
	if (value === "num") {
		//set Item's value to a number
		MM.Command.Value.execute();
	} else if (value === "href") {
		//Convert Item's text to an HREF
		console.log("HREF");
		MM.Command.Href.execute();
	} else if (value === "nmap") {
		//Convert Item's text to a link to a nested mindmap
		//if it doesn't exist, create it
		// This nodes label is that node's root topic
		MM.Command.NestMap.execute();
	} else {
		var action = new MM.Action.SetValue(MM.App.current, value || null);
		MM.App.action(action);
	}
}
