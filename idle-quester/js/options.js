var options = {
	fps: 60,
	interval: (1000/60),
	now: undefined,
	before: undefined,
	init: false,
	numbers: "shortscale",
	theme: "Default",
	version: "v0.04",

	init: function() {
		save.loadData();

		this.before = new Date().getTime();
		$("#t-" + this.theme).attr("selected", "");
		$("#stylesheet").attr("href", themes[themeSelected.selectedIndex].path);
		$("#nav-version").html("(" + this.version + ")");

		getScore(); // retrieve score for leaderboard

		this.init = true;
	},
	update: function() {
		if (this.init == true) {
			this.now = new Date().getTime();
			var elapsedTime = this.now - this.before;
			if (elapsedTime > 17)
				quest.idle(Math.floor(elapsedTime/this.interval));
			else
				quest.idle(1);
			this.before = new Date().getTime();

			player.display();
			quest.display();
		};
	},
	trigger: function() {
		var shortscale = document.getElementById("options-shortscale");
		var scientific = document.getElementById("options-scientific");
		if (shortscale.checked == true)
			this.numbers = "shortscale";
		else
			this.numbers = "scientific";
	}
}

window.onload = function() {
	options.init();
};
window.setInterval(function() {
	options.update();
}, options.interval)