import * as React from 'react'
import Logo from '../static/images/ui/logo.svg'

const Header = ({}) => {
	return (
		<div className="header-root">
			<a href='/'><div className="header-logo">
				<img src={Logo.src} />
			</div></a>
			<div className="header-buttons">button</div>
			<div className="header-footer">copy right 2024</div>
		</div>
	)
}

export default Header