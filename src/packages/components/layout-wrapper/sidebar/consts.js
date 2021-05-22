import ViewDashboardVariantIcon from 'mdi-react/ViewDashboardVariantIcon';
import LogoutVariantIcon from 'mdi-react/LogoutVariantIcon';
import ClipboardCheckMultipleOutlineIcon from 'mdi-react/ClipboardCheckMultipleOutlineIcon';
import ChartAreasplineIcon from 'mdi-react/ChartAreasplineIcon';
import AccountIcon from 'mdi-react/AccountIcon';

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
    name: 'test4',
    url: PathNames.root,
    title: 'test4',
  },
  {
    name: 'test5',
    url: PathNames.root,
    title: 'test5',
  },
  {
    name: 'test6',
    url: PathNames.root,
    title: 'test6',
  },
  {
    name: 'logout',
    url: PathNames.login,
    title: 'Log out',
    action: appActions.logout,
    icon: <LogoutVariantIcon />,
  },
];
