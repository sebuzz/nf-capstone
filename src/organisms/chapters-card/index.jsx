import * as React from "react";
import Card from "@mui/material/Card";
import { Paper } from "@mui/material";
import Box from "@mui/material/Box";
import CardWrapper from "../../atoms/card-wrapper";
import CardFooter from "../../molecules/card-footer";
import ChapterGrid from "../../molecules/chapter-grid";
import useStore from "../../ions/store/store";
import { useRouter } from "next/router";

const chapArray = [];

for (let i = 1; i < 51; i++) {
	chapArray.push({ id: i });
}

const ChaptersCard = () => {
	const setSelectedLesson = useStore(store => store.setSelectedLesson);
	const router = useRouter();
	const setMyChapter = item => {
		setSelectedLesson(item);
		router.push("/");
	};
	return (
		<CardWrapper>
			<Card sx={{ width: 445 }}>
				<Paper elevation={20}>
					<Box sx={{ height: 550 }} alignItems="center">
						<div>Select the chapter</div>
						<ChapterGrid>
							{chapArray.map(item => {
								return (
									<div
										key={item.id}
										style={{
											background: "whitesmoke",
											width: 40,
											height: 40,
										}}
									>
										<button
											type="button"
											style={{
												color: "black",
												margin: 0,
												alignContent: "center",
											}}
											onClick={() => {
												setMyChapter(item.id);
											}}
										>
											{item.id}
										</button>
									</div>
								);
							})}
						</ChapterGrid>
					</Box>
					<CardFooter />
				</Paper>
			</Card>
		</CardWrapper>
	);
};

export default ChaptersCard;
