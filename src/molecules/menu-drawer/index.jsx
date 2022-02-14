import * as React from "react";
import useStore from "../../ions/store/store";

import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

const MenuDrawer = () => {
	const showKana = useStore(store => store.showKana);
	const showTranslation = useStore(store => store.showTranslation);
	const toggleField = useStore(store => store.toggleField);
	const learnMode = useStore(store => store.learnMode);
	const setLearnMode = useStore(store => store.setLearnMode);

	const handleChange = event => {
		setLearnMode(event.target.checked);
	};

	return (
		<Paper>
			<Stack direction="row" paddingLeft="10px">
				<div>
					<FormControlLabel
						control={
							<Switch
								defaultChecked
								color="secondary"
								inputProps={{ "aria-label": "controlled" }}
								checked={learnMode}
								onChange={handleChange}
							/>
						}
						label="Learn Mode"
					/>
				</div>
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
						disabled={!learnMode}
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
