import { Stack, useMediaQuery } from '@mui/material';

import { ReactComponent as Logo } from '../../../../assets/logo.svg';
import { ReactComponent as LogoSmall } from '../../../../assets/logo-small.svg';
import { forMobileOnly, forTabletOnly } from '../../../../utils/media-queries';
import PlaceOfOrigin from './PlaceOfOrigin';
import SearchInput from './SearchInput';
import { headerClasses, NamePlate, Root, Spacer, WoodenBar } from './styles';

const Header = () => {
  const isMobile = useMediaQuery(forMobileOnly);
  const isTablet = useMediaQuery(forTabletOnly);

  if (isMobile) {
    return (
      <Root>
        <Spacer />
        <WoodenBar>
          <NamePlate>
            <Stack direction="row" alignItems="center" gap={2}>
              <LogoSmall />
              <Stack gap={2} className={headerClasses.mobileControls}>
                <SearchInput />
                <PlaceOfOrigin />
              </Stack>
            </Stack>
          </NamePlate>
        </WoodenBar>
      </Root>
    );
  }

  return (
    <Root>
      <Spacer />
      <WoodenBar>
        <NamePlate>{isTablet ? <LogoSmall /> : <Logo />}</NamePlate>
        <div className={headerClasses.placeholder} />
        <div className={headerClasses.placeholder} />
        <SearchInput className={headerClasses.searchBox} />
        <div className={headerClasses.placeholder2} />
        <PlaceOfOrigin className={headerClasses.placeOfOrigin} />
      </WoodenBar>
    </Root>
  );
};

export default Header;
