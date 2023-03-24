import React from 'react';
import useBoolean from '../../hooks/useBoolean';

interface DropdownProps<T = { label: string; value: string }> {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  options?: T[];
}

const Dropdown: React.FC<DropdownProps> = (props) => {
  const { className, style, options } = props;
  const { state: hovered, setTrue, setFalse } = useBoolean();
  return (
    <div className={className} style={style}>
      <div className="relative inline-block" onMouseLeave={setFalse}>
        <div onMouseEnter={setTrue}>{props.children}</div>
        {options != null && options?.length > 0 && (
          <div
            className={`absolute left-0 opacity-0 bg-white p-2 ${
              hovered ? 'opacity-100' : ''
            } transition-opacity`}
            onMouseLeave={setFalse}
          >
            <ul>
              {options?.map((item, index) => {
                return (
                  <li key={index} className="whitespace-nowrap">
                    {item.label}:{item.value}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
