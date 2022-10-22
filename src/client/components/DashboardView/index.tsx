import React, {useEffect, useState} from 'react';
import AppContext from '../../store/context';
import {IContainer} from '../../utils/types';
import List from '../List';
import {APP, AUTH_TOKEN, SERVICE} from '../../utils/const';
import {ViewStyle} from './style';

const View = (): JSX.Element => {
  const [containers, setContainers] = useState<IContainer[]>([]);

  useEffect(() => {
    fetch('/containers', { headers: { 'token': AUTH_TOKEN() } }).then((response) => {
      if(!response.ok) return console.log(response.statusText);
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
