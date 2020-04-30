import { StyleSheet, Dimensions } from "react-native";

const PRIMARY_COLOR = "#7444C0";
const SECONDARY_COLOR = "#5636B8";
const WHITE = "#FFFFFF";
const GRAY = "#757E90";
const DARK_GRAY = "#363636";
const BLACK = "#000000";

const ONLINE_STATUS = "#46A575";
const OFFLINE_STATUS = "#D04949";

const STAR_ACTIONS = "#FFA200";
const LIKE_ACTIONS = "#B644B2";
const DISLIKE_ACTIONS = "#363636";
const FLASH_ACTIONS = "#5028D7";

const ICON_FONT = "tinderclone";

const DIMENSION_WIDTH = Dimensions.get("window").width;
const DIMENSION_HEIGHT = Dimensions.get("window").height;

export default StyleSheet.create({
	// COMPONENT - CARD ITEM
	containerCardItem: {
		backgroundColor: 'white',
		borderRadius: 25,
		marginTop: 20,
		alignItems: "center",
		height: 500
		
	},
	containerCardItem2: {
		flex:1,
		backgroundColor: 'white',
		borderRadius: 25,
		marginTop: 20,
		height: 260,
		width: 165,
		marginRight: 10,
		paddingHorizontal: 5,
		alignItems:'center',
		justifyContent:'center'

	},
	matchesCardItem: {
		marginTop: -35,
		backgroundColor: PRIMARY_COLOR,
		paddingVertical: 7,
		paddingHorizontal: 20,
		borderRadius: 30
	},
	matchesTextCardItem: {
		fontFamily: ICON_FONT,
		color: WHITE,
		margin: 8,

	},
	descriptionCardItem: {
		color: GRAY,
		textAlign: "center",
		fontWeight: 'bold'
	},
	status: {
		paddingBottom: 10,
		flexDirection: "row",
		alignItems: "center"
	},
	statusText: {
		color: GRAY,
		fontSize: 12,
		fontWeight:'bold'
	},
	online: {
		width: 6,
		height: 6,
		backgroundColor: ONLINE_STATUS,
		borderRadius: 3,
		marginRight: 4
	},
	offline: {
		width: 6,
		height: 6,
		backgroundColor: OFFLINE_STATUS,
		borderRadius: 3,
		marginRight: 4
	},
	actionsCardItem: {
		flexDirection: "row",
		alignItems: "center",
		paddingVertical: 30
	},
	button: {
		width: 60,
		height: 60,
		borderRadius: 30,
		backgroundColor: 'silver',
		marginHorizontal: 7,
		alignItems: "center",
		justifyContent: "center",
		shadowOpacity: 0.15,
		shadowRadius: 20,
		shadowColor: DARK_GRAY,
		shadowOffset: { height: 10, width: 0 }
	},
	miniButton: {
		width: 40,
		height: 40,
		borderRadius: 30,
		backgroundColor: 'black',
		marginHorizontal: 7,
		alignItems: "center",
		justifyContent: "center",
		shadowOpacity: 0.15,
		shadowRadius: 20,
		shadowColor: DARK_GRAY,
		shadowOffset: { height: 10, width: 0 }
	},
	star: {
		fontFamily: ICON_FONT,
		color: 'gold'
	},
	like: {
		fontSize: 25,
		fontFamily: ICON_FONT,
		color: '#BC243C'
	},
	dislike: {
		fontSize: 25,
		fontFamily: ICON_FONT,
		color: DISLIKE_ACTIONS
	},
	flash: {
		fontFamily: ICON_FONT,
		color: 'white'
	},

	// COMPONENT - CITY
	city: {
		borderRadius: 20,
		marginRight: 135,
		width: 90,
		justifyContent:'flex-start',
		alignItems:'flex-start',
	},
	cityText: {
		fontFamily: ICON_FONT,
		color: DARK_GRAY,
		fontSize: 15,
		fontWeight:'bold'
	},

	// COMPONENT - FILTERS
	filters: {
		padding: 5,
		borderRadius: 20,
		width: 70,
		marginLeft: 30,
		
	},
	filtersText: {
		fontFamily: ICON_FONT,
		color: DARK_GRAY,
		fontSize: 15,
		fontWeight:'bold'
	},

	// COMPONENT - MESSAGE
	containerMessage: {
		flex: 1,
		alignItems: "center",
		justifyContent: "flex-start",
		flexDirection: "row",
	},
	avatar: {
		borderRadius: 30,
		width: 60,
		height: 60,
		marginRight: 20,
		marginVertical: 15
	},
	message: {
		color: BLACK,
		fontSize: 12,
		paddingTop: 5
	},

	// COMPONENT - PROFILE ITEM
	containerProfileItem: {
		backgroundColor: WHITE,
		paddingHorizontal: 10,
		paddingBottom: 25,
		margin: 20,
		borderRadius: 8,
		marginTop: -65,
		shadowOpacity: 0.05,
		shadowRadius: 10,
		shadowColor: BLACK,
		shadowOffset: { height: 0, width: 0 }
	},
	matchesProfileItem: {
		width: 131,
		marginTop: -15,
		backgroundColor: PRIMARY_COLOR,
		paddingVertical: 7,
		paddingHorizontal: 20,
		borderRadius: 20,
		textAlign: "center",
		alignSelf: "center"
	},
	matchesTextProfileItem: {
		fontFamily: ICON_FONT,
		color: WHITE
	},
	name: {
		paddingTop: 25,
		paddingBottom: 5,
		color: DARK_GRAY,
		fontSize: 18,
		textAlign: "center",
		fontWeight: 'bold'
	},
	descriptionProfileItem: {
		color: GRAY,
		textAlign: "center",
		paddingBottom: 20,
		fontSize: 13
	},
	info: {
		paddingVertical: 8,
		flexDirection: "row",
		alignItems: "center"
	},
	iconProfile: {
		fontFamily: ICON_FONT,
		fontSize: 12,
		color: DARK_GRAY,
		paddingHorizontal: 10
	},
	infoContent: {
		color: GRAY,
		fontSize: 13
	},

	// CONTAINER - GENERAL
	bg: {
		flex: 1,
	},
	top: {
		paddingTop: 20,
		flexDirection: "row",
		alignItems:'center',
		justifyContent:'center'
	},
	title: { fontSize: 22, color: DARK_GRAY , fontWeight: 'bold', justifyContent:'center', alignItems:'center'},
	iconMatches: {
		color: DARK_GRAY,
		alignItems:'flex-end',
		flexDirection: 'row'
	},

	// CONTAINER - HOME
	containerHome: { marginHorizontal: 10, paddingBottom: 10 },

	// CONTAINER - MATCHES
	containerMatches: {
		justifyContent: "center",
		flex: 1,
		paddingHorizontal: 9,
		backgroundColor:'#FF6F61'	
	},

	// CONTAINER - MESSAGES
	containerMessages: {
		justifyContent: "space-between",
		flex: 1,
		marginHorizontal: 5,
		backgroundColor:'#EAE6DA'
	},

	// CONTAINER - PROFILE
	containerProfile: { marginHorizontal: 0 },
	photo: {
		width: DIMENSION_WIDTH,
		height: 450
	},
	topIconLeft: {
		fontFamily: ICON_FONT,
		fontSize: 20,
		color: WHITE,
		paddingLeft: 20,
		marginTop: -20,
		transform: [{ rotate: "90deg" }]
	},
	topIconRight: {
		fontFamily: ICON_FONT,
		fontSize: 20,
		color: WHITE,
		paddingRight: 20
	},
	actionsProfile: {
		justifyContent: "center",
		flexDirection: "row",
		alignItems: "center"
	},
	iconButton: { fontFamily: ICON_FONT, fontSize: 40, color: WHITE },
	textButton: {
		fontFamily: ICON_FONT,
		fontSize: 15,
		color: WHITE,
		paddingLeft: 5
	},
	circledButton: {
		width: 50,
		height: 50,
		borderRadius: 25,
		backgroundColor: PRIMARY_COLOR,
		justifyContent: "center",
		alignItems: "center",
		marginRight: 10,
		marginBottom: 10
	},
	roundedButton: {
		justifyContent: "center",
		flexDirection: "row",
		alignItems: "center",
		marginLeft: 10,
		height: 50,
		borderRadius: 25,
		backgroundColor: SECONDARY_COLOR,
		paddingHorizontal: 20,
		marginBottom: 10
	},

	// MENU
	tabButton: {
		paddingBottom: 30,
		marginTop: 20,
		alignItems: "center",
		justifyContent: "center",
		flex: 1,
	},
	tabButtonText: {
		textTransform: "uppercase",
		fontWeight:'bold'
	},
	iconMenu: {
		fontFamily: ICON_FONT,
		height: 20,
		fontWeight:'bold',
		backgroundColor: 'white'
	}
});
