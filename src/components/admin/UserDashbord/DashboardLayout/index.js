import React, { useState } from 'react';
import { Switch, Route,  } from "react-router-dom";
import { styled,experimentalStyled } from '@material-ui/core';
import SideBar from './SideBar';
// import TopBar from './NavBar/Navbar/nav';
import TopBar from './nav';
import  routes  from '../../../../routes'
const DashboardLayoutRoot = experimentalStyled('div')(
  ({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  })
);

const DashboardLayoutWrapper = experimentalStyled('div')(
  ({ theme }) => ({
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 256
    }
  })
);

const DashboardLayoutContainer = experimentalStyled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden'
});

const DashboardLayoutContent = experimentalStyled('div')({
  flex: '1 1 auto',
  height: '100%',
  overflow: 'auto'
});

const useStyles = experimentalStyled((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
    width: 'auto',
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 256,
      width: '100%'
    }
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto'
  }
}));

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === "/Adashboard") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
      return null;
    })}
    {/* <Redirect from="/Adashboard" to="/Adashboard/home" /> */}
  </Switch>
);

const DashboardLayout = () => {
  const classes = useStyles();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div >
      {/* <TopBar onMobileNavOpen={() => setMobileNavOpen(true)} style={{position: 'relative`'}} />
      <SideBar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      />
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>
            {switchRoutes}
          </div>
        </div>
      </div> */}
      <DashboardLayoutRoot>
      {/* <TopBar onMobileNavOpen={() => setMobileNavOpen(true)} /> */}
      <SideBar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      />
      <DashboardLayoutWrapper>
        <DashboardLayoutContainer>
          <DashboardLayoutContent>
        
          {switchRoutes}
          </DashboardLayoutContent>
        </DashboardLayoutContainer>
      </DashboardLayoutWrapper>
    </DashboardLayoutRoot>
    </div>

  );
};

export default DashboardLayout;
