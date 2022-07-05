import React from "react";
import { UseQueryResult } from "react-query";

export interface AsyncWrapperProps {
  children: Array<React.ReactNode> | React.ReactNode;
  query: UseQueryResult<unknown, Error>;
}

export interface AsyncWrapperElementProps {
  children: React.ReactNode;
}

const componentFactory = (): React.FC<AsyncWrapperElementProps> =>
  function AsyncWrapperElement({ children }) {
    return <>{children}</>;
  };

const Data = componentFactory();
const Error = componentFactory();
const Loading = componentFactory();

const AsyncManager: React.FC<AsyncWrapperProps> = ({ children, query }) => {
  const parsedChildren = React.Children.toArray(
    children
  ) as Array<React.ReactElement>;

  const loading = parsedChildren.find(child => child.type === Loading);
  const data = parsedChildren.find(child => child.type === Data);
  const error = parsedChildren.find(child => child.type === Error);

  if (query.isError) return <>{error}</>;

  if (query.data) return <>{data}</>;

  return <>{loading}</>;
};

const AsyncWrapper = Object.assign(AsyncManager, { Data, Error, Loading });

export default AsyncWrapper;
