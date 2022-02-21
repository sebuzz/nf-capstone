import React from "react";
import StyledChapterSelector from "./styled";

/**
 *
 * @param {React.ReactNode} children
 * @param {React.ReactNode} ballPosition
 * @param {React.HTMLAttributes<HTMLButtonElement>} props
 * @return {JSX.Element}
 * @constructor
 */
const ChapterSelector = ({ children, ballPosition, ...props }) => {
	const ballColor = 2 * ballPosition;
	return (
		<StyledChapterSelector ballColor={ballColor} {...props}>
			{children}
		</StyledChapterSelector>
	);
};

export default ChapterSelector;
