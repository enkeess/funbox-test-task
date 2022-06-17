import Card from '../Card'
import { useState } from 'react';
import classNames from 'classnames';

import styles from './Product.module.scss';

const Product = ({ classes = "", value = {} }) => {
	const [isSelected, setIsSelected] = useState(false);

	const toggleIsSelected = () => {
		setIsSelected(isSelected => !isSelected);
	}

	const productClassName = classNames(styles.product, ...classes)

	return(
		<div className={productClassName}>
			
			<Card 
				{...value}
				isSelected={isSelected}
				classes={[styles.product__card]}
				action={toggleIsSelected} 
			/>
			
			{value.isDisabled 
				?
					<p className={classNames(styles.product__descr, styles.product__descr_disabled)}> 
						Печалька, {value?.taste} закончился. 
					</p>
				:  
					isSelected 
				? 
					<p className={styles.product__descr}>{value?.descr || null}</p>
				: 
					<p className={styles.product__descr}> 
						Чего сидишь? Порадуй котэ,
						<button className={styles.product__btn} onClick={toggleIsSelected}>
							<span>купи</span>.
						</button>
					</p>
			}
		</div>
	)
};

export default Product;