import anime from "animejs";
import * as React from 'react'
import { useEffect } from 'react'



const AsciiContainter = ({ Logo, Specs }) => {
	
	useEffect(() => {
		
	  }, []);
	console.log(Specs)
	return (
				<div className="ascii-container">
					<div className="ascii-img-container">
						<img className="ascii-src" src={Logo.src} />
					</div>
					<div className="ascii-description">
					{ Specs.map((spec) => {
					return(
						<small>{spec} | </small>
					)})}
					</div>
				</div>
	)
}

export default AsciiContainter