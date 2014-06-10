// You can use CoffeScript in tasks.js.coffee if you'd rather.
function completeTask(taskID, status) {
	$.ajax({
		url: "tasks/" + taskID,
		type: "PUT",
		contentType: "application/json",
		dataType: "json",
		data: JSON.stringify({"complete": !status})
	});
};