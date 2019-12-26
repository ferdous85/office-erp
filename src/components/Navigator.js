import React from 'react';
import PropTypes from 'prop-types';
import Make from 'classnames';
import {withRouter, Link} from 'react-router-dom';
import {withStyles} from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import TimerIcon from '@material-ui/icons/Timer';
import PeopleIcon from '@material-ui/icons/People';
import PublicIcon from '@material-ui/icons/Public';
import SettingsIcon from '@material-ui/icons/Settings';
import DnsRoundedIcon from '@material-ui/icons/DnsRounded';
import PhonelinkSetupIcon from '@material-ui/icons/PhonelinkSetup';
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';
import PermMediaOutlinedIcon from '@material-ui/icons/PhotoSizeSelectActual';
//import SettingsInputComponentIcon from '@material-ui/icons/SettingsInputComponent';
import EmployeeReg from '../components/officeMngHrm/EmployeeReg'
import Attendance from '../components/officeMngHrm/Attendance'

export const categories = [
  {
    id: 'Office ERP',
    isHeader: 1,
    icon: <HomeIcon />,
  },
  { 
    id: 'Office MNG/HRM',
    children: [
      {id: 'Company Structure', url: '/companystr', 
      component: <img src={process.env.PUBLIC_URL + "/new-picture.png"} 
      alt="Logo" width="1000px"  />, icon: <PeopleIcon />},
      {id: 'Dept and Desig', url: '/deptanddesig',component: <img src={process.env.PUBLIC_URL + "./Business-Hierarchy.jpg"} 
      alt="Logo" width="1000px"  /> , icon: <DnsRoundedIcon />},
      {id: 'Employee', url: '/employee', component: <EmployeeReg /> , icon: <PermMediaOutlinedIcon />},
      {id: 'Attendence', url: '/attendance', component: <Attendance /> , icon: <PublicIcon />},
      {id: 'Training', url: '/training', component: <img src={process.env.PUBLIC_URL + "/training.jpg"} 
      alt="Logo" width="1000px"  /> , icon: <SettingsEthernetIcon />}
      
    ],
  },
  {
    id: 'Accounts',
    children: [
      {id: 'Capital Account', url: '/capitalaccount', component: <h1>This a Capital Account
        section. This page is undercontruction ..........
      </h1> ,  icon: <SettingsIcon />},
      {id: 'Share', url: '/share', component: <h1>This a Share
      section. This page is undercontruction ..........
    </h1> ,   icon: <TimerIcon />},
      {id: 'Equity', url: '/equity', icon: <PhonelinkSetupIcon />},
      {id: 'Fixed Assets', url: '/fixedassets', icon: <PhonelinkSetupIcon />},
      {id: 'Client', url: '/client', icon: <PhonelinkSetupIcon />},
      {id: 'Expense', url: '/expense', icon: <PhonelinkSetupIcon />},
      {id: 'Bank', url: '/bank', icon: <PhonelinkSetupIcon />},
      {id: 'Pay Slip', url: '/paysleep', icon: <PhonelinkSetupIcon />},
      {id: 'Account Summary', url: '/acc-smry', icon: <PhonelinkSetupIcon />},
      {id: 'Reports', url: '/reports', icon: <PhonelinkSetupIcon />},
      
    ],
  },
  {
    id: 'Point of Sales',
    children: [
      {id: 'Catagory', url: '/catagory', icon: <SettingsIcon />},
      {id: 'Products', url: '/prducts', icon: <TimerIcon />},
      {id: 'Barcode', url: '/barcode', icon: <PhonelinkSetupIcon />},
      {id: 'Purchage', url: '/purchage', icon: <PhonelinkSetupIcon />},
      {id: 'Warehouse', url: '/warhouse', icon: <PhonelinkSetupIcon />},
      {id: 'Customers', url: '/customers', icon: <PhonelinkSetupIcon />},
      {id: 'Pont of Sales', url: '/pointofsales', icon: <PhonelinkSetupIcon />},
      {id: 'Return', url: '/Return', icon: <PhonelinkSetupIcon />},
      
      
    ],
  },
  {
    id: 'Reports',
    children: [
      {id: 'Customised Report', url: '/customisereport', icon: <SettingsIcon />},
      {id: 'Select', url: '/performance', icon: <TimerIcon />},
      {id: 'List', url: '/test', icon: <PhonelinkSetupIcon />},
    ],
  },

  {
    id: 'User',
    children: [
      {id: 'User List', url: '/userlist', icon: <SettingsIcon />},
      {id: 'User Access', url: '/useraccess', icon: <TimerIcon />},
      {id: 'User Detail ', url: '/test', icon: <PhonelinkSetupIcon />},
    ],
  },

  {
    id: 'Settings',
    children: [
      {id: 'User Settings', url: '/userlist', icon: <SettingsIcon />},
      {id: 'User Define', url: '/useraccess', icon: <TimerIcon />},
      {id: 'List', url: '/test', icon: <PhonelinkSetupIcon />},
    ],
  },
];

