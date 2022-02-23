import React from "react";
import { StyledChapterWrapper } from "./styled";

/**
 *
 * @param {React.ReactNode} children
 * @param {React.HTMLAttributes<HTMLButtonElement>} props
 * @return {JSX.Element}
 * @constructor
 */
const ChapterWrapper = ({ children, ...props }) => {
	return <StyledChapterWrapper {...props}>{children}</StyledChapterWrapper>;
};

export default ChapterWrapper;
