import { StyleSheet } from "react-native";
import iPhoneSize from "../../helpers/utils";
import colors from "../../styles/colors";

let termsTextSize = 13;
let headingTextSize = 30;
if (iPhoneSize() === "small") {
  termsTextSize = 12;
  headingTextSize = 26;
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: "flex",
    backgroundColor: colors.white
  },
  welcomeWrapper: {
    flex: 1,
    display: "flex",
    marginTop: 30,
    padding: 20,
    justifyContent: "flex-end"
  },
  logo: {
    width: 200,
    height: 200,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginTop: 70
  },
  welcomeText: {
    fontSize: headingTextSize,
    color: colors.black,
    fontWeight: "300",
    marginBottom: 40
  },
  facebookButtonIcon: {
    color: colors.black,
    position: "relative",
    left: 20,
    zIndex: 8
  },
  moreOptionsButton: {
    marginTop: 10
  },
  moreOptionsButtonText: {
    color: colors.black,
    fontSize: 16
  },
  termsAndConditions: {
    flexWrap: "wrap",
    alignItems: "flex-start",
    flexDirection: "row",
    marginTop: 30
  },
  termsText: {
    color: colors.black,
    fontSize: termsTextSize,
    fontWeight: "600"
  },
  linkButton: {
    borderBottomWidth: 1,
    borderBottomColor: colors.black
  }
});

export default styles;
