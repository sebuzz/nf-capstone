import React from "react";
import { StyledChapterSelector, StyledChapterSelectorWrapper } from "./styled";

/**
 *
 * @param {React.ReactNode} children
 * @param {React.ReactNode} ballPosition
 * @param {React.ReactNode} percent
 * @param {React.HTMLAttributes<HTMLButtonElement>} props
 * @return {JSX.Element}
 * @constructor
 */
const ChapterSelector = ({ children, ballPosition, percent, ...props }) => {
	const ballColor = 2 * ballPosition;
	const myPercent = percent;
	return (
		<StyledChapterSelectorWrapper ballColor={ballColor} percent={myPercent} {...props}>
			<StyledChapterSelector ballColor={ballColor} percent={myPercent} {...props}>
				{children}
			</StyledChapterSelector>
		</StyledChapterSelectorWrapper>
	);
};

export default ChapterSelector;
