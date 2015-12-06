var musicShop = angular.module("musicShop", []);

musicShop.controller("musicShopController", function($scope) {
	$scope.hello = "Hello Angular!";
	
	$scope.data = {
		categories: [
			{
				name: 'Guitars'
			}, {
				name: 'Brass'
			}, {
				name: 'Woodwind'
			}
		],
		products: [
			{ 
				name: 'Fender Stratocaster MIM', 
				description: 'A product called one with a very long description about something about the product. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
				category: 'Category #1', 
				price: 100 
			}, { 
				name: 'Electronic Drum Kit', 
				description: 'A product called two with a very long description about something about the product. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
				category: 'Category #2', 
				price: 150 
			}, { 
				name: 'Fender Telecaster', 
				description: 'A product called three with a very long description about something about the product. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
				category: 'Category #1', 
				price: 10 
			}/*, { 
				name: 'Jazz Flute', 
				description: 'A product called four with a very long description about something about the product. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 
				category: 'Category #3', 
				price: 90 
			}, { 
				name: 'Product #5', 
				description: 'A product called five with a very long description about something about the product. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',  
				category: 'Category #2', 
				price: 30 
			}, { 
				name: 'Product #6', 
				description: 'A product called six with a very long description about something about the product. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',  
				category: 'Category #2', 
				price: 120 
			}, { 
				name: 'Product #7', 
				description: 'A product called seven with a very long description about something about the product. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',  
				category: 'Category #3', 
				price: 55 
			}, { 
				name: 'Product #8', 
				description: 'A product called eight with a very long description about something about the product. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',  
				category: 'Category #1', 
				price: 12 
			}, { 
				name: 'Product #9', 
				description: 'A product called nine with a very long description about something about the product.', 
				category: 'Category #1', 
				price: 13 
			}*/
		]
	};
});
