import { SquaresPattern } from '#assets/patterns/SquaresPattern';
import { adStyles } from '#theme/styles/ad.styles';

export const AdPatternModule = () => (
  <>
    <SquaresPattern
      sx={adStyles.rightPattern}
    />
    <SquaresPattern
      sx={adStyles.leftPattern}
    />
  </>
);
