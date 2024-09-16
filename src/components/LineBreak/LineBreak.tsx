// components/LineBreak.tsx
import React, { CSSProperties, FC } from 'react';

interface LineBreakProps {
  color: string;
}

const LineBreak: FC<LineBreakProps> = ({ color }) => {
  const lineBreakStyle: CSSProperties = {
    width: '100%',
    borderBottom: `4px solid ${color}`,
  };

  return <div style={lineBreakStyle} className='my-5'></div>;
};

export default LineBreak;
