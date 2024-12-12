import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";

// ** condition - redirectPath - children

interface IProps {
  isAllowed: boolean;
  redirectPath: string;
  children: ReactNode;
  data?: unknown;
}

const ProtectedRoute = ({
  isAllowed,
  redirectPath,
  children,
  data,
}: IProps) => {
  // TODO replace & state
  // ** replace => will replace the current entry in the history stack

  if (!isAllowed) return <Navigate to={redirectPath} replace state={data} />;

  return children;
};

export default ProtectedRoute;
