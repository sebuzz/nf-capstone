import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Image from "next/image";
import CopyrightIcon from "@mui/icons-material/Copyright";
import Stack from "@mui/material/Stack";
import styled from "@emotion/styled";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

const StyledLogoDiv = styled.div`
	display: flex;
	position: relative;
	align-items: center;
`;

const StyledAboutWrapper = styled.div`
	display: flex;
	margin-top: 0;
	background-image: url("/images/Hokusai-Wave_gold_l.png");
	background-repeat: no-repeat;
	background-position: bottom;
`;

const AboutModal = () => {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<div>
			<Button onClick={handleOpen}>
				<Image
					layout="fixed"
					src="/images/Logo_light-blue.png"
					alt="Kotoba Ninja Logo"
					width={83}
					height={50}
				/>
			</Button>
			<Modal
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
				open={open}
				onClose={handleClose}
			>
				<Box sx={style}>
					<StyledAboutWrapper>
						<Typography id="modal-modal-title" variant="h5" component="h2">
							KOTOBA NINJA
						</Typography>
						<Typography id="modal-modal-description" sx={{ mt: 2 }}>
							Japanese Vocabulary Learning App
							<br />
							<small>Version 1.1.1</small>
							<br />
							<br />
							<StyledLogoDiv>
								<Image
									src="/images/Logo_full.png"
									width={200}
									height={134}
									alt="Logo"
								/>
							</StyledLogoDiv>
							<Stack direction="row">
								<CopyrightIcon fontSize="small" />
								<small>2022 - Sebus</small>
							</Stack>
						</Typography>
					</StyledAboutWrapper>
				</Box>
			</Modal>
		</div>
	);
};
export default AboutModal;
