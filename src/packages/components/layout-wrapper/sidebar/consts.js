import ViewDashboardVariantIcon from 'mdi-react/ViewDashboardVariantIcon';
import LogoutVariantIcon from 'mdi-react/LogoutVariantIcon';
import ClipboardCheckMultipleOutlineIcon from 'mdi-react/ClipboardCheckMultipleOutlineIcon';
import ChartAreasplineIcon from 'mdi-react/ChartAreasplineIcon';
import AccountIcon from 'mdi-react/AccountIcon';
import TextBoxMultipleIcon from 'mdi-react/TextBoxMultipleIcon';

import React from 'react';

import { PathNames } from '../../../../const';
import { appActions } from '../../../../app/store';

export const sidebarItems = [
  {
    name: 'dashboard',
    url: PathNames.root,
    title: 'Dashboard',
    icon: <ViewDashboardVariantIcon />,
  },
  {
    name: 'tasks',
    url: PathNames.tasks,
    title: 'Tasks',
    icon: <ClipboardCheckMultipleOutlineIcon />,
  },
  {
    name: 'results',
    url: PathNames.results,
    title: 'Results',
    icon: <ChartAreasplineIcon />,
  },
  {
    name: 'profile',
    url: PathNames.profile,
    title: 'Profile',
    icon: <AccountIcon />,
  },
  {
    name: 'docs',
    url: PathNames.docs,
    title: 'Integration API',
    icon: <TextBoxMultipleIcon />,
  },
  {
    name: 'logout',
    url: PathNames.login,
    title: 'Log out',
    action: appActions.logout,
    icon: <LogoutVariantIcon />,
  },
];
