import React from 'react';
import './style.css';

function Switch({ onChange }) {
  const [active, setActive] = React.useState(false);

  const onClickHandler = () => {
    setActive(!active);
    onChange && onChange(!active);
  };

  return (
    <div className="switch" onClick={onClickHandler}>
      <div style={{ left: active ? '70%' : '3px' }}></div>
      <div style={{ left: active ? 0 : '-100%' }}></div>
    </div>
  );
}

export default function App() {
  return <Switch onChange={null} />;
}
