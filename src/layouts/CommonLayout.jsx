import React from "react";
import { Layout } from "antd";

const { Header, Content, Footer } = Layout;

export default function CommonLayout(props) {
  return (
    <Layout className="layout">
      <Header></Header>
      <Content style={{ padding: "50px" }}>{props.children}</Content>
      <Footer style={{ textAlign: "center" }}>Ant Design</Footer>
    </Layout>
  );
}
