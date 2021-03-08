import * as React from 'react';

const FavoriteToggle: React.FC = () => {
  const [toggled, setToggled] = React.useState(false);

  const toggle = React.useCallback(() => setToggled(!toggled), []);

  return (
    <div onClick={toggle} data-toggled={toggled} className="ListToggle">
      <div>
        <i className="fa fa-fw fa-heart"></i>
        <i className="fa fa-fw fa-check"></i>
      </div>
    </div>
  );
};

export default FavoriteToggle;
