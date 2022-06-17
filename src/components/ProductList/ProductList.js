import classNames from 'classnames';
import Product from '../Product/Product';
import styles from './ProductList.module.scss';


const ProductList = ({ value, classes }) => {
	
	const getProducts = () => {
		return value.map(item => 
			<Product key={item.id} value={item}/>	
		)
	}

	const className = classNames(styles.productList, ...classes)
	
	return(
		<div className={className}>
			{getProducts()}
		</div>
	)
}

export default ProductList;