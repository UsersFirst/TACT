SearchBox = function(callback){
	var box = document.createElement('input');
	box.className = 'form-control'
	box.placeholder = 'search...'
	$(box).on('input',callback)
	return box
}