import React from 'react';
import { Pagination } from 'antd';
import Selects from '../orders-list-selects';
import Car from '../orders-list-car';
import './index.scss';

function OrdersList() {
    return (
        <div className="list">
            <div className="car-div">
                <Selects />
                <Car />
            </div>
            <div className="pagination">
                <Pagination defaultCurrent={1} total={500} size="small" showSizeChanger={false} />
            </div>
        </div>
    )
}

export default OrdersList;