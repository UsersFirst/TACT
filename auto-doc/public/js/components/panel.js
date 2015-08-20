Panel = function(key,value){
	var panel = document.createElement('div');
	var head = document.createElement('div');
	var body = document.createElement('div');
	panel.className = 'panel panel-default'
	head.className = 'panel-heading'
	body.className = 'panel-body hidden'
	head.textContent = key
	if (value){
		head.onclick = function(event){
			$(event.target.nextSibling).toggleClass('hidden')
		}
	}
	if (value && typeof value == 'object'){
		for (var k in value){
			var p = new Panel(k,value[k])
			body.appendChild(p)
		}
	} else {
		var a = document.createElement('a');
		var img = document.createElement('img');
		a.className = 'thumbnail'
		img.src = value;
		a.appendChild(img);
		body.appendChild(a);
	}
	panel.appendChild(head)
	panel.appendChild(body)
	return panel
}