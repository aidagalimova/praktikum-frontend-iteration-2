import React from 'react';
import { Menu } from 'antd';
import { ReactComponent as Logo } from '../../assets/svg/logo.svg'
import { ReactComponent as Item1 } from '../../assets/svg/1.svg'
import { ReactComponent as Item2 } from '../../assets/svg/2.svg'
import { ReactComponent as Item3 } from '../../assets/svg/3.svg'
import { ReactComponent as Item4 } from '../../assets/svg/4.svg'
import { ReactComponent as Item5 } from '../../assets/svg/5.svg'
import { ReactComponent as Item6 } from '../../assets/svg/6.svg'
import { ReactComponent as Item7 } from '../../assets/svg/7.svg'
import './index.scss';

function SiderContent() {
    return (
        <div className="sider-content">
            <div className="title-div">
                <Logo className="logo" />
                <h1 className="title helvetica">Need for drive</h1>
            </div>
            <Menu>
                <Menu.Item key="1" className="menu-item helvetica"><Item1 className="menu-item-logo"/>Карточка автомобиля</Menu.Item>
                <Menu.Item key="2" className="menu-item helvetica"><Item2 className="menu-item-logo"/>Список авто</Menu.Item>
                <Menu.Item key="3" className="menu-item helvetica"><Item3 className="menu-item-logo"/>Заказы</Menu.Item>
                <Menu.Item key="4" className="menu-item helvetica"><Item4 className="menu-item-logo"/>Menu 4</Menu.Item>
                <Menu.Item key="5" className="menu-item helvetica"><Item5 className="menu-item-logo"/>Menu 5</Menu.Item>
                <Menu.Item key="6" className="menu-item helvetica"><Item6 className="menu-item-logo"/>Menu 6</Menu.Item>
                <Menu.Item key="7" className="menu-item last helvetica"><Item7 className="menu-item-logo"/>Menu 7</Menu.Item>
            </Menu>
        </div>
    )
}

export default SiderContent;