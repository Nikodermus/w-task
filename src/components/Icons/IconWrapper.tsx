import styled from "styled-components";

export interface IconWrapperProps extends React.SVGAttributes<SVGElement> {
  children: React.ReactNode | Array<React.ReactNode>;
  desc?: string;
  name: string;
}

const SVG = styled.svg`
  display: inline-block;
  width: var(--font-size-5xl);
`;

const IconWrapper: React.FC<IconWrapperProps> = ({
  children,
  desc,
  name,
  ...props
}) => {
  const descID = `desc-${name}`;
  const titleID = `title-${name}`;

  return (
    <SVG
      {...props}
      aria-labelledby={`${titleID}${desc ? `  ${descID}` : ""}`}
      role="img"
    >
      <title id={titleID}>{name}</title>
      {desc && <desc id={descID}>{desc}</desc>}
      {children}
    </SVG>
  );
};

export default IconWrapper;
