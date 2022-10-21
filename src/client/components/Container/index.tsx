import React from 'react';
import {ContainerStyle} from './style';
// import AppContext from '../../store/context';
import {IContainer} from '../../types';

const Container = (props: IContainer): JSX.Element => {
  // const { containers } = useContext(AppContext);

  return (
      <ContainerStyle>
        <div>{props.names}</div>
        <div>{props.container}</div>
        <div>{props.ports}</div>
      </ContainerStyle>
  );
};

export default Container;
