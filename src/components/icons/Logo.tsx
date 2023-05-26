import React from 'react';

const Logo = (props: any) => {
  return (
    <svg
      width="24"
      height="30"
      viewBox="0 0 24 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 30V0H8.47059V9.93396L15.5294 14.9912L8.47059 19.8679V29.9825L0 30Z"
        fill="white"
      />
      <path
        d="M15.7059 29.9825V0H24V9.03087L15.7941 14.8106V15.1719L24 21.0419V29.9825H15.7059Z"
        fill="white"
      />
    </svg>
  );
};

export default Logo;
