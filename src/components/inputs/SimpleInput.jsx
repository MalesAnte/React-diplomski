import { Input, Form, Tooltip } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

const { Item } = Form;

import { simpleInput } from '../../globals.js';

const SimpleInput = (props) => {
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
    type,
    style,
    disabled,
    tooltipText,
  } = props;

  return (
    <Tooltip
      trigger={['hover']}
      title={tooltipText}
      arrow={false}
      placement="bottom"
      color="#299cdb"
    >
      <Item
        style={style}
        colon={false}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        label={t(inputLabel)}
        hasFeedback={hasFeedback}
        validateStatus={validateStatus}
        help={t(help)}
      >
        <Input
          type={type}
          allowClear
          className={simpleInput}
          value={value}
          onChange={(e) => setParentState(e.target.value)}
          placeholder={t(placeHolderLabel) ?? ''}
          disabled={disabled}
          min={0}
        />
      </Item>
    </Tooltip>
  );
};

SimpleInput.defaultProps = {
  disabled: false,
  hasFeedback: false,
  help: '',
  inputLabel: 'Label',
  placeHolderLabel: 'label',
  placement: 'bottom',
  style: { width: '100%' },
  tooltipText: '',
  type: '',
  validateStatus: '',
  value: 'string',
};
export default SimpleInput;
