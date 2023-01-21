import React from 'react';

const COLUMNS = [
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      render: (text: string) => <p style={{ color: '#a5a5d3' }}>{text}</p>,
    },
    {
      title: 'Noun',
      dataIndex: 'noun',
      key: 'noun',
    },
    {
      title: 'Auxiliar',
      dataIndex: 'auxiliar',
      key: 'auxiliar',
    },
    {
      title: 'Noun',
      dataIndex: 'noun_1',
      key: 'noun_1',
    },
    {
      title: 'Auxiliar',
      dataIndex: 'auxiliar_1',
      key: 'auxiliar_1',
    },
  ];

export { COLUMNS };