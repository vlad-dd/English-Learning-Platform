import React from 'react';
import { HiOutlineHeart } from 'react-icons/hi';
import { AiOutlineStar } from 'react-icons/ai';
import { GiAtom } from 'react-icons/gi';
import { GoCalendar } from 'react-icons/go';

export const PRESENT_SIMPLE_CASES = {
  tense: 'Present Simple',
  cases: [
    {
      key: '1',
      label: 'Schedules',
      icon: <GoCalendar />,
      titles: [
        {
          description: 'The museum closes at 6pm.',
        },
        {
          description: 'The train arrives in London at 4:00am.',
        },
        {
          description: 'The show begins at 9pm.',
        },
      ],
    },
  {
    key: '2',
    label: 'Often Repeated Actions',
    icon: <AiOutlineStar />,
    titles: [
        {
          description: 'We catch the bus every morning.',
        },
        {
          description: 'It rains every evening.',
        },
        {
          description: 'He plays football every Saturday.',
        },
        {
          description: 'She bakes a pie every morning.',
        },
      ],
  },
  {
    key: '3',
    label: 'General Truth',
    icon: <GiAtom />,
    titles: [
      {
        description: 'Water freezes at zero degrees.',
      },
      {
        description: 'The sun rises in the east.',
      },
      {
        description: 'A magnet attracts iron.',
      },
    ],
  },
  {
    key: '4',
    label: 'Habits',
    icon: <HiOutlineHeart />,
    titles: [
        {
          description: 'She does yoga every Friday.',
        },
        {
          description: 'They watch news regularly.',
        },
        {
          description: 'He always drinks tea before dinner.',
        },
        {
          description: 'My cat often sleeps under my bed.',
        },
      ],
  },
]
};

export const PRESENT_CONTINUOUS_CASES = {
  tense: 'Present Continuous',
  cases: [{
    key: '1',
    label: 'Habits',
    titles: [
        {
          description: 'She does yoga every Friday.',
        },
        {
          title: '.',
          description: 'They watch news regularly.',
        },
        {
          title: '.',
          description: 'He always drinks tea before dinner.',
        },
        {
          title: '.',
          description: 'My cat often sleeps under my bed.',
        },
      ],
  },
  {
    key: '2',
    label: 'Often Repeated Actions',
    titles: [
        {
          description: 'We catch the bus every morning.',
        },
        {
          description: 'It rains every evening.',
        },
        {
          description: 'He plays football every Saturday.',
        },
        {
          description: 'She bakes a pie every morning.',
        },
      ],
  },
  {
    key: '3',
    label: 'General Truth',
    titles: [
      {
        description: 'Water freezes at zero degrees.',
      },
      {
        description: 'The sun rises in the east.',
      },
      {
        description: 'A magnet attracts iron.',
      },
    ],
  },
  {
    key: '4',
    label: 'Schedules',
    titles: [
      {
        description: 'The museum closes at 6pm.',
      },
      {
        description: 'The train arrives in London at 4:00am.',
      },
      {
        description: 'The show begins at 9pm.',
      },
    ],
  }
]
};