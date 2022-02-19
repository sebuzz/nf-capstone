import React from "react";
import Footer from "../footer";
import Header from "../header";
//import CardHeader from "../../molecules/card-header";
import MenuDrawer from "../../molecules/menu-drawer";

const Layout = ({ children }) => {
	return (
		<>
			{/*<CardHeader />*/}
			<MenuDrawer />
			<main>{children}</main>
			<Header />
			<Footer />
		</>
	);
};

export default Layout;
