import React from 'react';
import styled from 'styled-components';

const CustomTitle = styled.h1`
	@font-face {
		font-family: Dark Souls;
		src: url(${require('../fonts/OptimusPrinceps.ttf')});
	}

	font-family: Dark Souls;
	color: white;
	font-size: 3em;
	text-align: center;
	text-transform: uppercase;
	text-shadow: -1px 0 orange, 0 1px orange, 1px 0 orange, 0 -1px orange;
	margin-top: 50px;
`;

const Title = ({ props }) => {
	return <CustomTitle>{props.title}</CustomTitle>;
};

export default Title;
