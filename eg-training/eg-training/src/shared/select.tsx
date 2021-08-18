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
};

//Destructuring inline in function signature. This allows us to avoid repeating the word "props"
export function Select({placeholderOption, value, options}: SelectProps) {
    //Destructure props to shorten calls below
    //const {placeholderOption, value, options} = props;
    return(
        <select>
            <option value="">{placeholderOption}</option>
            {options.map((option) => (
                <option selected={value === option.value} 
                key={option.value} 
                value={option.value}
                >
                    {option.label}
                </option>
            ))}
        </select>
    );
}