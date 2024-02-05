import {
  List, ListItem, ListItemButton, ListItemText
} from '@mui/material';
import { Link } from 'react-router-dom';

import { mobileMenuStyles } from '#/theme/styles/mobileMenu.styles';
import { navigation } from '#constants/navigation.constants';
import { generateKey } from '#utils/generateKey';

export const MobileMenuListModule = () => (
  <List>
    {
      navigation.map(
        ({ label, to }) => (
          <ListItem key={generateKey()} disablePadding>
            <ListItemButton
              component={Link}
              sx={mobileMenuStyles.button}
              to={to}
            >
              <ListItemText
                primary={label}
                primaryTypographyProps={{ variant: 'h4' }}
                sx={mobileMenuStyles.label}
              />
            </ListItemButton>
          </ListItem>
        )
      )
    }
  </List>
);
