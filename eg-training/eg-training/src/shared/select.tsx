import React from 'react';

type SelectOption = {
    label: string;
    value: string;
};

type SelectProps = {
    id:string;
    label:string;
    options:SelectOption[];
    placeholderOption: string;
    value:string;
    onChange: React.ChangeEventHandler<HTMLSelectElement>;
};

//Destructuring inline in function signature. This allows us to avoid repeating the word "props"
export function Select({id, placeholderOption, value, options, onChange, label}: SelectProps) {
    //Destructure props to shorten calls below
    //const {placeholderOption, value, options} = props;
    return(
        <div>
            <label htmlFor={id}>{label}</label>
            <br/>
            <select id={id} onChange={onChange} value={value}>
                <option value="">{placeholderOption}</option>
                {options.map((option) => (
                    <option 
                        key={option.value} 
                        value={option.value}
                    >
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}