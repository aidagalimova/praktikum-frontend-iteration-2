import React from 'react';
import { Layout } from 'antd';
import SiderContent from '../../components/sider';
import './index.scss';

const { Header, Footer, Sider, Content } = Layout;

function OrdersPage() {
    return (
        <Layout className="page">
            <Sider className="sider"> <SiderContent /> </Sider>
            <Layout>
                <Header>Header</Header>
                <Content>Content</Content>
                <Footer>Footer</Footer>
            </Layout>
        </Layout>
    )
}

export default OrdersPage;