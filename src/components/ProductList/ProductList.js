import classNames from 'classnames';
import { useMemo } from 'react';
import Product from '../Product/Product';
import styles from './ProductList.module.scss';


const ProductList = ({ value, classes }) => {
	
	const products = useMemo(()=> {
		return value.map(item => 
			<Product key={item.id} value={item}/>	
		)
	}, [value]);

	const className = classNames(styles.productList, ...classes)
	
	return(
		<div className={className}>
			{products}
		</div>
	)
}

export default ProductList;