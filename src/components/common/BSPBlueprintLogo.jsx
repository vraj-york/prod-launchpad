import { Box } from '@mui/material';
import yorkIeLaunchPadLogo from '../../assets/images/york-ie-launch-pad-logo.svg';
import yorkIeLaunchPadLogoLight from '../../assets/images/york-ie-launch-pad-logo-light.svg';

/**
 * York IE Launch Pad logo. Use variant="light" for dark backgrounds (e.g. email template logo container).
 */
export function BSPBlueprintLogo({ width, height, variant = 'default' }) {
  const logoSrc = variant === 'light' ? yorkIeLaunchPadLogoLight : yorkIeLaunchPadLogo;
  return (
    <Box
      component="img"
      src={logoSrc}
      alt="York IE Launch Pad"
      sx={{
        width: width ?? '180px',
        height: height ?? '32px',
        display: 'block',
      }}
    />
  );
}
