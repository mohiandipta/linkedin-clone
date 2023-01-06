import React from 'react';

const HeaderLink = ({Icon, text}) => {
    return (
        <div>
            <div>
                <Icon className="!h-7 !w-7 lg:!-b-1"/>
            </div>
            {text}
        </div>
    );
}

export default HeaderLink;
