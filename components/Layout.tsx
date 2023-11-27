import React, { ReactNode } from "react";
import Header from "./Header";

type Props = {
  children: ReactNode;
  title: string;
};

const Layout: React.FC<Props> = (props) => (
  <div>
    <Header title={props.title}/>
    <div className="layout">{props.children}</div>
  </div>
);

export default Layout;
