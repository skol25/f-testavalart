// src/components/DataProvider.tsx
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  ReactNode,
} from "react";
import { useDispatch } from "react-redux";
import { getCommonAndDispatch } from "../../services/common/commonService";

interface DataProviderProps {
  children: ReactNode;
}

interface DataService {
  fetchData: () => Promise<void>;
}

const DataContext = createContext<DataService | null>(null);

export const useData = (): DataService => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData debe ser utilizado dentro de un DataProvider");
  }
  return context;
};

const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        getCommonAndDispatch(dispatch);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Manejar el error según tus necesidades
      }
    };

    fetchData();
  }, [dispatch]);

  const dataService = useMemo<DataService>(
    () => ({
      fetchData: fetchData as DataService["fetchData"], // Agregamos una aserción de tipo aquí
    }),
    []
  );

  return (
    <DataContext.Provider value={dataService}>{children}</DataContext.Provider>
  );
};

export default DataProvider;
function fetchData(): Promise<void> {
  throw new Error("Function not implemented.");
}
