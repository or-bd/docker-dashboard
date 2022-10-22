import React from 'react';
import {InfoRowStyle} from './style';

const InfoRow = ({ name, value }: { name: string; value: string}): JSX.Element => {
  return (
    <InfoRowStyle>
      <span>{name}: </span>
      <span>{value}</span>
    </InfoRowStyle>
  );
};

export default InfoRow;
