import React, { ReactNode } from "react";
import Header from "../header/Header";
import styles from './Layout.module.css';

type Props = {
  children: ReactNode;
  title: string;
};

const Layout: React.FC<Props> = (props) => (
  <div>
    <Header title={props.title}/>
    <div className={styles.container}>{props.children}</div>
  </div>
);

export default Layout;
