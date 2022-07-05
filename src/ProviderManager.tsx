import ReactQuery from "./providers/ReactQuery";
import BaseStyle from "./style/BaseStyle";

export interface ProviderManagerProps {
  children: React.ReactNode;
}

const ProviderManager: React.FC<ProviderManagerProps> = ({ children }) => {
  return (
    <>
      <BaseStyle></BaseStyle>

      <ReactQuery>{children}</ReactQuery>
    </>
  );
};

export default ProviderManager;
