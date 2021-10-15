import React from 'react';
import { Button, Form, Input } from 'antd';
import './index.scss';

function LoginForm() {
    const onFinish = (values: unknown) => {
        console.log('Success:', values);
    };
    return (
        <Form
            layout='vertical'
            className='login-form'
            onFinish={onFinish}
            requiredMark={false}
        >
            <h2 className="enter-text helvetica">Вход</h2>
            <Form.Item
                label='Почта'
                name="email"
                className="form-item"
                rules={[{ required: true, message: 'Введите почту' }]}
            >
                <Input className="input helvetica" />
            </Form.Item>
            <Form.Item
                label='Пароль'
                name='password'
                className="form-item "
                rules={[{ required: true, message: 'Введите пароль' }]}
            >
                <Input.Password className="input helvetica" />
            </Form.Item>
            <a href="/" className="access-text helvetica">Запросить доступ</a>
            <Form.Item className="btn-item">
                <Button type='primary' htmlType="submit" className="btn"><h3 className="btn-text helvetica">Войти</h3></Button>
            </Form.Item>
        </Form >
    )
}
export default LoginForm;