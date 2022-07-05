import "normalize.css";

import ScheduleWrapper from "./components/Schedule/ScheduleWrapper";
import ProviderManager from "./ProviderManager";

const App: React.FC = () => {
  return (
    <ProviderManager>
      <ScheduleWrapper></ScheduleWrapper>
    </ProviderManager>
  );
};
export default App;
