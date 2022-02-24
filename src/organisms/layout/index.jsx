import React from "react";
import Footer from "../footer";
import Header from "../header";
import styled from "@emotion/styled";
import TopBar from "../../molecules/top-bar";

const Spacer = () => {
	return <StyledSpacer />;
};

const StyledSpacer = styled.div`
	height: 0.1vh;
`;

const Layout = ({ children }) => {
	return (
		<>
			<TopBar />
			<Spacer />
			<main>{children}</main>
			<Header />
			<Footer />
		</>
	);
};

export default Layout;
