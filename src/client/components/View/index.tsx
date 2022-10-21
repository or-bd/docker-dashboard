import React, {useEffect, useState} from 'react';
import AppContext from '../../store/context';
import {IContainer} from '../../utils/types';
import List from '../List';
import {APP, SERVICE} from '../../utils/const';
import {ViewStyle} from './style';

const View = (): JSX.Element => {
  const [containers, setContainers] = useState<IContainer[]>([]);

  useEffect(() => {
    fetch('/containers').then((response) => {
      response.json().then(setContainers);
    }).catch(console.log);
  }, []);

  return (
    <ViewStyle>
      <AppContext.Provider value={{containers}}>
        <List name={SERVICE}/>
        <List name={APP}/>
      </AppContext.Provider>
    </ViewStyle>
  );
};

export default View;
