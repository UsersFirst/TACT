DocBuilder = function(){
  
    return this;
};

DocBuilder.prototype.sidebar = function(){
    var sidebar = document.createElement('div');
    sidebar.className = 'sidebar';
    return sidebar;
};

DocBuilder.prototype.alert = function(){
  console.log('hello!');
};

var db = new DocBuilder();
db.alert();