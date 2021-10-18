/* eslint-disable no-unused-vars */
import React from 'react';
import OrderInfo from './const';
import { ReactComponent as CheckIcon } from '../../assets/svg/check.svg';
import { ReactComponent as EditIcon } from '../../assets/svg/edit.svg';
import { ReactComponent as RejectIcon } from '../../assets/svg/reject.svg';
import Checkboxes from './checkboxes';
import './index.scss';

function OrdersListCar() {

    return (
        <div className="car-info">
            <div className="car-img">
                <img src={OrderInfo.thumbnail} alt='car' />
            </div>
            <div className='car'>
                <div>
                    <h3 className="regular car-text black">{OrderInfo.name}</h3>
                    <h3 className="regular car-text">&nbsp;в&nbsp;</h3>
                    <h3 className="regular car-text black">{OrderInfo.city.name},&nbsp;</h3>
                    <h3 className="regular car-text">{OrderInfo.point.name}</h3>
                </div>
                <h3 className="regular car-text">{OrderInfo.dateFrom} — {OrderInfo.dateTo}</h3>
                <div>
                    <h3 className="regular car-text">Цвет:&nbsp;</h3>
                    <h3 className="regular car-text black">{OrderInfo.color}</h3>
                </div>
            </div>
            <div className='car-additions'>
                <Checkboxes
                    additions={{
                        tank: OrderInfo.isFullTank,
                        chair: OrderInfo.isNeedChildChair,
                        wheel: OrderInfo.isRightWheel
                    }} />
            </div>
            <div className='car-price'><h2>{OrderInfo.price}&nbsp;₽</h2></div>
            <div className="btns">
                <div className="btn">
                    <CheckIcon />
                    <h3 className="btn-text helvetica">Готово</h3>
                </div>
                <div className="btn">
                    <RejectIcon />
                    <h3 className="btn-text helvetica">Отмена</h3>
                </div>
                <div className="btn last">
                    <EditIcon />
                    <h3 className="btn-text helvetica">Изменить</h3>
                </div>
            </div>
        </div>
    )
}

export default OrdersListCar;