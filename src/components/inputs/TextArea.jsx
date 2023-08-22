import { Input, Form } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

const { Item } = Form;
const { TextArea } = Input;
import { simpleInput } from '../../globals.js';

const SimpleTextArea = (props) => {
  const { t } = useTranslation();
  // Props
  const {
    inputLabel,
    placeHolderLabel,
    value,
    setParentState,
    hasFeedback,
    validateStatus,
    help,
    disabled,
    rows,
    style,
    colon,
  } = props;

  return (
    <Item
      style={style}
      colon={colon}
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
      label={t(inputLabel)}
      hasFeedback={hasFeedback}
      validateStatus={validateStatus}
      help={t(help)}
    >
      <TextArea
        disabled={disabled}
        allowClear
        className={simpleInput}
        value={value}
        onChange={(e) => setParentState(e.target.value)}
        placeholder={t(placeHolderLabel) ?? ''}
        rows={rows}
        showCount
        maxLength={255}
      />
    </Item>
  );
};

SimpleTextArea.defaultProps = {
  colon: false,
  disabled: false,
  hasFeedback: false,
  help: '',
  inputLabel: 'Label',
  placeHolderLabel: '',
  rows: 3,
  style: {},
  type: '',
  validateStatus: '',
  value: 'string',
};
export default SimpleTextArea;
