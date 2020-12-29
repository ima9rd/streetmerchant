import {Store} from './store';

export const Bowflex: Store = {
	currency: '$',
	labels: {
		inStock: {
			container: '#add-to-cart',
			text: ['Add to Cart']
		},
		outOfStock: [
			{
				container: 'a[class="tooltipArrow button black add-to-cart-disabled"]',
				text: ['Add to Cart']
			}
        ],
        maxPrice: {
			container: 'span[class="price-new"]',
			euroFormat: false
		}
	},
	links: [
		{
			brand: 'bowflex',
			model: 'selecttech',
			series: 'selecttech1090',
			url:
				'https://www.bowflex.com/selecttech/1090/710000.html'
        }
    ],
	name: 'bowflex'
};
