import * as React from "react";
import useStore from "../../ions/store/store";

import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";

const MenuDrawer = () => {
	const { toggleFiltered, setFilter } = useStore(store => store);
	return (
		<Paper>
			<Stack direction="row">
				<div>
					<Button
						size="small"
						variant="outlined"
						color="secondary"
						onClick={() => {
							toggleFiltered();
							setFilter("kanji");
						}}
					>
						Hide Kana
					</Button>
				</div>
				<div>
					<Button
						size="small"
						variant="outlined"
						color="secondary"
						onClick={() => {
							toggleFiltered();
							setFilter("translation");
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
