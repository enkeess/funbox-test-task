import data from './data.json';

export const productService = {
	getProducts :  () => {
		return new Promise((resolve, reject) => {
			setTimeout( () => {
				// here we can model working with API
				if(Math.random() < 2){
					resolve(data);
				} else {
					reject(new Error('getStore error'));
				}
			}, 100);
		})
	}
}
 