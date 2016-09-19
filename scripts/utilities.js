var forEach = function(collection, callback){
	if(Array.isArray(collection)){
		for(var i = 0; i < collection.length; i ++){
			callback(collection[i], i, collection)
		}
	} else {
		for(var key in collection){
			callback(collection[key], key, collection)
		
		}
	}
}