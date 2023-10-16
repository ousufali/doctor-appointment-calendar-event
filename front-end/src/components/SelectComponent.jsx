import React from 'react';
import Select from 'react-select';

const customStyles = {
    control: (provided, state) => ({
        ...provided,
        // width: '100%',
        // maxWidth: '250px',
        minHeight: '40px',
        padding: '4px',
        // border: '2px solid #3498db',
        borderRadius: '4px',
        boxShadow: '0 2px 2px rgba(0, 0, 0, 0.1)',
        transition: 'border-color 0.3s',
        '&:hover': {
            borderColor: '#2980b9',
        },

    }),
    option: (provided, state) => ({
        // ...provided,
        margin: '5px',
        padding: '10px',
        textAlign: 'left', // Align text to the left
        backgroundColor: state.isSelected ? '#3498db' : '#ffffff',
        color: state.isSelected ? '#ffffff' : '#333333',
        borderRadius: '3px',
        cursor: 'pointer',
        transition: 'background-color 0.3s, color 0.3s',
        '&:hover': {
            backgroundColor: state.isSelected ? '#2980b9' : '#f2f2f2',
        },
    }),
    dropdownIndicator: (provided) => ({
        ...provided,
        color: '#3498db',
    }),
    group: (provided) => ({
        ...provided,
        padding: '2px 0', // Add padding between groups
    }),
    groupHeading: (provided) => ({
        ...provided,
        fontSize: '16px', // Customize font size
        color: '#3498db', // Customize label color
        marginBottom: '5px', // Add space below the label
    }),
};


function CustomSelect({ options, placeholder, changeHandler , is_hospital_selection, is_required, selected_value}) {
    return (
        <Select
            required = {is_required}
            options={options}
            styles={customStyles}
            isSearchable={false}
            placeholder={placeholder}
            onChange={(event)=>{
                console.log("event: ",event)
                changeHandler(event, is_hospital_selection)
            }}
            value={selected_value}
        />
    );
}

export default CustomSelect;
