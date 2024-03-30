import App from "./App";
import { store } from "./store";
import { Provider } from "react-redux";
export default function Main() {
  return (
    <Provider store={store}>
      <App></App>
    </Provider>
  );
}
