import React from "react";
import { Layout } from "antd";
import {
  CustomHeader,
  PictureAndDescription,
  Education,
  Experience,
  Courses,
  Skills,
  LangsAndResearch,
  Connections,
} from "./components";
import * as styles from "./styles.module.less";

const MainPage = () => {
  const { Header, Content, Footer } = Layout;

  return (
    <Layout>
      <Header className={styles.myHeader}>
        <CustomHeader />
      </Header>
      <Content className={styles.content}>
        <div className={styles.container}>
          <PictureAndDescription />
          <Experience />
          <Education />
          <Skills />
          <Courses />
          <LangsAndResearch />
        </div>
      </Content>
      <Footer>
        <Connections />
      </Footer>
    </Layout>
  );
};

export default MainPage;
