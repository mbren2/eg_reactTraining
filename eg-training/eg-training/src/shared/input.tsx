import React from 'react';

type InputProps = {
    label: string;
    id: string;
    value: string;
    onChange: React.ChangeEventHandler;
}

export function Input(props: InputProps) {
    return(
        <div>
            <label htmlFor={props.id}>{props.label}</label>
            <br />
            <input 
                onChange={props.onChange} 
                id={props.id} 
                type="text" 
                value={props.value} 
            />
        </div>
    );
}