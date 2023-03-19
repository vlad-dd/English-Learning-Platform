import React from 'react';
import {
    ThunderboltOutlined,
    PieChartOutlined,
    TagOutlined,
    CrownOutlined,
    FireOutlined,
    ExperimentOutlined,
    TrophyOutlined
  } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { GiBookCover } from 'react-icons/gi';
import { MdNewReleases } from 'react-icons/md';
import { MdQuiz } from 'react-icons/md';
import { GoFlame } from 'react-icons/go';
import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi';

type MenuItem = Required<MenuProps>['items'][number];

type Option = {
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
}

export const options: Option[] = [
  //Tenses
    {label: 'Tenses', key: 'Tenses', icon: <CrownOutlined />, children: [
      //Present
      {label: 'Present', key: 'Present', icon: <PieChartOutlined />, children: [
        {label: 'Simple', key: 'Present-Simple', icon: <FireOutlined style={{color: 'green'}} />},
        {label: 'Continuous', key: 'Present-Continuous', icon: <FireOutlined style={{color: 'green'}} />},
        {label: 'Perfect', key: 'Present-Perfect', icon: <FireOutlined style={{color: 'orange'}} />},
        {label: 'Perfect C', key: 'Present-Perfect-Continuous', icon: <FireOutlined style={{color: 'orange'}} />},
      ]},
      //Past
      {label: 'Past', key: 'Past', icon: <PieChartOutlined />, children: [
        {label: 'Simple', key: 'Past-Simple', icon: <FireOutlined style={{color: 'green'}} />},
        {label: 'Continuous', key: 'Past-Continuous', icon: <FireOutlined style={{color: 'green'}} />},
        {label: 'Perfect', key: 'Past-Perfect', icon: <FireOutlined style={{color: 'red'}} />},
        {label: 'Perfect C', key: 'Past-Perfect-Continuous', icon: <FireOutlined style={{color: 'red'}} />},
      ]},
      //Future
      {label: 'Future', key: 'Future', icon: <PieChartOutlined />, children: [
        {label: 'Simple', key: 'Future-Simple', icon: <FireOutlined style={{color: 'green'}} />},
        {label: 'Continuous', key: 'Future-Continuous', icon: <FireOutlined style={{color: 'green'}} />},
        {label: 'Perfect', key: 'Future-Perfect', icon: <FireOutlined style={{color: 'orange'}} />},
        {label: 'Perfect C', key: 'Future-Perfect-Continuous', icon: <FireOutlined style={{color: 'orange'}} />},
      ]}
    ]},

  //Grammar Levels

  {label: 'Grammar Levels', key: 'Grammar-Levels', icon: <ExperimentOutlined />, children: [
    //A1
    {label: 'A1', key: 'A1', icon: <TrophyOutlined />, children: [
      // {label: 'Singular', key: 'Singular', icon: <ThunderboltOutlined />},
      {label: 'Plural', key: 'Plural', icon: <ThunderboltOutlined />},
    ]},

    //A2
    // {label: 'A2', key: 'A2', icon: <TrophyOutlined />, children: [
    //   {label: 'Test', key: 'test1', icon: <ThunderboltOutlined />},
    // ]},
    
    //B1
    // {label: 'B1', key: 'B1', icon: <TrophyOutlined />, children: [
    //   {label: 'Test', key: 'test2', icon: <ThunderboltOutlined />},
    // ]},

    //B2
    // {label: 'B2', key: 'B2', icon: <TrophyOutlined />, children: [
    //   {label: 'Test', key: 'test3', icon: <ThunderboltOutlined />},
    // ]},
  ]},

  //Dictionary
  {label: 'Dictionary', key: 'Dictionary', icon: <GiBookCover />, children: [
    {label: 'Dictionary', key: 'Dictionary', icon: <TagOutlined />},
  ]},

  {label: 'Tests', key: 'Tests', icon: <MdQuiz />, children: [
    {label: 'Verbs', key: 'Verbs', icon: <GoFlame />, children: [
      {label: 'Mixed Tenses', key: 'Mixed-Tenses', icon: <GiPerspectiveDiceSixFacesRandom />},
      {label: 'Present', key: 'Present', icon: <GiPerspectiveDiceSixFacesRandom />},
      {label: 'Past', key: 'Past', icon: <GiPerspectiveDiceSixFacesRandom />},
    ]},
  ]},

  //News
  {label: 'Releases', key: 'Releases', icon: <MdNewReleases />, children: [
    {label: 'Releases', key: 'Releases', icon: <TagOutlined />},
  ]},
  //To continue...

];