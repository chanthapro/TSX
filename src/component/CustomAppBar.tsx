import React,{ FunctionComponent } from "react"
import AppBar, { AppBarProps } from "@material-ui/core/AppBar";
import { Toolbar,ToolbarProps, IconButton, Typography, Button, MenuList, makeStyles, ListItem } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from '@material-ui/core/Menu'
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";



interface CustomAppBarProps extends ToolbarProps{
    appBarProps:AppBarProps
}
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));




const CustomAppBar: FunctionComponent<CustomAppBarProps> = (props) => {
    const {appBarProps, ...toolbarProps } = props
    const classes = useStyles();
    return (
        <AppBar {...appBarProps}>
            <Toolbar {...toolbarProps}>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <ListItem>
                    <MenuIcon>

                    </MenuIcon>
                </ListItem>
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    News
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    );
};

export default CustomAppBar;