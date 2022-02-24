import Head from "next/head";
import React from "react";

import ChaptersCard from "../organisms/chapters-card";
import Header from "../organisms/header";
import Footer from "../organisms/footer";

const Page = () => {
	return (
		<div>
			<Head>
				<title key="title">KOTOBA</title>
				<meta key="description" name="description" content="This is my capstone project" />
			</Head>

			<ChaptersCard />
			<Header />
			<Footer />
		</div>
	);
};

export default Page;
