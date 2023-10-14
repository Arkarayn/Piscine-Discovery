function remove_child(element) {
	if (confirm("Remove this to-do?")) {
        const todo = $("#" + element.id);
        const parent = todo.parent();
        todo.remove();
        document.cookie = "child=" + encodeURIComponent(parent.html());
	}
}

window.onload = function() {
    const todo = get_cookie("child");
	if (todo) {
        $("#ft_list").html(decodeURIComponent(todo));
	}
}

function get_cookie(name) {
	const cookie = document.cookie.match('(^|;)\\s*'+name+'\\s*=\\s*([^;]+)');
	return (cookie ? cookie.pop() : '');
}

$(document).ready(function(){
    $(".button").click(function(){
        let user = prompt("Next to-do:", "");
    if (user != "" && user != null && user != " ") {
        const parent = $("#ft_list");
        const child = $("<div></div>");
        child.attr("onclick", "remove_child(this)");
        child.attr("id", "id_" + Date.now());
        child.attr("class", "divchild");
        child.html(user);
        parent.prepend(child);
        document.cookie = "child=" + encodeURIComponent(parent.html());
    }
    });
});