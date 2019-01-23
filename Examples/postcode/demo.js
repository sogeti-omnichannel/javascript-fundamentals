$(document).ready(function(){

	function Address(json){
		this.Street = json.street;
		this.City = json.city.label;
	}
	Address.prototype.toString = function(){
		return "City: " + this.City + "<br/>Street: " + this.Street;
	}

	$("#zoek").click(function(){

		var postcode = $("#postcode").val();
		var huisnummer = $("#huisnummer").val();

		var settings = {
			"async": true,
			"crossDomain": true,
			"url": "https://api.postcodeapi.nu/v2/addresses/?postcode=" + postcode + "&number=" + huisnummer,
			"method": "GET",
			"headers": {
				"x-api-key": "someapikey, get your own",
				"accept": "application/hal+json"
			}
		}
		
		$.ajax(settings).done(function (response) {
			var address = new Address(response._embedded.addresses[0]);
			$('.resultaat').html(address.toString());
		});
	});
});