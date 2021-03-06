import React from 'react';

type InputProps = {
    label: string;
    id: string;
    value: string;
    onChange: React.ChangeEventHandler;
    type?: "text" | "number" | "email" | "phone" | "date";
}

//Destructure props in the function signature 
export function Input({label, id, value, onChange, type = "text"}: InputProps) {
    return(
        <div>
            <label htmlFor={id}>{label}</label>
            <br />
            <input 
                onChange={onChange} 
                id={id} 
                type={type} 
                value={value} 
            />
        </div>
    );
}