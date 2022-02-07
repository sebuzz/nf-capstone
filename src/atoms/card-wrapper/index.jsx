import React from "react";
import { StyledCardWrapper } from "./styled";

/**
 *
 * @param {React.ReactNode} children
 * @param {React.HTMLAttributes<HTMLButtonElement>} props
 * @return {JSX.Element}
 * @constructor
 */
const CardWrapper = ({ children, ...props }) => {
	return <StyledCardWrapper {...props}>{children}</StyledCardWrapper>;
};

export default CardWrapper;
