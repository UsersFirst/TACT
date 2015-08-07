Sidebar = function(){
  this.element = document.createElement('div');
  this.element.className = 'sidebar large-3 medium-3 columns';
  this.element.appendChild(this.controls());
  this.accordion = new Accordion();
  this.element.appendChild(this.accordion.element);
  return this;
};

Sidebar.prototype.hide = function(){
  $(this.element).addClass('hidden');
};

Sidebar.prototype.show = function(){
  $(this.element).removeClass('hidden');
};

Sidebar.prototype.destroy = function(){
  
};

Sidebar.prototype.import = function(object){
  this.accordion.import(object);
};

Sidebar.prototype.export = function(){
  return this.accordion.export();
};

Sidebar.prototype.controls = function(){
  var controls = document.createElement('ul');
  controls.id = 'sidebar-controls';
  var input = document.createElement('input');
  input.id = 'sidebar-input';
  input.placeholder = 'Filter...'
  input.setAttribute('type','search')
  $(input).keydown(this.filter)
  controls.appendChild(input);
  return controls;  
};

Sidebar.prototype.filter = function(event){
  console.log(event.target.value)
};
