app.service('packages',function(){
	this.photo = {
		title: 'PHOTO PACKAGES',
		packageNames:{
			Daily: ['Essential','Elite'],
			Hourly: ['Essential','Luxury','Royalty','Elite'],
		},
		Daily:{
			Essential:[	
					"Full Event Coverage", 
					"1 Photographer", 
					"Full Content provided on an online interactive platform"
			],
			Elite:[

				"Full Day of Coverage",
				"2 Photographers",
				"Coverage of Bride and Groom Preparation",
				"Exclusive Session with Bride and Groom",
				"Full Content provided on an online interactive platform"
			]
		},

		Hourly:{
			Essential: [
				"6 hours of Coverage",
				"1 Photographer",
				"Full Content provided on an online interactive platform"
			],
			Luxury: [
				"8 hours of Coverage",
				"2 Photographers",
				"Full Content provided on an online interactive platform"	
			],
			Royalty: [
				"12 hours of Coverage",
				"2 Photographers",
				"Coverage of Bride and Groom Preparation",
				"Photo Book",
				"Full Content provided on an online interactive platform"
			],			
			Elite: [
				"16 hours of Coverage",
				"2 Photographers",
				"Coverage of Bride and Groom Preparation",
				"Exclusive Session with Bride and Groom",
				"Photo Book",
				"1 Hour E-Shoot",
				"Full Content provided on an online interactive platform"
			]
		}
	}

	this.video = {
		title: 'CINEMA PACKAGES',
		packageNames:{
			Daily: ['Essential','Elite'],
			Hourly: ['Essential','Luxury','Royalty','Elite'],
		},
		Daily:{
			Essential:[	
					"Full Event Coverage", 
					"1 Cinematographer", 
					"Full Content provided on an online interactive platform"
			],
			Elite:[

				"Full Day of Coverage",
				"2 Cinematographers",
				"1 Event Highlight",
				"Coverage of Bride and Groom Preparation",
				"Exclusive Session with Bride and Groom",
				"Drone Shots",
				"Full Content provided on an online interactive platform"
			]
		},

		Hourly:{
			Essential: [
				"6 hours of Coverage",
				"1 Cinematographer",
				"Full Content provided on an online interactive platform"
			],			
			Luxury: [
				"8 hours of Coverage",
				"2 Cinematographer",
				"1 Event Highlight",
				"Full Content provided on an online interactive platform"	
			],
			Royalty: [
				"12 hours of Coverage",
				"2 Cinematographer",
				"1 Event Highlight",
				"Coverage of Bride and Groom Preparation",
				"Full Content provided on an online interactive platform"
			],
			Elite: [
				"16 hours of Coverage",
				"2 Cinematographer",
				"1 Event Highlight",
				"Coverage of Bride and Groom Preparation",
				"Exclusive Session with Bride and Groom",
				"Drone Shots",
				"Full Content provided on an online interactive platform"
			]
		}
	}
});