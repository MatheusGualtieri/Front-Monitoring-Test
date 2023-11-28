import { AuthProvider } from "./providers/AuthProvider";
import { TransactionsProvider } from "./providers/TransactionsProvider";
import { UserProvider } from "./providers/UserProvider";
import { RoutesMain } from "./routes";
import GlobalStyle from "./styles/GlobalStyle";
import Reset from "./styles/Reset";

export const App = () => {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <AuthProvider>
        <UserProvider>
          <TransactionsProvider>
            <RoutesMain />
          </TransactionsProvider>
        </UserProvider>
      </AuthProvider>
    </>
  );
};

export default App;
