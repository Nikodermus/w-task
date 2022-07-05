import { QueryClient, QueryClientProvider } from "react-query";

export interface ReactQueryProps {
  children: React.ReactNode;
}

export const queryClient = new QueryClient();

const ReactQuery: React.FC<ReactQueryProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}> {children}</QueryClientProvider>
  );
};

export default ReactQuery;
