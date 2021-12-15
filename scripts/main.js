global.ldbTipNo = function(tip, cell) {
	if (Vars.net.client()) {
		cell.disabled(false);
		cell.tooltip("You gonna desync if you did that");
	} else {
		if (!(tip === undefined)) {
			cell.tooltip(tip);
		}
	}
};
require("logic-dev/mainuilib");
require("logic-dev/mainoverridelib");
require("logic-dev/mainldb");
require("logic-dev/maindevmode");
require("logic-dev/mainunitfactory");
