$(document).ready(function(){
	// // Maak een promise
	// var prom = $.Deferred();

	// // Na 3 seconden, resolve de promise
	// setTimeout(function(){
	// 	prom.resolve({ value: 'success' });
	// }, 3000);

	// // Wanneer promise resolved, voer deze functie uit
	// prom.then(function(data){
	// 	$('.resultaat').html('Result: ' + data.value);
	// });

	// // Toon een wacht bericht op de pagina
	// $('.resultaat').html('Waiting');



	$.ajax({
		url: "https://swapi.co/api/people"
	}).then(function(data){
		$('.resultaat').html(
			data.results.map(x => x.name + "<br/>"));
	});




	// var prom = new Promise(function(resolve, reject){
	// 	var sucCtr = Math.random() * 10000;
	// 	var errCtr = Math.random() * 10000;

	// 	if(sucCtr > errCtr) {
	// 		resolve('success data');
	// 	} else {
	// 		reject('error data');
	// 	}
	// });

	// prom.then(
	// 	function(data){ console.log("success: " + data); },
	// 	function(data){ console.log("error: " + data); });
});