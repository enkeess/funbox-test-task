import styles from './Card.module.scss';
import classNames from 'classnames';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';

const Card = (props) => {

	const { taste = '', weight = 0, addition = [], 
			isSelected = false,
		 	isDisabled = true
	} = props;

	const { classes = [], action = null } = props;

	const getAdditions = () => {
		return addition.map(({value, descr}) => {
			return <p key={nanoid()} className={styles.addition__item}>
				<span>{value}</span>
				{descr}
			</p>
		})
	}
		
	const cardClassName = classNames(styles.card, ...classes, {
		[ styles.card_default  ] : !isSelected && !isDisabled,
		[ styles.card_selected ] : isSelected && !isDisabled,
		[ styles.card_disabled ] : isDisabled
	})

	const [isIn,  setIsIn] = useState(true);
	const [wasOut, setWaswOut] = useState(false);

	useEffect(() => {
		isSelected && setIsIn(false);

	}, [isSelected])

	return(
		<div 
			className={cardClassName} 
			onClick={() => {action(); setWaswOut(false);}} 
			onMouseEnter={() => { wasOut && setIsIn(true)} } 
			onMouseLeave={() => {setIsIn(false); setWaswOut(true)}}
		>
			
			<p className={styles.card__subtitle}>
				{ isSelected && isIn && wasOut
					?	
						'Котэ не одобряет?' 
					:
						'Сказочное заморское яство'
				} 
			</p>

			<p className={styles.card__title}>Нямушка</p>
			<p className={styles.card__taste}>{taste}</p>
			<div className={classNames(styles.addition, styles.card__addition)}>
				{getAdditions()}
			</div>
			
			
			<div className={classNames(styles.weight, styles.card__weight)}>
				<span className={styles.weight__count}>
					{String(weight).split('.').join(',')}
				</span>
				<span className={styles.weight__des}>кг</span>
			</div>
		</div>
	);
};

export default Card;