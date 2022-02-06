import * as React from "react";
import useStore from "../../ions/store/store";

import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";

const MenuDrawer = () => {
	const showKana = useStore(store => store.showKana);
	const showTranslation = useStore(store => store.showTranslation);
	const toggleField = useStore(store => store.toggleField);

	return (
		<Paper>
			<Stack direction="row">
				<div>
					<Button
						sx={{ background: showKana ? "none" : "lightblue" }}
						size="small"
						variant="outlined"
						color="secondary"
						onClick={() => {
							toggleField("showKana");
						}}
					>
						Hide Kana
					</Button>
				</div>
				<div>
					<Button
						sx={{ background: showTranslation ? "none" : "lightblue" }}
						size="small"
						variant="outlined"
						color="secondary"
						onClick={() => {
							toggleField("showTranslation");
						}}
					>
						Hide Translation
					</Button>
				</div>
			</Stack>
		</Paper>
	);
};

export default MenuDrawer;
