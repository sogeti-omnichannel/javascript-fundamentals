function EdPromise(){
	this.succ = null;
	this.fail = null;
}

EdPromise.prototype.then = function(success, failure) {
	if(typeof(success) === "function") {
		this.succ = success;
	}
	if(typeof(failure) === "function") {
		this.fail = failure;
	}
};
EdPromise.prototype.Resolve = function(data){
	if(this.succ) { this.succ(data); }
}
EdPromise.prototype.Reject = function(data){
	if(this.fail) { this.fail(data); }
}


var promise = new EdPromise();

promise.then(
	function(data){ console.log("success: " + data); },
	function(data){ console.log("error: " + data); });

promise.Resolve("goede data");


$(document).ready(function(){});