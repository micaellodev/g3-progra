import React from 'react';
import TextInput from '../Text/TextInput';

const LabeledInput = ({ label, ...props }) => (
    <div>
        <label>{label}</label>
        <TextInput {...props} />
    </div>
);

export default LabeledInput;
