import React from 'react';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import RestoreRoundedIcon from '@material-ui/icons/RestoreRounded';
import EvStationRoundedIcon from '@material-ui/icons/EvStation';
import BugReportRoundedIcon from '@material-ui/icons/BugReportRounded';
import ContactSupportRoundedIcon from '@material-ui/icons/ContactSupportRounded';
import EmojiObjectsRoundedIcon from '@material-ui/icons/EmojiObjectsRounded';
import PowerSettingsNewRoundedIcon from '@material-ui/icons/PowerSettingsNewRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import Card from './Card'

export const mainListItems = (
    <div>
        <ListItem button>
            {/* <ListItemIcon>
                <AccountCircleRoundedIcon />
            </ListItemIcon> */}
            {/* <ListItemText primary="My Profile" /> */}
            <Card />
        </ListItem>
        {/* <Divider /> */}
        <ListItem button>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <RestoreRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="All Bookings" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <EvStationRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="My Station" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <BugReportRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Raise Issue" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <ContactSupportRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Contact Admin" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <EmojiObjectsRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Tips To EVCS" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <PowerSettingsNewRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
        </ListItem>
    </div>
);

/* export const secondaryListItems = (
    <div>
        <ListSubheader inset>Saved reports</ListSubheader>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Current month" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Last quarter" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Year-end sale" />
        </ListItem>
    </div>
); */