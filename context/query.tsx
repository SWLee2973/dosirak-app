import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type TProps = {
  children: React.ReactNode;
};

export function QueryProvider({ children }: TProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
