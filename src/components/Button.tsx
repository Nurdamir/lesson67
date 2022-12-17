import React from 'react';

interface Props {
    value: string;
    onClick?: React.MouseEventHandler;
    // statusBtn?: boolean;
}

const Button: React.FC<Props> = ({value, onClick}) => {

    return (
        <button
            className='btn btn-outline-dark btnValue'
            onClick={onClick}
        >
            {value}
        </button>
    );
};

export default Button;