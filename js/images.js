jQuery(function($){
				
				$.supersized({
				
					// Functionality
					slide_interval          :   3000,		// Length between transitions
					transition              :   1, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
					transition_speed		:	2000,		// Speed of transition

					// Components							
					slides 					:  	[			// Slideshow Images
													{image : 'https://images-na.ssl-images-amazon.com/images/I/91ATd8cL3qL._SL1500_.jpg'},
													{image : 'https://images-na.ssl-images-amazon.com/images/I/91rvDMSVuoL._SL1500_.jpg'},
													{image : 'https://images-na.ssl-images-amazon.com/images/I/91nCUMqDXEL._SL1500_.jpg'},
												]
					
				});
		    });
		    
