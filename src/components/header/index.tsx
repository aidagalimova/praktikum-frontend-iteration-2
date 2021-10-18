import React from 'react';
import { Input } from 'antd';
import { ReactComponent as SearchIcon } from '../../assets/svg/search.svg';
import { ReactComponent as NotificationsIcon } from '../../assets/svg/notifications.svg';
import { ReactComponent as DropdownIcon } from '../../assets/svg/dropdown.svg';
import Avatar from '../../assets/img/avatar.png';
import './index.scss';

function HeaderContent() {
    return (
        <div className="header-content">
            <div className="search">
                <Input
                    placeholder='Поиск...'
                    bordered={false}
                    prefix={<SearchIcon />}
                    className='search-input'
                />
            </div>
            <div className="notifications">
                <NotificationsIcon />
                <div className="notifications-count">
                    <h3 className="notifications-count-text">2</h3>
                </div>
            </div>
            <div className="admin">
                <img src={Avatar} alt="" className='admin-img' />
                <h3 className='admin-text helvetica'>Admin</h3>
                <DropdownIcon className='admin-icon' />
            </div>
        </div>
    )
}

export default HeaderContent;