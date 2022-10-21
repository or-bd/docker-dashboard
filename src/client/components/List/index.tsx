import React, {useCallback, useContext} from 'react';
import AppContext from '../../store/context';
import Container from '../Container';
import { ListStyle } from './style';

interface IProps {
  name: string;
}

const List = ({ name }: IProps): JSX.Element => {
  const { containers } = useContext(AppContext);

  const items = useCallback(() => {
    return containers.filter((container) => container.names.includes(name));
  }, [containers.length, name]);

  return (
    <>
      <h3>{name}</h3>
      <ListStyle>
        {items().map((container) => <Container key={container.names} {...container} />)}
      </ListStyle>
    </>
  );
};

export default List;