export const more = [
  {id: 'Home', url: '/home', icon: <HomeIcon />},
  {id: 'Game', url: '/game', icon: <TimerIcon />},
  {id: 'Gate', url: '/gate', icon: <PhonelinkSetupIcon />},
];

const styles = (theme) => ({
  categoryHeader: {
    paddingTop: 16,
    paddingBottom: 16,
  },
  categoryHeaderPrimary: {
    color: theme.palette.common.white,
  },
  item: {
    paddingTop: 4,
    paddingBottom: 4,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  itemCategory: {
    backgroundColor: '#232f3e',
    boxShadow: '0 -1px 0 #404854 inset',
    paddingTop: 16,
    paddingBottom: 16,
  },
  firebase: {
    fontSize: 24,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.common.white,
  },
  itemActionable: {
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
    },
  },
  itemActiveItem: {
    color: '#4fc3f7',
  },
  itemPrimary: {
    color: 'inherit',
    fontSize: theme.typography.fontSize,
    '&$textDense': {
      fontSize: theme.typography.fontSize,
    },
  },
  textDense: {},
  divider: {
    marginTop: theme.spacing.unit * 2,
  },
});

function Navigator(props) {
  const {classes, location, staticContext, ...other} = props;
  const selector = location.pathname.split('/');
  const selecter = selector.map((_, last) => selector.filter((_, index) => index <= last).join('/')).filter((i) => i);

  return (
    <Drawer variant='permanent' {...other}>
      <List disablePadding>
        <ListItem className={Make(classes.firebase, classes.item, classes.itemCategory)}>Semicolon ERP  </ListItem>

        {categories.map(({id, isHeader, children}) =>
          isHeader ? (
            <React.Fragment key={id}>
              <ListItem className={Make(classes.item, classes.itemCategory)}>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText classes={{primary: classes.itemPrimary}}>{id}</ListItemText>
              </ListItem>
            </React.Fragment>
          ) : (
            <React.Fragment key={id}>
              <ListItem className={classes.categoryHeader}>
                <ListItemText classes={{primary: classes.categoryHeaderPrimary}}>{id}</ListItemText>
              </ListItem>
              {children
                .filter((item) => item.url)
                .map(({id: childId, icon, url}) => {
                  const active = selecter.includes(url);
                  return (
                    <ListItem
                      button
                      dense
                      key={childId}
                      className={Make(classes.item, classes.itemActionable, active && classes.itemActiveItem)}
                      component={Link}
                      to={url}>
                      <ListItemIcon>{icon}</ListItemIcon>
                      <ListItemText
                        classes={{
                          primary: classes.itemPrimary,
                          textDense: classes.textDense,
                        }}>
                        {childId}
                      </ListItemText>
                    </ListItem>
                  );
                })}
              <Divider className={classes.divider} />
            </React.Fragment>
          ),
        )}
      </List>
    </Drawer>
  );
}

Navigator.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Navigator));
