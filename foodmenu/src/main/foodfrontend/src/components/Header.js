import React from 'react';

const Header = (props) => {
    return (
        <header>
            <nav className='ps-3 navbar navbar-expend-md navbar-dark bg-success'>
                    <div>
                        <a href='/' className='navbar-brand'>
                            Food Menu!
                        </a>
                    </div>
                </nav>
        </header>
    );
};

export default Header;