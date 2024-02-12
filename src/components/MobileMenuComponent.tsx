import { Drawer, IconButton } from '@mui/material';
import { useCallback, useState } from 'react';

import { CloseIcon } from '#/assets/icons/CloseIcon';
import { mobileMenuStyles } from '#/theme/styles/mobileMenu.styles';
import { HamburgerComponent } from '#components/HamburgerComponent';
import { MobileMenuListModule } from '#components/modules/MobileMenuListModule';
import { isIOS } from '#utils/getPlatform';

export const MobileMenuComponent = () => {
  const [isActivated, setIsActivated] = useState(false);

  const handleDrawer = useCallback(() => {
    setIsActivated((previous) => !previous);
  }, []);

  return (
    <>
      <HamburgerComponent onClick={handleDrawer} />
      <Drawer
        anchor="right"
        open={isActivated}
        PaperProps={{
          className: isIOS ? 'ios-notch' : undefined,
          sx: mobileMenuStyles.drawer
        }}
        onClose={handleDrawer}
      >
        <IconButton sx={mobileMenuStyles.closeButton} onClick={handleDrawer}>
          <CloseIcon color="error" fontSize="large" />
        </IconButton>
        <MobileMenuListModule />
      </Drawer>
    </>
  );
};
