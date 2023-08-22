import { Select, Form } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

const { Item } = Form;
import { selectList } from '../../globals.js';

const SearchableSelect = (props) => {
  const { t } = useTranslation();
  // Props
  const {
    inputLabel,
    value,
    options,
    disabled,
    style,
    setParentState,
    mode,
    allowClear,
  } = props;

  return (
    <Item
      style={style}
      label={t(inputLabel)}
      colon={false}
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
    >
      <Select
        allowClear={allowClear}
        mode={mode}
        disabled={disabled}
        value={value}
        showSearch
        className={selectList}
        optionFilterProp="children"
        filterOption={(input, option) =>
          (`${option?.label}` ?? '').toLowerCase().includes(`${input}`)
        }
        /*        filterSort={(optionA, optionB) =>
          (`${optionA?.label}` ?? '')
            .toLowerCase()
            .localeCompare((`${optionB?.label}` ?? '').toLowerCase())
        }*/
        options={options}
        onChange={(value) => setParentState(value)}
      />
    </Item>
  );
};

SearchableSelect.defaultProps = {
  allowClear: true,
  disabled: false,
  inputLabel: 'Label',
  mode: undefined,
  options: [],
  style: {},
  value: '',
};
export default SearchableSelect;
