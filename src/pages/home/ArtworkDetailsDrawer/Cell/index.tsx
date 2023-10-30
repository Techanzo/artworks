import { ReactNode } from 'react';

import { Skeleton, Stack } from '@mui/material';

import { Label, Value } from './styles';

export interface CellProps {
  label: string;
  value?: string | null;
  isLoading?: boolean;
  skeleton?: ReactNode;
  html?: string;
  direction?: 'row' | 'column';
}

const Cell = ({ label, value, isLoading, skeleton, html, direction = 'row' }: CellProps) => {
  return (
    <Stack direction={direction} alignItems={direction === 'row' ? 'center' : 'flex-start'} gap={2}>
      <Label>{label}</Label>
      {(() => {
        if (html) return <Value dangerouslySetInnerHTML={{ __html: html }} />;

        if (value) return <Value>{value}</Value>;

        if (isLoading) {
          if (skeleton) return skeleton;
          if (direction === 'column') {
            return (
              <Value>
                <Skeleton variant="text" width="100%" />
                <Skeleton variant="text" width="100%" />
                <Skeleton variant="text" width="100%" />
              </Value>
            );
          }
          return (
            <Value>
              <Skeleton variant="text" width="70%" />
            </Value>
          );
        }

        return <Value>Unknown</Value>;
      })()}
    </Stack>
  );
};

export default Cell;
