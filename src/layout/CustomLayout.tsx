import React from "react";
import Layout from "antd/lib/layout";
import { PageHeader } from "@ant-design/pro-layout";
import { Link, useNavigate } from "react-router-dom";

const { Header, Content, Footer } = Layout;

const CustomHeader = () => {
  const navigate = useNavigate();
  return (
    <PageHeader
      className="site-page-header h-full"
      title={
        <Link to="/" className="text-2xl">
          Taskly
        </Link>
      }
      subTitle="Free, Open-Sourced, Offline, Self-Hosted Task Management Solution"
      onBack={() => navigate(-1)}
      // extra={
      //   <>
      //     <Link to="/page2">Page 2</Link>
      //     <Link to="/page3">Page 3</Link>
      //   </>
      // }
    />
  );
};

const CustomFooter = () => (
  <div style={{ textAlign: "center" }}>
    <div>
      {/* @ts-ignore */}
      {__HEAD_COMMIT_HASH__ ? `Trace: ${__HEAD_COMMIT_HASH__}` : ""}
    </div>
    <div>developed by Ramisa</div>
    <div>&copy; {new Date().getFullYear()} - Industrial Training Web</div>
  </div>
);

interface ILayoutProps {
  children: any;
}

// eslint-disable-next-line react/prefer-stateless-function
class CustomLayout extends React.Component<ILayoutProps> {
  render() {
    const { children } = this.props;

    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Header style={{ backgroundColor: "white" }}>
          <CustomHeader />
        </Header>
        <Content>{children}</Content>
        <Footer style={{ backgroundColor: "white" }}>
          <CustomFooter />
        </Footer>
      </Layout>
    );
  }
}

export { CustomLayout };
