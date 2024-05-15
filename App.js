import { Provider } from "react-redux";
import RootNavigation from "./navigation";
import { store } from "./store";
import { ToastProvider } from "react-native-toast-notifications";

export default function App() {
  return (
    <Provider store={store}>
      <ToastProvider>
        <RootNavigation />
      </ToastProvider>
    </Provider>
  );
}
