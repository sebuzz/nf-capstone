import React from "react";
import StyledVocNoHolder from "./styled";

/**
 *
 * @param {React.ReactNode} children
 * @param {React.HTMLAttributes<HTMLButtonElement>} props
 * @return {JSX.Element}
 * @constructor
 */
const VocNoHolder = ({ children, ...props }) => {
	return <StyledVocNoHolder {...props}>{children}</StyledVocNoHolder>;
};

export default VocNoHolder;
