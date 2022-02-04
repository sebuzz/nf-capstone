import React from "react";
import StyledFilteredHolder from "./styled";

/**
 *
 * @param {React.ReactNode} children
 * @param {React.HTMLAttributes<HTMLButtonElement>} props
 * @return {JSX.Element}
 * @constructor
 */
const FilteredHolder = ({ children, ...props }) => {
	return <StyledFilteredHolder {...props}>{children}</StyledFilteredHolder>;
};

export default FilteredHolder;
