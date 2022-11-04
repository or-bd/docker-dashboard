import React, {useCallback, useContext} from 'react';
import AppContext from '../../store/context';
import Container from '../Container';
import {ListStyle, ListTitle} from './style';

interface IProps {
  name: string;
  updatedTime: number;
}

const List = ({ name, updatedTime }: IProps): JSX.Element => {
  const { containers } = useContext(AppContext);

  const items = useCallback(() => {
    return containers.filter((container) => container.names.includes(name));
  }, [updatedTime]);

  return (
    <>
      <ListTitle>{name} suffix</ListTitle>
      <ListStyle>
        {items().map((container) => <Container key={container['container id']} {...container} />)}
      </ListStyle>
    </>
  );
};

export default List;
