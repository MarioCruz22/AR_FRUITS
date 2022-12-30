window.onload = () => {
	let places = staticLoadPlaces();
	renderPlaces(places);
};

function staticLoadPlaces() {
	return [
		{
			name: "Arvore",
			location: {
				lat: 39.39755174364618,
				lng: -8.98156727449639,
			},
		},
		{
			name: "Arvore2",
			location: {
				lat: 39.39783311287452, 
				lng: -8.981492843193394,
			},
		},
	];
}

function renderPlaces(places) {
	let scene = document.querySelector("a-scene");

	places.forEach((place) => {
		let latitude = place.location.lat;
		let longitude = place.location.lng;

		let model = document.createElement("a-entity");
		model.setAttribute(
			"gps-new-entity-place",
			`latitude: ${latitude}; longitude: ${longitude};`
		);
		// model.setAttribute("position", "0 20 0");
		model.setAttribute("position", {
			x : 0,
			y : 0,
			z: 0
		} );
		model.setAttribute("gltf-model", "./assets/asset.gltf");
		model.setAttribute("rotation", "0 180 0");
		model.setAttribute("scale", "10 10 10");

		scene.appendChild(model);
	});
}
