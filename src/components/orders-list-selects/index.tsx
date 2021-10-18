import React from 'react';
import { Button, Select } from 'antd';
import { ReactComponent as SelectIcon } from '../../assets/svg/icon.svg';
import './index.scss';

const { Option } = Select;

function OrdersListSelects() {
    return (
        <div className="select">
            <Select
                className="select-item first"
                defaultValue="За неделю"
                suffixIcon={<SelectIcon />} >
                <Option value="week">За неделю</Option>
            </Select>
            <Select
                className="select-item"
                defaultValue="Elantra"
                suffixIcon={<SelectIcon />} >
                <Option value="Elantra">Elantra</Option>
            </Select>
            <Select
                className="select-item"
                defaultValue="Ульяновск"
                suffixIcon={<SelectIcon />} >
                <Option value="Ульяновск">Ульяновск</Option>
            </Select>
            <Select
                className="select-item"
                defaultValue="В процессе"
                suffixIcon={<SelectIcon />} >
                <Option value="В процессе">В процессе</Option>
            </Select>
            <Button className="select-btn">
                <h3 className="select-btn-text helvetica">Применить</h3>
            </Button>
        </div>
    )
}

export default OrdersListSelects;