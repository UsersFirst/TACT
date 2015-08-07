Accordion = function(){
  this.element = document.createElement('ul');
  this.element.className = 'accordion';
  return this;
};

Accordion.prototype.import = function(object){
  for ( var key in object ){
    var panel = this.panel(key,object[key]);
    this.element.appendChild(panel);
  }
  console.log('successfully imported to accordion!');
};


Accordion.prototype.panel = function(key,value){
    
    var item = document.createElement('li');
    item.className = 'accordion-navigation';
    
    var a = document.createElement('a');
    a.textContent = key;
    item.appendChild(a);

    if (!value) return item;
    
    var div = document.createElement('div');
    div.className = 'content';
    item.appendChild(div);
     
    if ( typeof value == 'string' ){
      div.textContent = value;
    } else if ( typeof value == 'object' ){
      for ( var k in value){
        var panel = this.panel(k,value[k])
        div.appendChild(panel);  
      }
    }

    return item
  
  
  
};