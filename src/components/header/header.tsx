import * as React from 'react';
import {  AppBar, IconButton, Toolbar, Typography} from '@material-ui/core';
import Nav, { ILink } from './nav';

import MenuIcon from '@material-ui/icons/Menu'


export interface IHeaderProps {

  siteTitle: string
  siteLogo: string
  links: ILink[]
}
 
export interface IHeaderState {
  
}
 
class Header extends React.Component<IHeaderProps, IHeaderState> {
  constructor(props: IHeaderProps) {
    super(props);
    this.state = {   };
  }
  render() { 
    return ( 
    <AppBar position="sticky">
      <Toolbar variant="dense" >
      <Typography variant="h6" color="inherit">
            Photos
      </Typography>

      
        <IconButton edge="start">
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar> );
  }
}
 
export default Header;