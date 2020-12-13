import {Store} from './store';

export const SamsClub: Store = {
	currency: '$',
	labels: {
		inStock: {
			container: 'div[class="sc-pc-large-desktop-layout-columns"]',
			text: ['Ship this item']
		},
		outOfStock: {
			container: 'div[class="sc-pc-large-desktop-oos-card-columns"]',
			text: ['Out of stock']
		},
		maxPrice: {
			container: 'span[class*="price-characteristic"]'
		}
	},
	links: [
		{
			brand: 'sony',
			model: 'ps5 console',
			series: 'sonyps5c',
			url: 'https://www.samsclub.com/p/ps5-bundle/prod24980178'
		},
		{
			brand: 'microsoft',
			model: 'xbox series x',
			series: 'xboxsx',
			url: 'https://www.samsclub.com/p/xbox-series-x-bundle-with-headset/prod25180233'
		}
	],
	name: 'samsclub'
};
