import React from 'react';

const RelativeList = () => {
  const relatives = [
    { key: 'relativeListItem1', name: 'John' },
    { key: 'relativeListItem2', name: 'Emily' },
    { key: 'relativeListItem3', name: 'Michael' },
    { key: 'relativeListItem4', name: 'Sophia' },
  ];

  return (
    <ol key="relativeList">
      {relatives.map((relative) => (
        <li key={relative.key}>{relative.name}</li>
      ))}
    </ol>
  );
};

export default RelativeList;
