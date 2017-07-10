app.service('gallerySvc',function(){
	this.gallery = {
		1:	{		
				galleryTitle: "PRE WEDDING",
				pics:[
					{	fullImg: 'img/gallery1/PS-1.jpg',	thumb: 'img/thumbGallery1/PS-1.jpg'   },
					{	fullImg: 'img/gallery1/PS-2.jpg',	thumb: 'img/thumbGallery1/PS-2.jpg'   },
					{	fullImg: 'img/gallery1/PS-3.jpg',	thumb: 'img/thumbGallery1/PS-3.jpg'   },
					{	fullImg: 'img/gallery1/PS-4.jpg',	thumb: 'img/thumbGallery1/PS-4.jpg'   },
					{	fullImg: 'img/gallery1/PS-5.jpg',	thumb: 'img/thumbGallery1/PS-5.jpg'   },
					{	fullImg: 'img/gallery1/PS-6.jpg',	thumb: 'img/thumbGallery1/PS-6.jpg'   },
					{	fullImg: 'img/gallery1/PS-7.jpg',	thumb: 'img/thumbGallery1/PS-7.jpg'   },
					{	fullImg: 'img/gallery1/PS-8.jpg',	thumb: 'img/thumbGallery1/PS-8.jpg'   },
					{	fullImg: 'img/gallery1/PS-9.jpg',	thumb: 'img/thumbGallery1/PS-9.jpg'   },
					{	fullImg: 'img/gallery1/PS-10.jpg',	thumb: 'img/thumbGallery1/PS-10.jpg'  },
					{	fullImg: 'img/gallery1/PS-11.jpg',	thumb: 'img/thumbGallery1/PS-11.jpg'  },
					{	fullImg: 'img/gallery1/PS-12.jpg',	thumb: 'img/thumbGallery1/PS-12.jpg'  },
					{	fullImg: 'img/gallery1/PS-13.jpg',	thumb: 'img/thumbGallery1/PS-13.jpg'  },
					{	fullImg: 'img/gallery1/PS-14.jpg',	thumb: 'img/thumbGallery1/PS-14.jpg'  },
					{	fullImg: 'img/gallery1/PS-15.jpg',	thumb: 'img/thumbGallery1/PS-15.jpg'  },
					{	fullImg: 'img/gallery1/PS-16.jpg',	thumb: 'img/thumbGallery1/PS-16.jpg'  },
					{	fullImg: 'img/gallery1/PS-17.jpg',	thumb: 'img/thumbGallery1/PS-17.jpg'  },
					{	fullImg: 'img/gallery1/PS-18.jpg',	thumb: 'img/thumbGallery1/PS-18.jpg'  },
					{	fullImg: 'img/gallery1/PS-19.jpg',	thumb: 'img/thumbGallery1/PS-19.jpg'  },
					{	fullImg: 'img/gallery1/PS-20.jpg',	thumb: 'img/thumbGallery1/PS-20.jpg'  },
					{	fullImg: 'img/gallery1/PS-21.jpg',	thumb: 'img/thumbGallery1/PS-21.jpg'  },
					{	fullImg: 'img/gallery1/PS-22.jpg',	thumb: 'img/thumbGallery1/PS-22.jpg'  }
				]
			},
		4:	{		
				galleryTitle: "WEDDING",
				pics:[
					{	fullImg: 'img/gallery2/recp-1.jpg',	thumb: 'img/thumbGallery2/recp-1.jpg'   },
					{	fullImg: 'img/gallery2/recp-2.jpg',	thumb: 'img/thumbGallery2/recp-2.jpg'   },
					{	fullImg: 'img/gallery2/recp-3.jpg',	thumb: 'img/thumbGallery2/recp-3.jpg'   },
					{	fullImg: 'img/gallery2/recp-4.jpg',	thumb: 'img/thumbGallery2/recp-4.jpg'   },
					{	fullImg: 'img/gallery2/recp-5.jpg',	thumb: 'img/thumbGallery2/recp-5.jpg'   },
					{	fullImg: 'img/gallery2/recp-6.jpg',	thumb: 'img/thumbGallery2/recp-6.jpg'   },
					{	fullImg: 'img/gallery2/recp-7.jpg',	thumb: 'img/thumbGallery2/recp-7.jpg'   },
					{	fullImg: 'img/gallery2/recp-8.jpg',	thumb: 'img/thumbGallery2/recp-8.jpg'   },
					{	fullImg: 'img/gallery2/recp-9.jpg',	thumb: 'img/thumbGallery2/recp-9.jpg'   },
					{	fullImg: 'img/gallery2/recp-10.jpg', thumb: 'img/thumbGallery2/recp-10.jpg'  },
					{	fullImg: 'img/gallery2/recp-11.jpg', thumb: 'img/thumbGallery2/recp-11.jpg'  },
					{	fullImg: 'img/gallery2/recp-12.jpg', thumb: 'img/thumbGallery2/recp-12.jpg'  },
					{	fullImg: 'img/gallery2/recp-13.jpg', thumb: 'img/thumbGallery2/recp-13.jpg'  },
					{	fullImg: 'img/gallery2/recp-14.jpg', thumb: 'img/thumbGallery2/recp-14.jpg'  },
					{	fullImg: 'img/gallery2/recp-15.jpg', thumb: 'img/thumbGallery2/recp-15.jpg'  },
					{	fullImg: 'img/gallery2/recp-16.jpg', thumb: 'img/thumbGallery2/recp-16.jpg'  },
					{	fullImg: 'img/gallery2/recp-17.jpg', thumb: 'img/thumbGallery2/recp-17.jpg'  },
					{	fullImg: 'img/gallery2/recp-18.jpg', thumb: 'img/thumbGallery2/recp-18.jpg'  },
					{	fullImg: 'img/gallery2/recp-19.jpg', thumb: 'img/thumbGallery2/recp-19.jpg'  },
					{	fullImg: 'img/gallery2/recp-20.jpg', thumb: 'img/thumbGallery2/recp-20.jpg'  },
					{	fullImg: 'img/gallery2/recp-21.jpg', thumb: 'img/thumbGallery2/recp-21.jpg'  },
					{	fullImg: 'img/gallery2/recp-22.jpg', thumb: 'img/thumbGallery2/recp-22.jpg'  },
					{	fullImg: 'img/gallery2/recp-23.jpg', thumb: 'img/thumbGallery2/recp-23.jpg'  },
					{	fullImg: 'img/gallery2/recp-24.jpg', thumb: 'img/thumbGallery2/recp-24.jpg'  }
				]
			}	
	}
	this.getPics = function(){
		return this.gallery[this.galleryIndex].pics;
	}
	this.getTitle = function(){
		return this.gallery[this.galleryIndex].galleryTitle;	
	}
	this.setActiveGallery = function(index){
		this.galleryIndex = index;
	}
})