import React, {useState, useEffect} from 'react';
import {ViewStyle} from './style';
import AppContext from '../../store/context';
import {IContainer} from '../../types';

const View = (): JSX.Element => {
  const [containers, setContainers] = useState<IContainer[]>([]);

  useEffect(() => {
    fetch('/containers').then((response) => {
      response.json().then(setContainers);
    }).catch(console.log);
  }, []);

  return (
    <AppContext.Provider value={{ containers} }>
      <ViewStyle>Hel</ViewStyle>;
    </AppContext.Provider>
  );
};

export default View;
