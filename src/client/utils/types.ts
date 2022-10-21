export interface IContainer {
  'container id': string;
  container: string;
  image: string;
  command: string;
  created: string;
  status: string;
  ports: string;
  names: string;
}

export interface IContainerLog {
  containerName: IContainer['names'];
  rows: string[];
}
