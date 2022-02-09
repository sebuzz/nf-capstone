import Head from "next/head";
import React from "react";
import Layout from "../organisms/layout";

import ChaptersCard from "../organisms/chapters-card";

const Page = () => {
	return (
		<Layout>
			<Head>
				<title key="title">KOTOBA</title>
				<meta key="description" name="description" content="This is my capstone project" />
			</Head>

			<ChaptersCard />
		</Layout>
	);
};

export default Page;
