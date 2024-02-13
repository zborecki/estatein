import { FC } from 'react';

import { ButtonLinkComponent } from '#components/ButtonLinkComponent';
import { ButtonLinksComponentProps } from '#types/props/buttonLink.types';
import { generateKey } from '#utils/generateKey';

export const ButtonLinksComponent: FC<ButtonLinksComponentProps> = ({
  buttons
}) => buttons.map((props) => <ButtonLinkComponent {...props} key={generateKey()} />);
