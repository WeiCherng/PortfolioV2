// components/LineBreak.tsx
import React, { CSSProperties, FC } from 'react';

interface LineBreakProps {
  color: string;
}

const LineBreak: FC<LineBreakProps> = ({ color }) => {
  const lineBreakStyle: CSSProperties = {
    width: '100%',
    borderBottom: `4px solid ${color}`,
    margin: '10px 0',
  };

  return <div style={lineBreakStyle}></div>;
};

export default LineBreak;
