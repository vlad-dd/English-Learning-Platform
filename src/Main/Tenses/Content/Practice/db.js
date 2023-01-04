/* eslint-disable react/prop-types */
import React from 'react';

const StyledType = ({children}) => <div>{children}</div>;
// const buildPracticeSentences = (id, label, partOne, partTwo, missed) => ({
//   id,
//   label,
//   partOne,
//   partTwo,
//   missed
// });

export const PRESENT_SIMPLE_PRACTICE = [
    {
      sentences: [
        {
          id: 1,
          label: 'Affirmative',
          partOne: 'She',
          partTwo:'her homework every evening.',
          missed: 'does'
        },
        {
          id: 2,
          label: 'Affirmative',
          partOne: 'He',
          partTwo:'her homework every evening.',
          missed: 'does'
        },
        {
          id: 3,
          label: 'Affirmative',
          partOne: 'It',
          partTwo:'her homework every evening.',
          missed: 'does'
        },
        {
          id: 4,
          label: 'Negative',
          partOne: 'It',
          partTwo:'her homework every evening.',
          missed: 'does not'
        },
        {
          id: 5,
          label: 'Question',
          partOne: 'it',
          partTwo:'her homework every evening?',
          missed: 'Does'
        }
      ],
      } ,
  ];

  export const PRESENT_CONTINUOUS_PRACTICE = [
    {
      sentences: [
        {
          id: 1,
          label: 'Affirmative',
          partOne: 'She',
          partTwo:'her homework every evening.',
          missed: 'is doing'
        },
        {
          id: 2,
          label: 'Affirmative',
          partOne: 'He',
          partTwo:'her homework every evening.',
          missed: 'is doing'
        },
        {
          id: 3,
          label: 'Affirmative',
          partOne: 'It',
          partTwo:'her homework every evening.',
          missed: 'is doing'
        },
        {
          id: 4,
          label: 'Negative',
          partOne: 'It',
          partTwo:'her homework every evening.',
          missed: 'is not doing'
        },
      ],
      } ,
  ];

  export const PRESENT_PERFECT_PRACTICE = [
    {
      sentences: [
        {
          id: 1,
          label: '#',
          partOne: '#',
          partTwo:'#',
          missed: '#'
        },
      ],
      } ,
  ];
  
  //--------------------------------------------------------------------------------
  
  export const PRESENT_CONTINUOUS_DATA = [
    {
      tip: 'Tip: We use Present Continuous when are talking about actions which happen right now and haven`t ended yet.',
      table: [
        {
          key: '1',
          type: <StyledType>Affirmative</StyledType>,
          noun: 'You/We/They',
          auxiliar: 'Are + You/We/They +  V-ing',
          noun_1: 'He/She/It',
          auxiliar_1: 'Is + He/She/It + V-ing',
        },
        {
          key: '2',
          type: <StyledType>Negative</StyledType>,
          noun: 'You/We/They',
          auxiliar: 'You/We/They + are not + V-ing',
          noun_1: 'He/She/It',
          auxiliar_1: 'He/She/It is not + V-ing',
        },
        {
          key: '3',
          type: <StyledType>Question</StyledType>,
          noun: 'You/We/They',
          auxiliar: 'Are + You/We/They + V-ing?',
          noun_1: 'He/She/It',
          auxiliar_1: 'Is + He/She/It + V-ing?',
        },
      ],
      affirmative: [
        {
          id: 1,
          sentence: 'I am working now.'
        },
        {
          id: 2,
          sentence: 'She is working now.'
        },
        {
          id: 3,
          sentence: 'She is doing his homework.'
        },
        {
          id: 4,
          sentence: 'She is studying chemistry.'
        },
        {
          id: 5,
          sentence: 'Somebody is swimming in the river.'
        },
      ],
      negative: [
        {
          id: 1,
          sentence: 'She is not studying music.'
        },
        {
          id: 2,
          sentence: 'They are not swimming in the sea.'
        },
        {
          id: 3,
          sentence: 'He is not sleeping now.'
        },
        {
          id: 4,
          sentence: 'We are not watching TV now.'
        },
        {
          id: 5,
          sentence: 'We are not having fun now.'
        },
        {
          id: 6,
          sentence: 'I am not baking a strawberry pie.'
        },
      ],
      questions: [
        {
          id: 1,
          sentence: 'Is she studying biology?'
        },
        {
          id: 2,
          sentence: 'Are they swimming in the lake?'
        },
        {
          id: 3,
          sentence: 'Is the cook making dinner?'
        },
        {
          id: 4,
          sentence: 'Why is the girl laughing?'
        },
        {
          id: 5,
          sentence: 'Where is the cat sleeping?'
        },
        {
          id: 6,
          sentence: 'Who are you talking to?'
        },
        {
          id: 7,
          sentence: 'How many cakes is he eating?'
        },
        {
          id: 8,
          sentence: 'Why is your wife crying?'
        },
      ]
    },
  ];
    
  //--------------------------------------------------------------------------------
  
  export const PRESENT_PERFECT_DATA = [
    {
      tip: 'We use Present Perfect when we did something in the past and able see a result of that or ask to a person if she did something.',
      table: [
        {
          key: '1',
          type: 'Affirmative',
          noun: 'I/You/We/They',
          auxiliar: 'Have + V-3rd(Past Participle)',
          noun_1: 'He/She/It',
          auxiliar_1: 'Has + V-3rd(Past Participle)',
        },
        {
          key: '2',
          type: 'Negative',
          noun: 'I/You/We/They',
          auxiliar: 'Have + not + V-3rd(Past Participle)',
          noun_1: 'He/She/It',
          auxiliar_1: 'Has + not + V-3rd(Past Participle)',
        },
        {
          key: '3',
          type: 'Question',
          noun: 'I/You/We/They',
          auxiliar: 'Have + I/You/We/They + V-3rd(Past Participle)?',
          noun_1: 'He/She/It',
          auxiliar_1: 'has + He/She/It + V-3rd(Past Participle?',
        },
      ],
    },
  ];
  
  //--------------------------------------------------------------------------------
  
  export const PRESENT_PERFECT_CONTINUOUS_DATA = [
    {
      tip: 'We use Present Perfect Continuous when are talking about actions which started in the past and continue happening.',
      table: [
        {
          key: '1',
          type: 'Affirmative',
          noun: 'I/You/We/They',
          auxiliar: 'Have + been + V-ing',
          noun_1: 'He/She/It',
          auxiliar_1: 'Has + been + V-ing',
        },
        {
          key: '2',
          type: 'Negative',
          noun: 'I/You/We/They',
          auxiliar: 'Have + not + been + V-ing',
          noun_1: 'He/She/It',
          auxiliar_1: 'Has + not + been + V-ing',
        },
        {
          key: '3',
          type: 'Question',
          noun: 'I/You/We/They',
          auxiliar: 'Have + I/You/We/They + been + V-ing?',
          noun_1: 'He/She/It',
          auxiliar_1: 'Has + He/She/It + been + V-ing?',
        },
      ],
    },
  ];
  
  //--------------------------------------------------------------------------------
  
  export const PAST_SIMPLE_DATA = [
    {
      tip: 'We use Past Simple when talking about something what we did and finished.',
      table: [
        {
          key: '1',
          type: <StyledType>Affirmative</StyledType>,
          noun: 'I/He/She/It',
          auxiliar: 'Did/Was',
          noun_1: 'You/We/They',
          auxiliar_1: 'Did/Were',
        },
        {
          key: '2',
          type: <StyledType>Negative</StyledType>,
          noun: 'I/He/She/It',
          auxiliar: 'Didn`t/Wasn`t',
          noun_1: 'You/We/They',
          auxiliar_1: 'Didn`t/Weren`t',
        },
        {
          key: '3',
          type: <StyledType>Question</StyledType>,
          noun: 'I/He/She/It',
          auxiliar: 'Did I/He/She/It was...?',
          noun_1: 'You/We/They',
          auxiliar_1: 'Did You/We/They were...?',
        },
      ]
    }
  ];
  
  //--------------------------------------------------------------------------------
  
  export const PAST_CONTINUOUS_DATA = [
    {
      tip: 'We use Past Continuous when are talking about durable actions in past.',
      table: [
        {
          key: '1',
          type: <StyledType>Affirmative</StyledType>,
          noun: 'I/He/She/It',
          auxiliar: 'Was + V-ing',
          noun_1: 'You/We/They',
          auxiliar_1: 'Were + V-ing',
        },
        {
          key: '2',
          type: <StyledType>Negative</StyledType>,
          noun: 'I/He/She/It',
          auxiliar: 'Was not + V-ing',
          noun_1: 'You/We/They',
          auxiliar_1: 'Were not + V-ing',
        },
        {
          key: '3',
          type: <StyledType>Question</StyledType>,
          noun: 'I/He/She/It',
          auxiliar: 'Was I/He/She/It + V-ing?',
          noun_1: 'You/We/They',
          auxiliar_1: 'Were You/We/They + V-ing?',
        },
      ]
    }
  ];
  
  //--------------------------------------------------------------------------------
  
  export const PAST_PERFECT_DATA = [
   {
    tip: 'We use Past Perfect when are talking about actions that were completed before some point in the past.',
    table: [
      {
        key: '1',
        type: <StyledType>Affirmative</StyledType>,
        noun: 'I/He/She/It',
        auxiliar: 'Had + V-3rd(Past Participle)',
        noun_1: 'You/We/They',
        auxiliar_1: 'Had + V-3rd(Past Participle)',
      },
      {
        key: '2',
        type: <StyledType>Negative</StyledType>,
        noun: 'I/He/She/It',
        auxiliar: 'Had + not + V-3rd(Past Participle)',
        noun_1: 'You/We/They',
        auxiliar_1: 'Had + not + V-3rd(Past Participle)',
      },
      {
        key: '3',
        type: <StyledType>Question</StyledType>,
        noun: 'I/He/She/It',
        auxiliar: 'Had + I/He/She/It + V-3rd(Past Participle)?',
        noun_1: 'You/We/They',
        auxiliar_1: 'Had + You/We/They + V-3rd(Past Participle)?',
      },
    ]
   }
  ];
  
  //--------------------------------------------------------------------------------
  
  export const PAST_PERFECT_CONTINUOUS_DATA = [
    {
      tip: 'We use Past Perfect Continuous when talking about something that started in the past and continued up until another time in the past.',
      table: [
        {
          key: '1',
          type: <StyledType>Affirmative</StyledType>,
          noun: 'I/He/She/It',
          auxiliar: 'Had + been + V-ing',
          noun_1: 'You/We/They',
          auxiliar_1: 'Had + been + V-ing',
        },
        {
          key: '2',
          type: <StyledType>Negative</StyledType>,
          noun: 'I/He/She/It',
          auxiliar: 'Had + not + been + V-ing',
          noun_1: 'You/We/They',
          auxiliar_1: 'Had + not + been + V-ing',
        },
        {
          key: '3',
          type: <StyledType>Question</StyledType>,
          noun: 'I/He/She/It',
          auxiliar: 'Had + I/He/She/It + been + V-ing?',
          noun_1: 'You/We/They',
          auxiliar_1: 'Had + You/We/They + been + V-ing?',
        },
      ]
    }
  ];
  
  //--------------------------------------------------------------------------------
  
  export const FUTURE_SIMPLE_DATA = [
   {
    tip: 'We use Future Simple when talking about something what will we do in future.', 
    table: [
      {
        key: '1',
        type: <StyledType>Affirmative</StyledType>,
        noun: 'I/He/She/It',
        auxiliar: 'Will + V',
        noun_1: 'You/We/They',
        auxiliar_1: 'Will + V',
      },
      {
        key: '2',
        type: <StyledType>Negative</StyledType>,
        noun: 'I/He/She/It',
        auxiliar: 'Will + not + V',
        noun_1: 'You/We/They',
        auxiliar_1: 'Will + not + V',
      },
      {
        key: '3',
        type: <StyledType>Question</StyledType>,
        noun: 'I/He/She/It',
        auxiliar: 'Will + I/He/She/It + V?',
        noun_1: 'You/We/They',
        auxiliar_1: 'Will + You/We/They + V?',
      },
    ]
   }
  ];
  
  //--------------------------------------------------------------------------------
  
  export const FUTURE_CONTINUOUS_DATA = [
    {
      tip: 'We use Future Continuous when are talking about durable actions in future.',
      table: [
        {
          key: '1',
          type: <StyledType>Affirmative</StyledType>,
          noun: 'I/He/She/It',
          auxiliar: 'Will + be + V-ing',
          noun_1: 'You/We/They',
          auxiliar_1: 'Will + be + V-ing',
        },
        {
          key: '2',
          type: <StyledType>Negative</StyledType>,
          noun: 'I/He/She/It',
          auxiliar: 'Will + not + be + V-ing',
          noun_1: 'You/We/They',
          auxiliar_1: 'Will + not + be + V-ing',
        },
        {
          key: '3',
          type: <StyledType>Question</StyledType>,
          noun: 'I/He/She/It',
          auxiliar: 'Will + I/He/She/It + be + V-ing?',
          noun_1: 'You/We/They',
          auxiliar_1: 'Will + You/We/They + be + V-ing?',
        },
      ]
    }
  ];
  
  //--------------------------------------------------------------------------------
  
  export const FUTURE_PERFECT_DATA = [
    {
      tip: 'We use Future Perfect when are talking about something what we will finish before the another action.',
      table: [
        {
          key: '1',
          type: <StyledType>Affirmative</StyledType>,
          noun: 'I/He/She/It',
          auxiliar: 'Will + have + Past Participle/V-ed',
          noun_1: 'You/We/They',
          auxiliar_1: 'Will + have + Past Participle/V-ed',
        },
        {
          key: '2',
          type: <StyledType>Negative</StyledType>,
          noun: 'I/He/She/It',
          auxiliar: 'Will + not + have + Past Participle/V-ed',
          noun_1: 'You/We/They',
          auxiliar_1: 'Will + not + have + Past Participle/V-ed',
        },
        {
          key: '3',
          type: <StyledType>Question</StyledType>,
          noun: 'I/He/She/It',
          auxiliar: 'Will + I/He/She/It + have + Past Participle/V-ed?',
          noun_1: 'You/We/They',
          auxiliar_1: 'Will + You/We/They + have + Past Participle/V-ed?',
        },
      ]
    }
  ];
  
  //--------------------------------------------------------------------------------
  
  export const FUTURE_PERFECT_CONTINUOUS_DATA = [
    {
      tip: 'We use Future Perfect Continuous when talking about action which we will be finishing in future before another action.',
      table: [
        {
          key: '1',
          type: <StyledType>Affirmative</StyledType>,
          noun: 'I/He/She/It',
          auxiliar: 'Will + have + been + V-ing',
          noun_1: 'You/We/They',
          auxiliar_1: 'Will + have + been + V-ing',
        },
        {
          key: '2',
          type: <StyledType>Negative</StyledType>,
          noun: 'I/He/She/It',
          auxiliar: 'Will + not + have + been + V-ing',
          noun_1: 'You/We/They',
          auxiliar_1: 'Will + not+ have + been + V-ing',
        },
        {
          key: '3',
          type: <StyledType>Question</StyledType>,
          noun: 'I/He/She/It',
          auxiliar: 'Will + I/He/She/It + have + been + V-ing?',
          noun_1: 'You/We/They',
          auxiliar_1: 'Will + You/We/They + have + been + V-ing?',
        },
      ]
    }
  ];
  
  //--------------------------------------------------------------------------------
  