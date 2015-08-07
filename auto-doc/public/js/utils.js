Utils = {};


Utils.filterObject = function(object,string){
	var newObj = {}
	for ( var key in object ){
		if ( key.toLowerCase().indexOf(key.toLowerCase() > -1 )){
			newObject[key] = object[key];
			continue;
		}
		if ( typeof object[key] == 'object' ){
			newObj[key] = Utils.filterObject(object[key],string)
			continue
		}
	}
	return newObj;
}