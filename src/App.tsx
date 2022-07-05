import "normalize.css";

import Schedule from "./components/Schedule/Schedule";
import ProviderManager from "./ProviderManager";

const App: React.FC = () => {
  return (
    <ProviderManager>
      <Schedule></Schedule>
    </ProviderManager>
  );
};
export default App;
