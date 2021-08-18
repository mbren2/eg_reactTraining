import React from 'react';

type SelectOption = {
    label: string;
    value: string;
};

type SelectProps = {
    id:string;
    label:string;
    options:SelectOption[];
};

export function Select(props: SelectProps) {
    return(
        <select>
            {props.options.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))}
        </select>
    );
}