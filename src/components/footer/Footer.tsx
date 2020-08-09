import * as React from "react"
import { Grid, Paper } from "@material-ui/core"
import { CSSProperties } from "@material-ui/core/styles/withStyles"
import { ui } from "./../../constants/ui"

export interface IFooterProps {}

export interface IFooterState {}

class Footer extends React.Component<IFooterProps, IFooterState> {
  constructor(props: IFooterProps) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <footer>
        <Grid container spacing={12} style={footer}>
         
        </Grid>
      </footer>
    )
  }
}

export default Footer

const footer: CSSProperties = {
  textAlign: "center",
  borderTop: `1px solid ${ui.footer.background.border}`,
  background: ui.footer.background.color,
  color: ui.footer.color,
  bottom: 0,
  left: 0,
  position: "absolute",
  fontFamily: ui.footer.typography,
 
}
