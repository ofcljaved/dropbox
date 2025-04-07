import { createContext, useContext, useState } from "react";

type LoadingContextState = {
  loading: boolean;
  setLoading: (value: boolean) => void;
};

const initialState: LoadingContextState = {
  loading: true,
  setLoading: () => null,
};

const LoadingContext = createContext<LoadingContextState>(initialState);

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  const updateLoading = (value: boolean) => {
    setLoading(value);
  };

  return (
    <LoadingContext.Provider value={{ loading, setLoading: updateLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
}
