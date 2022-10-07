import React from 'react';
import {
    ThunderboltOutlined,
    PieChartOutlined,
    TagOutlined,
    CrownOutlined,
    FireOutlined,
    CommentOutlined,
    ExperimentOutlined,
    TrophyOutlined
  } from "@ant-design/icons";
import type { MenuProps } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

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
        {label: 'Simple', key: 'Present-Simple', icon: <FireOutlined />},
        {label: 'Continuous', key: 'Present-Continuous', icon: <FireOutlined />},
        {label: 'Perfect', key: 'Present-Perfect', icon: <FireOutlined />},
        {label: 'Perfect C', key: 'Present-Perfect-Continuous', icon: <FireOutlined />},
      ]},
      //Past
      {label: 'Past', key: 'Past', icon: <PieChartOutlined />, children: [
        {label: 'Simple', key: 'Past-Simple', icon: <FireOutlined />},
        {label: 'Continuous', key: 'Past-Continuous', icon: <FireOutlined />},
        {label: 'Perfect', key: 'Past-Perfect', icon: <FireOutlined />},
        {label: 'Perfect C', key: 'Past-Perfect-Continuous', icon: <FireOutlined />},
      ]},
      //Future
      {label: 'Future', key: 'Future', icon: <PieChartOutlined />, children: [
        {label: 'Simple', key: 'Future-Simple', icon: <FireOutlined />},
        {label: 'Continuous', key: 'Future-Continuous', icon: <FireOutlined />},
        {label: 'Perfect', key: 'Future-Perfect', icon: <FireOutlined />},
        {label: 'Perfect C', key: 'Future-Perfect-Continuous', icon: <FireOutlined />},
      ]}
    ]},

  //Grammar Levels

  {label: 'Grammar Levels', key: 'levels', icon: <ExperimentOutlined />, children: [
    //A1
    {label: 'A1', key: 'a1', icon: <TrophyOutlined />, children: [
      {label: 'Test', key: 'test', icon: <ThunderboltOutlined />},
    ]},

    //A2
    {label: 'A2', key: 'a2', icon: <TrophyOutlined />, children: [
      {label: 'Test', key: 'test', icon: <ThunderboltOutlined />},
    ]},
    
    //B1
    {label: 'B1', key: 'b1', icon: <TrophyOutlined />, children: [
      {label: 'Test', key: 'test', icon: <ThunderboltOutlined />},
    ]},

    //B2
    {label: 'B2', key: 'b2', icon: <TrophyOutlined />, children: [
      {label: 'Test', key: 'test', icon: <ThunderboltOutlined />},
    ]},
  ]},

  //News
  {label: 'News', key: 'news', icon: <CommentOutlined />, children: [
    {label: 'Test', key: 'test', icon: <TagOutlined />},
  ]}

  //To continue...

]