import React from 'react';
import { Select, type SelectProps } from 'antd';
interface AppSelectorProps {
  className?: string;
  style?: React.CSSProperties;
  options?: SelectProps['options'];
  onChange?: SelectProps['onChange'];
}

const AppSelector = (props: AppSelectorProps) => {
  const { className, style, options, onChange } = props;
  return (
    <Select
      options={options}
      onChange={onChange}
      className={className}
      style={style}
    ></Select>
  );
};

export default AppSelector;
