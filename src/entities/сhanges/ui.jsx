import React from 'react';
import { useColorByStatus } from './model';

/**
 *
 * @param {String} props.title  - title
 * @param {String} props.value  - value
 * @param {String} props.showStatus - showStatus
 *
 */
export function Changes({
  title,
  value,
  showStatus = 'neutral',
}) {
  const color = useColorByStatus(showStatus, value);

  return (
    <div className="text-white text-base font-bold mr-4">
      <div
        className="text-xs text-gray-400 font-normal"
        style={{
          fontSize: '10px',
        }}
      >
        {title}
      </div>
      <div className={`text-xs ${color}`}>{value}</div>
    </div>
  );
}
