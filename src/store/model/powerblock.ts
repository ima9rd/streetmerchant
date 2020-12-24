import {Store} from './store';

export const Powerblock: Store = {
	currency: '$',
	labels: {
		inStock: [
			{
				container: 'button[class="single_add_to_cart_button button alt btn btn-gradient ml-lg-4"]',
				text: ['Add to cart']
			},
			{
				container: 'button[class="single_add_to_cart_button button alt btn btn-gradient"]',
				text: ['Add to cart']
			},
			{
				container: 'button[class="single_add_to_cart_button bundle_add_to_cart_button button alt"]',
				text: ['Add to cart']
			}
		],
		outOfStock: [
			{
				container: 'p[class="stock out-of-stock insufficient-stock"]',
				text: ['Insufficient stock']
			}
        ],
        maxPrice: {
			container: 'span[class="woocommerce-Price-amount amount"].bdi',
			euroFormat: false
		}
	},
	links: [
		{
			brand: 'powerblock',
			model: 'pro',
			series: 'proexp',
			url:
				'https://powerblock.com/product/pro-series-expandable/'
        },
		{
			brand: 'powerblock',
			model: 'elite',
			series: 'eliteexp',
			url:
				'https://powerblock.com/product/elite-series/'
        },
    ],
	name: 'powerblock'
};
