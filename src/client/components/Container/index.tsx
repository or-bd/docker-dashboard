import React, {useState} from 'react';
import {Actions, ContainerStyle, LogsButton, Status} from './style';
import {IContainer, IContainerLog} from '../../utils/types';
import Logs from '../Logs';

const Container = (props: IContainer): JSX.Element => {
  const [logs, setLogs] = useState<IContainerLog>();

  const getLogs = (): void => {
    fetch(`/logs/${props['container id']}`).then((response) => {
      response.json().then((results) => {
        const rows = results.raw.split('\n');
        setLogs({ containerName: props.names, rows});
      });
    }).catch(console.log);
  };

  return (
    <>
      <ContainerStyle>
        <Actions>
          <LogsButton onClick={getLogs}>Logs</LogsButton>
          <Status isUp={props.status.includes('Up')}/>
        </Actions>
        <div>Id: {props['container id']}</div>
        <div>Name: {props.names}</div>
        <div>Container: {props.container}</div>
        <div>Port: {props.ports}</div>
        <div>Command: {props.command}</div>
        <div>Image: {props.image}</div>
        <div>Created: {props.created}</div>
        <div>Status: {props.status}</div>
      </ContainerStyle>
      {logs ? <Logs {...logs} setLogs={setLogs} /> : null}
    </>
  );
};

export default Container;
