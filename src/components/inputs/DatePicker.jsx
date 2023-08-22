import { DatePicker, Form } from 'antd';

import React from 'react';
import { useTranslation } from 'react-i18next';

import { datePicker } from '../../globals.js';

const { Item } = Form;

const DatePickerSimple = (props) => {
  const { t } = useTranslation();
  // Props
  const {
    inputLabel,
    value,
    picker,
    setParentState,
    hasFeedback,
    validateStatus,
    help,
    dateFormat,
    name,
    defaultValue,
    disabled,
    allowClear,
  } = props;

  return (
    <Item
      colon={false}
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
      name={name}
      label={t(inputLabel)}
      hasFeedback={hasFeedback}
      validateStatus={validateStatus}
      help={t(help)}
    >
      <DatePicker
        allowClear={allowClear}
        placeholder={'Odaberite datum'}
        disabled={disabled}
        defaultValue={defaultValue !== null ? defaultValue : undefined}
        picker={picker}
        onChange={(date, dateString) => setParentState(date, dateString)}
        className={datePicker}
        value={value}
        format={dateFormat}
      />
    </Item>
  );
};

DatePickerSimple.defaultProps = {
  allowClear: true,
  defaultValue: null,
  disabled: false,
  hasFeedback: false,
  help: '',
  inputLabel: 'Label',
  name: 'date',
  picker: 'date',
  validateStatus: '',
  value: null,
};
export default DatePickerSimple;
