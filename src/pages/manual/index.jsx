import Head from "next/head";
import React from "react";
import Layout from "../../organisms/layout";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FlipOutlinedIcon from "@mui/icons-material/FlipOutlined";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import GridOnIcon from "@mui/icons-material/GridOn";
import Divider from "@mui/material/Divider";
import Image from "next/image";

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
						<p>
							In <b>Learning Mode</b> you can view the vocabulary words freely,
							without any statistics or testing functionality.
							<br />
							<i>
								Learning Mode is enabled / disabled in the dropdown menu in the top
								left corner.
							</i>
						</p>
						<Divider />
						<p>
							However, with <b>Learning Mode disabled</b>, you can press{" "}
							<FlipOutlinedIcon /> to <b>flip</b> the card, revealing the correct
							translation.
						</p>
						<p>
							<Divider />
							<br />
							The colored indicator{" "}
							<Image
								src="/images/Gauge_pic.png"
								width="75"
								height="18"
								alt="picture of indicator"
							/>{" "}
							in the top right corner of each card will show you how well you know
							this word based on how many times you voted your answer as correct
							compared to false answers, in relation to how many times you have seen
							this card already.
							<br />
						</p>
						<Divider />
						<p>
							<CircleOutlinedIcon /> means &apos;correct&apos; in Japanese.
							<br />
							<ClearOutlinedIcon /> means &apos;false&apos; or &apos;incorrect&apos;
						</p>

						<Divider />
						<p>
							<GridOnIcon /> Here you can choose which chapter you want to study. ( 1
							- 50 )<br />
							<br />
							Colors on the Buttons will tell how well you know this chapter&apos;s
							vocabulary. The fill amount indicates, how many of the chapter&apos;s
							words you have already reviewed.
						</p>
						<Divider />
						<p>
							Furthermore, depending on the mode you`ve selected, you can:{" "}
							<ul>
								<li>
									<b>customize the font</b>
								</li>
								<li>
									choose if you want to see the Kana <b>あ</b> or rather only the
									Kanji writing
								</li>{" "}
								<li>
									and if the <b>translation</b> should be <b>hidden</b> in
									Learning mode.
								</li>
							</ul>
						</p>
					</Typography>
				</Box>
			</div>
		</Layout>
	);
};

export default Page;
