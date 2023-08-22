import { LogoutOutlined } from '@ant-design/icons';
import { Button, Popconfirm } from 'antd';
import React, { useState } from 'react';

const PopConfirm = (props) => {
  const { title, description, okText, cancelText, onConfirm, btnText } = props;
  const [open, setOpen] = useState(false);

  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };
  return (
    <Popconfirm
      title={title}
      description={description}
      okText={okText}
      cancelText={cancelText}
      onConfirm={onConfirm}
      trigger="click"
      open={open}
      onOpenChange={handleOpenChange}
    >
      <Button type="text">
        <LogoutOutlined />
        {btnText}
      </Button>
    </Popconfirm>
  );
};

PopConfirm.defaultProps = {
  btnText: '',
  cancelText: 'Ne',
  description: '',
  okText: 'Da',
  title: 'Title',
};

export default PopConfirm;
