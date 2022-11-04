import React from 'react';
import {Backdrop, CloseButton, LogHeader, LogStyle, Modal} from './style';
import {IContainerLog} from '../../utils/types';

interface IProps extends IContainerLog {
  setLogs: (log: undefined) => void;
}

const Logs = ({containerName, rows, setLogs}: IProps): JSX.Element => {

  const closeModal = (): void => {
    setLogs(undefined);
  };

  return (
    <>
      <Modal>
        <LogHeader>{containerName}</LogHeader>
        <CloseButton onClick={closeModal} />
        <LogStyle>
          {rows.map((logRow, i) => <div key={i}>{logRow}</div>)}
          {rows.length === 1 && !rows[0] ? <div>Logs not found :/</div> : null}
        </LogStyle>
      </Modal>
      <Backdrop />
    </>
  );
};

export default Logs;
