import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { Grow, Hidden } from '@material-ui/core/';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import clsx from 'clsx';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    paper: {
        marginRight: theme.spacing(2),
    },
}));

function MenuListComposition(className, ...rest) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    const handleVehicle = () => {
        {
            window.location.href = "/Udashboard/view/vehicle";
        }
    }
    const handleResidence = () => {
        {
            window.location.href = "/";
        }
    }
    const handleElectronic = () => {
        {
            window.location.href = "/";
        }
    }
    const handleSports = () => {
        {
            window.location.href = "/";
        }
    }
    return (
        <div className={classes.root}>

            <div>
                <div
                    style={{ fontWeight: 700, fontSize: 16 }}
                    ref={anchorRef}
                    aria-controls={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                    className={clsx(className)}
                    className={classes.button}
                    {...rest}
                >
                    Category
                </div>
                <Hidden mdDown>
                    <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                        {({ TransitionProps, placement }) => (
                            <Grow

                                {...TransitionProps}

                                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}


                            >

                                <Paper>
                                    <ClickAwayListener onClickAway={handleClose}>
                                        <MenuList autoFocusItem={open} id="menu-list-grow"
                                            onKeyDown={handleListKeyDown}>
                                            <MenuItem onClick={handleVehicle}>Vehicle</MenuItem>
                                            <MenuItem onClick={handleResidence}>Residencies</MenuItem>
                                            <MenuItem onClick={handleElectronic}>Electronics</MenuItem>
                                            <MenuItem onClick={handleSports}>Sports Kits</MenuItem>
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                </Hidden>
                <Hidden mdUp>
                    <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                        {({ TransitionProps, placement }) => (
                            <Grow

                                {...TransitionProps}

                                style={{ transformOrigin: placement === 'right' ? 'center bottom' : 'center top' }}


                            >

                                <Paper>
                                    <ClickAwayListener onClickAway={handleClose}>
                                        <MenuList autoFocusItem={open} id="menu-list-grow"
                                            onKeyDown={handleListKeyDown}>
                                            <MenuItem onClick={handleVehicle}>Vehicle</MenuItem>
                                            <MenuItem onClick={handleResidence}>Residencies</MenuItem>
                                            <MenuItem onClick={handleSports}>Sports Kids</MenuItem>
                                            <MenuItem onClick={handleElectronic}>Electronics</MenuItem>
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                </Hidden>
            </div>
        </div>
    );
}
MenuListComposition.propTypes = {
    className: PropTypes.string,

};
export default MenuListComposition