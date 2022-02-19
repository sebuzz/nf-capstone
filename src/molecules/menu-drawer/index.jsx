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
		<Paper sx={{ backgroundColor: "#1a2756" }}>
			<Stack direction="row" paddingLeft="10px">
				<div>
					<FormControlLabel
						control={
							<Switch
								sx={{ color: "white" }}
								color="default"
								inputProps={{ "aria-label": "controlled" }}
								checked={learnMode}
								onChange={handleChange}
							/>
						}
						label=""
					/>
				</div>
				<div>
					<Button
						sx={{ color: "white", background: showKana ? "none" : "lightblue" }}
						size="small"
						variant="none"
						color="primary"
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
						sx={{ color: "white", background: showTranslation ? "none" : "lightblue" }}
						size="small"
						variant="none"
						color="primary"
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
