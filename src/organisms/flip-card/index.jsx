import React from "react";
import Card from "@mui/material/Card";
import { StyledFlipCard, innerStyle, backSideInnerStyle } from "./styled";

const FlipCard = ({ flipped, childrenFront, childrenBack }) => {
	return (
		<StyledFlipCard>
			<Card
				sx={{
					...innerStyle,
					transform: `rotate3d(0,1,0,${flipped ? -180 : 0}deg)`,
				}}
			>
				{childrenFront}
			</Card>
			<Card
				sx={{
					...backSideInnerStyle,
					transform: `rotate3d(0,1,0,${flipped ? 0 : 180}deg)`,
				}}
			>
				{childrenBack}
			</Card>
		</StyledFlipCard>
	);
};

export default FlipCard;
