// You can use CoffeScript in tasks.js.coffee if you'd rather.
function updateTask(e, task, attr, node) {
	var updateObj = {};
	updateObj[attr] = !task[attr];
	$.ajax({
		url: "tasks/" + task.id + ".json",
		type: "PUT",
		contentType: "application/json",
		dataType: "json",
		data: JSON.stringify(updateObj),
		success: function() {
			if (attr == "complete") {
				var row = $(node).closest("tr");
				row.toggleClass("completed");
			}
		}
	});
	// e.preventDefault();
};