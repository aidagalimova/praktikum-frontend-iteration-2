import React from 'react';
import './index.scss';

function FooterContent() {
    return (
        <div className='footer-content'>
            <a href="/" className='main helvetica'>Главная страница</a>
            <a href="/" className="link helvetica">Ссылка</a>
            <h3 className='simbirsoft medium'>Copyright © 2020 Simbirsoft</h3>
        </div>
    )
}

export default FooterContent;