import React from 'react';
import styled from 'styled-components';

const Button = ({ props }) => {
	return (
		<ButtonWraper onClick={props.function()}>
			{props.title} <strong style={{ color: 'red' }}>5 times</strong>
		</ButtonWraper>
	);
};

const ButtonWraper = styled.div`
	@font-face {
		font-family: Dark Souls;
		src: url(${require('../fonts/OptimusPrinceps.ttf')});
	}

	background: rgba(232, 144, 51, 0.5);
	color: white;
	text-align: center;
	max-width: 65%;
	margin: 0 auto;
	font-family: Dark Souls;
	font-size: 2em;
	transition: 1s;

	:hover {
		transform: scale(1.1);
		transition: 1s;
	}
`;

export default Button;
