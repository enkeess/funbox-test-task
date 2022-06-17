import { useState } from 'react';
import styles from './App.module.scss';
import { ProductList } from './components';
import { productService } from './service';

const App = () => {

	
	const [items, setItems] = useState([])
	
	productService.getProducts()
		.then(res => {
			setItems(() => res?.items || []);
			// console.log(products);
		})
		.catch(() => {
			console.log('Error');
		})

	return(
		<div className={styles.app}>
			<h1 className={styles.app__title}>Ты сегодня покормил кота?</h1>
			<ProductList classes={[styles.app__productList]} value={items}/>
		</div>
	);
};


export default App;
