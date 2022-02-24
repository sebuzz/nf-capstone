import React from "react";
import styled from "@emotion/styled";
import { IconButton } from "@mui/material";
import GridOnIcon from "@mui/icons-material/GridOn";
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/router";

const StyledHeader = styled.div`
	display: flex;
	position: fixed;
	bottom: 0;
	width: 100%;
	height: 3em;
	background: rgb(25, 35, 56);
`;
const StyledLinkWrapper = styled.div`
	display: flex;
	position: fixed;
	bottom: 0.1em;
	flex-direction: row;
	align-items: center;
	justify-content: space-evenly;
	width: 100%;
`;

const Header = () => {
	const router = useRouter();
	return (
		<StyledHeader>
			<nav data-test-id="navigation">
				<StyledLinkWrapper>
					<IconButton
						size="large"
						color="primary"
						onClick={() => {
							router.push("/");
						}}
					>
						<HomeIcon />
					</IconButton>
					<IconButton
						size="large"
						color="primary"
						onClick={() => {
							router.push("/select-chapter");
						}}
					>
						<GridOnIcon />
					</IconButton>
				</StyledLinkWrapper>
			</nav>
		</StyledHeader>
	);
};

export default Header;
