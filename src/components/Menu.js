import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

export default function Menu() {
	const classnameMenuItem = ({isActive}) => classNames({
		'menu__item': true,
		'menu__item-active': isActive,
	})
	return (
		<div className='menu'>
			<NavLink className={classnameMenuItem} to="/">Главная</NavLink>
			<NavLink className={classnameMenuItem} to="/drift">Дрифт-такси</NavLink>
			<NavLink className={classnameMenuItem} to="/timeattack">Time attack</NavLink>
			<NavLink className={classnameMenuItem} to="/forza">Forza karting</NavLink>
		</div>
	);
}
