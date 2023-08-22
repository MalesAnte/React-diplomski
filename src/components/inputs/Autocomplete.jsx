import { AutoComplete, Form } from 'antd';
import { debounce } from 'lodash';
import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

const { Item } = Form;

import { autocomplete } from '../../globals.js';
import { autoComFuncGet } from '../../services/mainApiServices.jsx';

const Autocomplete = (props) => {
  const { t } = useTranslation();
  // Props
  const {
    inputLabel,
    service,
    allowClear,
    value,
    setParentState,
    placeHolderLabel,
  } = props;
  // State
  const [queries, setQueries] = useState([]);

  const handleSearch = async (input) => {
    let res = [];
    if (input?.label === '' && input?.value === '') {
      res = [];
      setParentState({ label: '', value: '' });
      setQueries([]);
    } else {
      const response = await autoComFuncGet(input?.label, service);
      res = response?.data?.map((item) => ({
        label: `${item?.label_2} / ${item?.label_3} / ${item?.label_1}`,
        value: item?.id,
      }));
    }
    setQueries(res);
  };

  const debounceQuery = useCallback(
    debounce((input) => {
      handleSearch(input);
    }, 300),
    []
  );

  useEffect(() => {
    if (typeof value === 'object') debounceQuery(value);
  }, [value]);

  const onSelect = (val, option) => {
    setParentState({ label: option?.label, value: option?.value });
  };

  const handleClear = () => {
    setParentState({ label: '', value: '' });
    setQueries([]);
  };

  return (
    <Item
      label={t(inputLabel)}
      colon={false}
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
    >
      <AutoComplete
        className={autocomplete}
        onSearch={(val) => {
          setParentState({ label: val, value: '' });
        }}
        placeholder={placeHolderLabel}
        value={value?.label}
        options={queries}
        onSelect={(val, option) => onSelect(val, option)}
        onClear={() => handleClear}
        allowClear={allowClear}
      />
    </Item>
  );
};

Autocomplete.defaultProps = {
  allowClear: false,
  inputLabel: 'Label',
  placeHolderLabel: 'placeholder',
  service: '',
  value: { label: '', value: '' },
};
export default Autocomplete;
