import React, {useEffect, useState} from 'react';
import AppContext from '../../store/context';
import {IContainer} from '../../utils/types';
import List from '../List';
import {APP, AUTH_TOKEN, SERVICE} from '../../utils/const';
import {ViewStyle} from './style';

const getContainers = (): Promise<IContainer[]> => new Promise((resolve) => {
  fetch('/containers', { headers: { 'token': AUTH_TOKEN() } }).then((response) => {
    if(!response.ok) return console.log(response.statusText);
    response.json().then(resolve);
  }).catch(console.log);
});

const View = (): JSX.Element => {
  const [updatedTime, setUpdatedTime] = useState<number>(0);
  const [containers, setContainers] = useState<IContainer[]>([]);

  const watchContainers = async (): Promise<void> => {
    const updatedContainers = await getContainers();
    if(updatedContainers && updatedContainers.length) {
      setContainers(updatedContainers);
      setUpdatedTime(new Date().getTime());
    }
  };

  useEffect(() => {
    if(updatedTime === 0) {
      watchContainers().catch(console.log);
    }
    const timeoutRef = setTimeout(watchContainers, 4000);
    return () => clearTimeout(timeoutRef);
  }, [updatedTime]);

  return (
    <ViewStyle>
      <h3>Last update: {new Date(updatedTime).toLocaleString()}</h3>
      <AppContext.Provider value={{containers}}>
        <List name={SERVICE}/>
        <List name={APP}/>
      </AppContext.Provider>
    </ViewStyle>
  );
};

export default View;
