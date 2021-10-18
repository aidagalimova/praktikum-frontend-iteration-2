import React from 'react';
import { Layout } from 'antd';
import SiderContent from '../../components/sider';
import './index.scss';
import HeaderContent from '../../components/header';
import FooterContent from '../../components/footer';
import OrdersList from '../../components/orders-list';

const { Header, Footer, Sider, Content } = Layout;

function OrdersPage() {
    return (
        <Layout className="page">
            <Sider className="sider"> <SiderContent /> </Sider>
            <Layout>
                <Header className="header"><HeaderContent /></Header>
                <Content className="content">
                    <h1 className="title-text helvetica">  Заказы </h1>
                    <OrdersList />
                </Content>
                <Footer className="footer"><FooterContent /></Footer>
            </Layout>
        </Layout>
    )
}

export default OrdersPage;