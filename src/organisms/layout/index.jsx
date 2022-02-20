import React from "react";
import Footer from "../footer";
import Header from "../header";
//import CardHeader from "../../molecules/card-header";
import MenuDrawer from "../../molecules/menu-drawer";
import styled from "@emotion/styled";

const Spacer = () => {
	return <StyledSpacer />;
};

const StyledSpacer = styled.div`
	height: 1vh;
`;

const Layout = ({ children }) => {
	return (
		<>
			{/*<CardHeader />*/}
			<MenuDrawer />
			<Spacer />
			<main>{children}</main>
			<Header />
			<Footer />
		</>
	);
};

export default Layout;
