var HET = (function(module)
{
	module.DoIt = function(resObj){
		resObj.prepend(Date()+'<br/>');
	}
	return module;
}(HET || {}));