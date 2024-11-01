import { ReactNode, createContext, useMemo } from 'react';
import { WORKS_DATA, WorksDataType } from '../utils/worksData';

export const WorksDataContext = createContext<WorksDataType[]>([]);

export const WorksDataProvider = (props: { children: ReactNode }) => {
  const memoizedWorksData = useMemo(() => WORKS_DATA, []);

  return <WorksDataContext.Provider value={memoizedWorksData}>{props.children}</WorksDataContext.Provider>;
};
