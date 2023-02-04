import React, {useState, useRef} from 'react';
import Logs from '../Logs';
import {IContainer, IContainerLog} from '../../utils/types';
import {Actions, ContainerStyle, LogsButton, Status} from './style';
import InfoRow from './InfoRow';
import {AUTH_TOKEN} from '../../utils/const';

// const parsePort = (port: IContainer['ports']): IContainerPortInfo => {
//   const portInfo: IContainerPortInfo = { exposed: '', internal: '' };
//   const isExposed = port.includes('0.0.0.0');
//   const [mainPort] = port.split(',');
//
//   if(isExposed) {
//     const [exposed, internal] = mainPort.split('->');
//     portInfo.exposed = exposed.split(':')[1];
//     portInfo.internal = internal.split('/')[0];
//   } else {
//     portInfo.internal = mainPort.split('/')[0];
//   }
//   return portInfo;
// };

const getLogs = (containerId: string): Promise<IContainerLog['rows']> => new Promise((resolve) => {
  fetch(`containers/logs/${containerId}`, { headers: { 'token': AUTH_TOKEN() } }).then((response) => {
    if(!response.ok) return console.log(response.statusText);
    response.json().then((data) => {
      const rows = data.raw.split('\n');
      resolve(rows);
    });
  }).catch(console.log);
});

const Container = (props: IContainer): JSX.Element => {
  const [logs, setLogs] = useState<IContainerLog>();
  const watchLogRef = useRef<NodeJS.Timer>();

  // const getPort = useCallback(() => parsePort(props.ports), []);

  const watchLogs = async (): Promise<void> => {
    const logRows = await getLogs(props['container id']);
    if(logRows && logRows.length) {
      setLogs({ containerName: props.names, rows: logRows });
    }
    watchLogRef.current = setTimeout(watchLogs, 2000);
  };

  const clearLogs = (): void => {
    setLogs(undefined);
    clearTimeout(watchLogRef.current);
  };

  return (
    <>
      <ContainerStyle>
        <Actions>
          <LogsButton onClick={watchLogs}>Logs</LogsButton>
          <Status isUp={props.status.includes('Up')}/>
        </Actions>
        <InfoRow name="Id" value={props['container id']} />
        <InfoRow name="Name" value={props.names} />
        <InfoRow name="Image" value={props.image} />
        <InfoRow name="Status" value={props.status} />
        <InfoRow name="Created" value={props.created} />
        <InfoRow name="Port" value={props.ports} />
      </ContainerStyle>
      {logs ? <Logs {...logs} setLogs={clearLogs} /> : null}
    </>
  );
};

export default Container;
