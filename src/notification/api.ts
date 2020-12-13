import {Link, Store} from '../store/model';
import {config} from '../config';
import {logger} from '../logger';
import fetch from 'node-fetch';

const {url} = config.notifications.api;

export function sendAPIPost(link: Link, store: Store) {
	if (url.length > 0) {
		logger.debug('↗ sending API post request');

		(async () => {
			try {
				await fetch(url, {
                    body: JSON.stringify({link: link, store: store}),
                    headers: {
                        'accept-language': 'en-US,en;q=0.9',
                        'cache-control': 'no-cache',
                        'content-type':
                            'application/json'
                    },
                    method: 'POST'
				});
				logger.info('✔ API post request sent');
			} catch (error: unknown) {
				logger.error("✖ couldn't send API post request", error);
			}
		})();
	}
}
