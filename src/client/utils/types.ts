export interface IContainer {
  'container id': string;
  image: string;
  command: string;
  created: string;
  status: string;
  ports: string;
  names: string;
}

export interface IContainerPortInfo {
  internal: string;
  exposed: string;
}

export interface IContainerLog {
  containerName: IContainer['names'];
  rows: string[];
}
