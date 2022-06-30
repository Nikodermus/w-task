import BaseStyle from "./style/BaseStyle";

export interface ProviderManagerProps {
  children: React.ReactNode;
}

const ProviderManager: React.FC<ProviderManagerProps> = ({ children }) => {
  return (
    <>
      <BaseStyle></BaseStyle>

      {children}
    </>
  );
};

export default ProviderManager;
