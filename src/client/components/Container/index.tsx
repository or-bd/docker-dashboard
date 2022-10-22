import React, {useCallback, useState} from 'react';
import Logs from '../Logs';
import {IContainer, IContainerLog, IContainerPortInfo} from '../../utils/types';
import {Actions, ContainerStyle, LogsButton, Status} from './style';
import InfoRow from './InfoRow';

const parsePort = (port: IContainer['ports']): IContainerPortInfo => {
  const portInfo: IContainerPortInfo = { exposed: '', internal: '' };
  const isExposed = port.includes('0.0.0.0');
  const [mainPort] = port.split(',');

  if(isExposed) {
    const [exposed, internal] = mainPort.split('->');
    portInfo.exposed = exposed.split(':')[1];
    portInfo.internal = internal.split('/')[0];
  } else {
    portInfo.internal = mainPort.split('/')[0];
  }
  return portInfo;
};

const Container = (props: IContainer): JSX.Element => {
  const [logs, setLogs] = useState<IContainerLog>();

  const getPort = useCallback(() => parsePort(props.ports), []);

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
        <InfoRow name="Id" value={props['container id']} />
        <InfoRow name="Name" value={props.names} />
        <InfoRow name="Image" value={props.image} />
        <InfoRow name="Status" value={props.status} />
        <InfoRow name="Created" value={props.created} />
        <InfoRow name="Port" value={JSON.stringify(getPort())} />
      </ContainerStyle>
      {logs ? <Logs {...logs} setLogs={setLogs} /> : null}
    </>
  );
};

export default Container;
