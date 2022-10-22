import React from 'react';
import {Backdrop, LogHeader, LogStyle, Modal} from './style';
import {IContainerLog} from '../../utils/types';

interface IProps extends IContainerLog {
  setLogs: (log: undefined) => void;
}

const Logs = ({containerName, rows, setLogs}: IProps): JSX.Element => {
  return (
    <>
      <Modal>
        <LogHeader>{containerName}</LogHeader>
        <LogStyle>
          {rows.map((logRow, i) => <span key={i}>{logRow}</span>)}
          {rows.length === 1 && !rows[0] ? <span>Logs not found :/</span> : null}
        </LogStyle>
      </Modal>
      <Backdrop onClick={(): void => setLogs(undefined)}/>
    </>
  );
};

export default Logs;
