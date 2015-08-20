Panel = function(key,value){
	var panel = document.createElement('div');
	var head = document.createElement('div');
	var body = document.createElement('div');
	panel.className = 'panel panel-default'
	head.className = 'panel-heading'
	body.className = 'panel-body hidden'
	head.textContent = key
	if (value && typeof value == 'object'){
		head.onclick = function(event){
			$(event.target.nextSibling).toggleClass('hidden')
		}
		for (var k in value){
			var p = new Panel(k,value[k])
			body.appendChild(p)
		}
	} else {
		body.textContent = value
	}
	panel.appendChild(head)
	panel.appendChild(body)
	return panel
}