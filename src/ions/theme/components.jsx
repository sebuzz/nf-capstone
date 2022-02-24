export const MuiAppBar = {
	defaultProps: {},
	styleOverrides: {
		root: {
			backgroundColor: "#192338",
			color: "#93b8c2",
		},
	},
};

export const MuiCard = {
	defaultProps: {
		elevation: 1,
	},
	styleOverrides: {
		root: {
			borderRadius: 4,
			"& .MuiPaper-root": {
				borderBottomRightRadius: 4,
				borderBottomLeftRadius: 4,
			},
		},
	},
};
