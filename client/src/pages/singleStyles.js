export default {
  primaryInfo: {
    display: "grid",
    gridTemplate: "3em 2.5em 2em 2em 2em 2em 2em 2em 2em 6em 1fr / 1fr 1fr 2fr",
    opacity: "revert-layer",
    backgroundColor: "var(--sub-decor)",
    margin: "20px",
    minHeight: "calc(100vh - 247px)",
    width: "40%",
    justifyContent: "space-around",
    border: "5px solid var(--main-decor)",
    color: "var(--sub-light)",
  },
  infoTitle: {
    margin: 0,
    fontWeight: "bold",
    fontSize: "1.1em",
    gridColumn: "1/3",
    textDecoration: "underline"
  },
  name: {
    fontSize: "1.75em",
    margin: "3px",
    gridColumn: "1/4"
  },
  classLevel: {
    textAlign: "center",
    margin: "0.3em",
    fontSize: "1.1em",
    color: "var(--sub-light)",
    gridArea: "2/1/3/3"
  },
  background: {
    margin: 0,
    gridArea: "3/1/4/3"
  },
  image: {
    gridArea: "2/3/11/4",
    maxWidth: "calc(20vw - 20px)",
    maxHeight: "calc(22.5em - 20px)",
    margin: "10px",
    color: "var(--sub-light)"
  },
  abilities: {
    gridArea: "5/1/8/3",
    display: "grid",
    gridTemplate: "1fr 1fr 1fr / 1fr 1fr",
    gridAutoFlow: "column"
  },
  stats: {
    textAlign: "center",
    margin: 0,
    color: "var(--sub-light)",
  },
  saves: {
    margin: 0,
    gridArea: "9/1/10/3"
  },
  skills: {
    margin: 0,
    gridArea: "10/1/11/3"
  },
  bio: {
    margin: "5px",
    gridArea: "11/1/12/-1",
    textAlign: "left",
    border: "2px solid var(--sub-light)",
    padding: "10px 15px"
  },
  secondaryInfo: {
    color: "var(--sub-light)",
    display: "grid",
    gridTemplate: "2em 1fr / 1fr 1fr 1fr",
    opacity: "revert-layer",
    backgroundColor: "var(--sub-decor)",
    margin: "20px",
    height: "calc(100vh - 247px)",
    width: "40%",
    justifyContent: "space-around",
    border: "5px solid var(--main-decor)",
  },
  button: {
    color: "var(--sub-light)",
    textAlign: "center",
    padding: 0
  },
  subWindow: {
    margin: 0,
    padding: "10px",
    gridColumn: "1/-1"
  },
  subItem: {
    margin: "5px",
    textAlign: "left",
    border: "2px solid var(--sub-light)",
    borderRadius: ".6em",
    padding: "10px 15px"
  },
}