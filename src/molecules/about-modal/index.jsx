import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Image from "next/image";

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
					<Typography id="modal-modal-title" variant="h5" component="h2">
						KOTOBA NINJA
					</Typography>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
						Japanese Vocabulary Learning App
						<br />
						<br />
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
			</Modal>
		</div>
	);
};
export default AboutModal;
