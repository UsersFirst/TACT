Accordion = function(){
  this.element = document.createElement('ul');
  this.element.className = 'accordion';
  return this;
};

Accordion.prototype.import = function(object){
  for ( var key in object ){
    var item = document.createElement('li');
    item.className = 'accordion-navigation';
    
    var title = document.createElement('a');
    title.textContent = key;
    item.appendChild(title);
    
    
    var content = document.createElement('div');
    content.className = 'content active';
    
    if ( typeof object[key] == 'string' ){
      content.textContent = object[key];
    } else {
      
    }
    item.appendChild(content);
    this.element.appendChild(item);
  }
  
};


Accordion.prototype.panel = function(title,content){
    
    var item = document.createElement('li');
    item.className = 'accordion-navigation';
    
    var a = document.createElement('a');
    a.textContent = key;
    item.appendChild(a);
    
    var div = document.createElement('div');
    div.className = 'content';
    
    if ( typeof object[key] == 'string' ){
      content.textContent = object[key];
    } else {
      
    }
  
  
  
};