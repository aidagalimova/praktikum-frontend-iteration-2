import car from '../../assets/img/car.png';

const OrderInfo = {
    carId: 1,
    name: 'ELANTRA',
    orderStatus: {
        id: 123
    },
    city: {
        id: 1,
        name: 'Ульяновск'
    },
    point: {
        id: 1,
        name: 'Нариманова 42'
    },
    color: 'Голубой',
    dateFrom: '12.06.2019 12:00',
    dateTo: '13.06.2019 12:00',
    rateId: 1,
    price: 4300,
    isFullTank: true,
    isNeedChildChair: false,
    isRightWheel: false,
    thumbnail: car
}

export default OrderInfo;