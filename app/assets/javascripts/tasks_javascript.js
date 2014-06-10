// You can use CoffeScript in tasks.js.coffee if you'd rather.
// $(document).ready(function() {
	// var parser = new DOMParser();
	// $(".edit").each(function(index, elem) {
	// 	$(elem).on("click", htmlToString);
	// });

	// function htmlToString() {
	// 	console.log("asjnfjksdf", this);
	// 	var parsed = $(parser.parseFromString($("#task_title").val(), "text/html"));
	// 	var newStr = parsed.find("body").text();
	// 	$("#task_title").val(newStr);
	// }

	function updateTask(e, task, attr, node) {
		console.log("updateTask");
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
	};
// });

