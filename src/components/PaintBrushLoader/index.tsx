import { ReactComponent as PaintBrush } from '../../assets/paint-brush.svg';
import { Root } from './styles';

export interface PaintBrushLoaderProps {
  size?: number;
}

const PaintBrushLoader = ({ size = 50 }: PaintBrushLoaderProps) => {
  return (
    <Root>
      <PaintBrush height={size} width={size} />
    </Root>
  );
};

export default PaintBrushLoader;
