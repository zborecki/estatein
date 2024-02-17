import { PropsWithChildren } from 'react';

import { Information } from '#types/atoms.types';
import { BaseProps } from '#types/props/common.types';

export interface SectionHeaderComponentProps
  extends BaseProps, SectionHeaderContentModuleProps {
  disableMarginBottom?: boolean;
  disablePattern?: boolean;
}

export type SectionHeaderContentModuleProps = Information & PropsWithChildren;
