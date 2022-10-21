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
        </LogStyle>
      </Modal>
      <Backdrop onClick={(): void => setLogs(undefined)}/>
    </>
  );
};

export default Logs;
