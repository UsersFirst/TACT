Sidebar = function(){
  
  this.element = document.createElement('div');
  this.element.className = 'sidebar large-3 medium-3 columns';
  
  var controls = document.createElement('ul');
  controls.id = 'sidebar-controls';
  
  var input = document.createElement('input');
  input.id = 'sidebar-input';
  
  controls.appendChild(input);
  this.element.appendChild(controls);
  
  var accordion = new Accordion();
  this.element.appendChild(accordion.element);
  
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
  
};

Sidebar.prototype.export = function(){
  
};

Sidebar.prototype.controls = function(){
  
  
};
