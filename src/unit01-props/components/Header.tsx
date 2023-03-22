import React from 'react';

interface HeaderProps {
  headerText: string;
  extraText?: string;
}

function Header({ headerText, extraText = 'default text' }: HeaderProps) {
  return (
    <>
      <h1>{headerText}</h1>
      {extraText && <p>{extraText}</p>}
    </>
  );
}

export default Header;