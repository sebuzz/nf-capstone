import Head from "next/head";
import React from "react";
import Layout from "../../organisms/layout";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const style = {
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

const Page = () => {
	return (
		<Layout>
			<Head>
				<title key="title">KOTOBA NINJA - Manual</title>
				<meta key="description" name="description" content="About" />
			</Head>
			<div>
				<Box sx={style}>
					<Typography variant="h5" component="h2">
						KOTOBA NINJA
					</Typography>
					<Typography sx={{ mt: 2 }}>
						<h3>Japanese Vocabulary Learning App</h3>
						<h4>MANUAL</h4>
						In <b>Learning Mode</b> you can view the vocabulary words freely, without
						any statistics or testing functionality.
						<br />
						<i>
							Learning Mode is enabled / disabled in the dropdown menu in the top left
							corner.
						</i>
						<br />
						<br /> However, with <b>Learning Mode disabled</b>, the colored indicator in
						the top right corner of each card will show you how well you know this word
						based on how many times you voted your answer as correct compared to false
						answers, in relation to how many times you have seen this card already.
						<br />
						<br />
						Furthermore, depending on the mode you`ve selected, you can customize the
						font, if you want to see the Kana or rather only the Kanji writing and if
						the translation should be hidden in Learning mode.
					</Typography>
				</Box>
			</div>
		</Layout>
	);
};

export default Page;
