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
				"18 hours of Coverage",
				"2 Photographers",
				"Coverage of Bride and Groom Preparation",
				"Exclusive Session with Bride and Groom",
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
					"1 Event Highlight"
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
				"2 Cinematographers",
				"1 Event Highlight",
				"Full Content provided on an online interactive platform"	
			],
			Royalty: [
				"12 hours of Coverage",
				"2 Cinematographers",
				"1 Event Highlight",
				"Coverage of Bride and Groom Preparation",
				"Full Content provided on an online interactive platform"
			],
			Elite: [
				"18 hours of Coverage",
				"2 Cinematographers",
				"1 Event Highlight",
				"Coverage of Bride and Groom Preparation",
				"Exclusive Session with Bride and Groom",
				"Drone Shots",
				"Full Content provided on an online interactive platform"
			]
		}
	}

	this.getPackageDetailsById = function(id){
		let id_string = new String(id);
		const map = id_string.split(".");
		return this[map[0]][map[1]][map[2]];
	}
	this.getAllContractTypes = function(){
		this.contractType	= [];
		let i = 1;
		
		let pkg = this.photo.packageNames.Daily;
		for(p in pkg){
			this.contractType.push({id:'photo.Daily.'+pkg[p], name:'Photo - Daily - '+pkg[p], menuClass: 'glyphicon glyphicon-camera'});
			i++;
		}
		pkg = this.photo.packageNames.Hourly;
		for(p in pkg){
			this.contractType.push({id:'photo.Hourly.'+pkg[p], name:'Photo - Hourly - '+pkg[p], menuClass: 'glyphicon glyphicon-camera'});
			i++;
		}
		pkg = this.video.packageNames.Daily;
		for(p in pkg){
			this.contractType.push({id:'video.Daily.'+pkg[p], name:'Video - Daily - '+pkg[p], menuClass:'glyphicon glyphicon-film'});
			i++;
		}
		pkg = this.video.packageNames.Hourly;
		for(p in pkg){
			this.contractType.push({id:'video.Hourly.'+pkg[p], name:'Video - Hourly - '+pkg[p], menuClass:'glyphicon glyphicon-film'});
			i++;
		}
		return this.contractType;
	}
});