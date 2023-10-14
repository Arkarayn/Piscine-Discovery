function winPrompt() {
    let user = prompt("Next to-do:", "");
    if (user != "" && user != null && user != " ") {
        const parent = document.getElementById("ft_list");
        const child = document.createElement("div");
        child.setAttribute("onclick", "remove_child(this)");
        child.setAttribute("id", "id_" + Date.now());
        child.setAttribute("class", "divchild");
        child.innerHTML = user;
        parent.insertBefore(child, parent.firstChild);
        document.cookie = "child=" + encodeURIComponent(parent.innerHTML);
    }
}

function remove_child(element) {
	if (confirm("Remove this to-do?")) {
		const todo = document.getElementById(element.id);
		const parent = todo.parentNode;
		parent.removeChild(todo);
		document.cookie = "child=" + encodeURIComponent(parent.innerHTML);
	}
}

window.onload = function() {
    const todo = get_cookie("child");
	if (todo) {
        document.getElementById("ft_list").innerHTML = decodeURIComponent(todo);
	}
}

function get_cookie(name) {
	const cookie = document.cookie.match('(^|;)\\s*'+name+'\\s*=\\s*([^;]+)');
	return (cookie ? cookie.pop() : '');
}