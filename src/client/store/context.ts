import { createContext } from 'react';
import { IContainer } from '../types';

interface IContext {
  containers: IContainer[]
}

const initialContext: IContext = {
  containers: [],
};

const AppContext = createContext<IContext>(initialContext);

export default AppContext;
