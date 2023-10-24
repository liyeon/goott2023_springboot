import React from 'react';

const HeaderComponent = (props) => {
    return (
        <div>
            <header>
                <nav className='ps-3 navbar navbar-expend-md navbar-dark bg-warning'>
                    <div>
                        <a href='http://www.w3schools.com' className='navbar-brand'>
                            Bike Member Management Application
                        </a>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default HeaderComponent;