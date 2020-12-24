import {Store} from './store';

export const Dicks: Store = {
	currency: '$',
	labels: {
		inStock: {
			container: '#add-to-cart',
			text: ['ADD TO CART']
		},
		outOfStock: [
			{
				container: '#add-to-cart',
				text: ['NOTIFY ME WHEN AVAILABLE']
			}
        ],
        maxPrice: {
			container: 'span[class="product-price ng-star-inserted"]',
			euroFormat: false
		}
	},
	links: [
		{
			brand: 'powerblock',
			model: 'elite',
			series: 'eliteexp',
			url:
				'https://www.dickssportinggoods.com/p/powerblock-elite-2020-exp-adjustable-dumbbell-20pwkultxpdmbbll2dmb/20pwkultxpdmbbll2dmb'
        }
    ],
	name: 'dicks'
};
