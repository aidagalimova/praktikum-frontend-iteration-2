import React from 'react';
import { Layout } from 'antd';
import SiderContent from '../../components/sider';
import './index.scss';
import HeaderContent from '../../components/header';

const { Header, Footer, Sider, Content } = Layout;

function OrdersPage() {
    return (
        <Layout className="page">
            <Sider className="sider"> <SiderContent /> </Sider>
            <Layout>
                <Header className="header"><HeaderContent /></Header>
                <Content>Content</Content>
                <Footer>Footer</Footer>
            </Layout>
        </Layout>
    )
}

export default OrdersPage;