import React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Button,
  ListItem,
  styled
} from '@material-ui/core';
var i = 0
const useStyles = styled((theme) => ({
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0
  },
  button: {
    color: theme.palette.text.secondary,
    fontWeight: 700,
    justifyContent: 'flex-start',
    letterSpacing: 0,
    padding: '6px 0px 6px 15px',
    textTransform: 'none',
    width: '100%',
    fontSize: 16,
    boxShadow: "1px 1px 10px 10px #e8e6e6",
    backgroundColor: 'white', height: 43,
    marginBottom: 10, borderRadius: 10, color: "#000"

  },
  icon: {
    marginRight: theme.spacing(1),

  },
  title: {
    marginRight: 'auto'
  },
  active: {
    color: "#fff", 
    backgroundColor: '#D00B0B', 
    padding: '6px 0px 6px 15px',
    borderRadius: 10,
    fontWeight: 800,
    fontSize: 16,
    width: "100%",
    marginBottom: 10,
    textTransform: 'none',
    height: 43,
    '& $title': {
      fontWeight: 700,
      color: "#fff"
    },
    '& $icon': {
      color: "#fff",
      fontWeight: 700,

    }
  }
}));

const NavItem = ({
  className,
  href,
  icon: Icon, title,
  icon1, icon2,
  indexNo, active, type,
  ...rest
}) => {
  const classes = useStyles();
  console.log(i)
  return (
    <ListItem
      className={clsx(classes.item, className)}
      disableGutters
      {...rest}
    >
      <Button
        activeClassName={classes.active}
        className={active == indexNo ? classes.active : classes.button}
        component={RouterLink}
        to={href}
      >

        {/* <div></div> */}
        <img src={active != indexNo ? icon1 : icon2} alt="icon" height="30px" />
        {/* { i==1 ?   <img src={Icon}  alt="icon" height="30px" /> :  <img src={Icon}  alt="icon" height="30px" />} */}
        {/* {Icon && (
          <Icon
            className={classes.icon}
            size="22"
          />
        )} */}
        <span className={classes.title}>
          {title}
        </span>
      </Button>
    </ListItem>
  );
};

NavItem.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.elementType,
  title: PropTypes.string
};

export default NavItem;
