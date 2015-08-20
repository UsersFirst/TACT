$.ajaxSetup({cache: false});
$.support.cors = true;


var edit = function() {
  	$('#summernote').summernote({airMode: false, focus: true, height: '75%'});
  	$('#edit').addClass('hidden');
  	$('#save').removeClass('hidden');
  	$('#sidebar').removeClass('hidden');
};

var save = function() {
	$('#summernote').destroy();
	$('#save').addClass('hidden');
	$('#edit').removeClass('hidden');
	$('#sidebar').addClass('hidden');
};

$(document).ready(function(){

	$('#sidebar').append(new SearchBox())
	$.get('/world',function(data){
		for (var key in data ){
			var panel = new Panel(key,data[key]);
	  		$('#sidebar').append(panel);	
		}
	  	console.log('loaded world!')
	}).fail(function(){
		console.log('failed to load world...')
	})
	$('#summernote').summernote({airMode: false, focus: true, height: '75%'});
	$('#edit').click(edit)
	$('#save').click(save)

})


