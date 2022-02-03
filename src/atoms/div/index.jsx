import React from "react";
import StyledDiv from "./styled";

/**
 *
 * @param {React.ReactNode} children
 * @param {React.HTMLAttributes<HTMLButtonElement>} props
 * @return {JSX.Element}
 * @constructor
 */
const Div = ({ children, ...props }) => {
	return <StyledDiv {...props}>{children}</StyledDiv>;
};

export default Div;
