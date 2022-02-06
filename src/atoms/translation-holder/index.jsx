import React from "react";
import StyledTranslationHolder from "./styled";

/**
 *
 * @param {React.ReactNode} children
 * @param {React.HTMLAttributes<HTMLButtonElement>} props
 * @return {JSX.Element}
 * @constructor
 */
const TranslationHolder = ({ children, ...props }) => {
	return <StyledTranslationHolder {...props}>{children}</StyledTranslationHolder>;
};

export default TranslationHolder;
