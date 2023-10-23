import { Provider } from "react-redux";
import RootNavigation from "./navigation";
import { store } from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
}
