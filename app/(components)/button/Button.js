import React from 'react';

const Button = (props) => {
    return (
        <div>
             <button 
                    className="bg-blue-600 w-[130px] h-10 ml-3 mt-2
                     text-white rounded-xl 
                     hover:bg-white 
                     hover:text-black
                     border
                     hover:border-2
                     hover:border-blue-600"
                     > 
                    {props.text} 
                    </button>
        </div>
    );
}

export default Button;
