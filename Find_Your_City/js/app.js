$(document).ready(function() {

	var cities = [
		"Warszawa",
		"Kraków",
		"Katowice",
		"Wrocław",
		"Zielona Góra",
		"Sandomierz",
		"Annopol",
		"Białystok",
		"Częstochowa",
		"Dęblin",
		"Elbląg",
		"Frombork",
		"Gliwice",
		"Hrubieszów",
		"Iława",
		"Jarosław",
		"Kielce",
		"Lublin",
		"Łódź",
		"Malbork",
		"Nałęczów",
		"Opole",
		"Puławy",
		"Radom",
		"Starachowice",
		"Śląsk",
		"Tomaszów Mazowiecki",
		"Ustka",
		"Zamość"
	];

	$("#chooseCity").autocomplete({
		source: cities
	});

});