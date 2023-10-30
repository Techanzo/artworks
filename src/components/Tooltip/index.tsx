import { forwardRef, Ref } from 'react';

import { Tooltip as MuiTooltip, TooltipProps as MuiTooltipProps } from '@mui/material';

export interface TooltipProps extends Omit<MuiTooltipProps, 'arrow' | 'disableInteractive' | 'placement'> {
  /** @default true */
  arrow?: MuiTooltipProps['arrow'];
  /** @default true */
  disableInteractive?: MuiTooltipProps['disableInteractive'];
  /** @default 'top' */
  placement?: MuiTooltipProps['placement'];
}

const Tooltip = (
  { arrow = true, disableInteractive = true, placement = 'top', ...props }: TooltipProps,
  ref: Ref<HTMLDivElement>
) => {
  return (
    <MuiTooltip
      ref={ref}
      arrow={arrow}
      {...props}
      disableInteractive={disableInteractive}
      placement={placement}
    >
      {props.children}
    </MuiTooltip>
  );
};

export default forwardRef(Tooltip);
