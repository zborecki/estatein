import { BaseProps, ChildrenProps } from '#types/props/common.types';

export interface UnderlinedLinkComponentProps
  extends BaseProps, ChildrenProps {
  to: string;
}
