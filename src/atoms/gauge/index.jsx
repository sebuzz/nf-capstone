import React from "react";
import styled from "@emotion/styled";

const StyledLabel = styled.label`
	display: flex;
	position: absolute;
	top: 9px;
	left: 110px;
	align-items: center;
	margin-left: 1em;
	color: #999;
	font-family: sans-serif;
	font-size: 0.7em;
`;

const StyledMeter = styled.div`
	display: flex;
	position: absolute;
	top: 10px;
	left: 50px;
	align-items: center;
	width: 62px;
	height: 12px;
	border: 2px solid;
	border-radius: 10px;
	border-color: #bbb;
	background: lightblue;
`;

// ballColor: 50 = yellow, 0 = red, 100 = green
// ballPosition: 0 is far left --- 24 is idle --- 48 is far right ---

const StyledBall = styled.div`
	position: relative;
	left: ${props => props.ballPosition}px;
	width: 12px;
	height: 12px;
	border: 2px solid;
	border-radius: 50%;
	border-color: hsl(${props => props.ballColor}, 95%, 40%);
	background: hsl(${props => props.ballColor}, 90%, 50%);
`;
const StyledWrapper = styled.div`
	position: absolute;
`;
const Gauge = ({ ballPosition, occurrences }) => {
	const ballColor = 2 * ballPosition;
	return (
		<StyledWrapper>
			<StyledMeter>
				<StyledBall ballPosition={ballPosition} ballColor={ballColor} />
			</StyledMeter>
			<StyledLabel unselectable="true">/&nbsp;{occurrences}</StyledLabel>
		</StyledWrapper>
	);
};

export default Gauge;
