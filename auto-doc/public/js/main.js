$.ajaxSetup({cache: false});
$.support.cors = true;


sidebar = new Sidebar();
document.body.appendChild(sidebar.element);



$.get('/world',function(data){
	console.log('world!!!!')
  	sidebar.import(data);
}).fail(function(){
	alert('failed to import.')
})
