import React, { useState } from 'react';
import {
  Avatar, List, Steps, Button, Col, Row, Statistic, Tooltip, Modal, Result, Form,
  Input,
  Radio,
  Rate,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Checkbox,
  Upload,
  Divider,
  Card,
  Space,
  Tag,
} from 'antd';
import { CustomerServiceOutlined, PlusOutlined } from '@ant-design/icons';
import type { StepsProps } from 'antd';
import { ContentSection } from '../Tenses/styled';
import './index.css';
import { StyledTitle } from './styled';
import { Title } from '../Сommon';
import { GoLinkExternal } from 'react-icons/go';
import { Link } from 'react-router-dom';
import { BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs';

const data = [
  {
    title: 'Ant Design Title 1',
    current: 0,
  },
  {
    title: 'Ant Design Title 2',
    current: 1,
    status: 'error',
  },
  {
    title: 'Ant Design Title 3',
    current: 2,
  },
  {
    title: 'Ant Design Title 4',
    current: 1,
  },
];

const items = [
  {
    title: 'Step 1',
    description: 'This is a Step 1.',
  },
  {
    title: 'Step 2',
    description: 'This is a Step 2.',
  },
  {
    title: 'Step 3',
    description: 'This is a Step 3.',
  },
];

const listData = [
  'Dictionary with listening options.',
  'Tests for each grammar theme.',
  'English Grammar for each level.',
  'Tests for any theme you want.',
];

const listData1 = [
  'Dictionary.',
  'Tests.',
  'English Grammar.',
];


const { RangePicker } = DatePicker;
const { TextArea } = Input;

const DefaultPage = () => {
  const [current, setCurrent] = useState(0);
  const [modal2Open, setModal2Open] = useState(false);
  const [isSubmitted, setSubmit] = useState(false);
  const [value, setValue] = useState(3);
  const onChange = (value: number) => {
    console.log('onChange:', value);
    setCurrent(value);
  };

  const feedbacks = [
    { id: '1', title: 'Jack Smith', description: 'Hi, I just wanted to say that the English Learning Platform has been a lifesaver for me. The grammar information is clear and easy to understand, and the tests have helped me to identify my weaknesses and improve my English skills.' },
    { id: '2', title: 'Sarah Garcia', description: 'The dictionary with word listening options has been really helpful for me, as it allows me to hear how words are pronounced by native speakers. I would definitely recommend this platform to anyone looking to improve their English.' },
    { id: '3', title: 'Michael Lee', description: "I've been using the English Learning Platform for a few weeks now. The tests for each theme are really useful, as they allow me to practice what I've learned and track my progress. I appreciate the effort that has gone into creating this platform." },
    { id: '4', title: 'Anna Kim', description: "The fact that there are tests for learning is also a great feature, as it allows me to focus on specific areas that I struggle with. Overall, I'm very satisfied with this platform." },
  ]

  const mappedFeedbacks = feedbacks.map(({ id, title, description }, index) => {
    return (
      <List.Item key={id}>
        <List.Item.Meta
          avatar={<Avatar src={`https://joesch.moe/api/v1/random?key=${index}`} />}
          title={<a href="https://ant.design">{title}</a>}
          description={description}
        />
      </List.Item>
    )
  })

  return (
    <div>
      <ContentSection>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <StyledTitle>English Learning Platform</StyledTitle>
          <Row gutter={16} style={{ position: "relative", right: "35px", bottom: "20px" }}>
            <Col span={12}>
              <Statistic title="Active Users" value={Math.round(Math.random() * 15) + 1} />
            </Col>
          </Row>
        </div>

        <Row gutter={16}>
          <Col span={8}>
            <Card title="Our Goal 🎯" bordered={false}>
              <p>Our platform is designed to provide comprehensive resources and tools that will help you enhance your English language proficiency.</p>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Always Up-to-Date 🔄" bordered={false}>
              <p>Our grammar information and dictionary are regularly updated to ensure that you have access to the latest and most accurate information.</p>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Platform Structure 🗂" bordered={false}>
            {/* {listData1.map((el) => <p style={{display: "inline"}} key={el}><Link to='/Tenses/Past/Past-Perfect'><Tag color="blue">{el}</Tag></Link></p>)} */}
                  {/* {listData1.map((el) => <p style={{display: "inline"}} key={el}><Tag color="blue">{el}</Tag><Link to='/Tenses/Past/Past-Perfect'><GoLinkExternal /></Link></p>)} */}
              <List
                size="small">
                <Space size={[0, 8]} wrap>
                  {listData.map((el) => <p key={el}><Tag color="blue">{el}</Tag><Link to='/Tenses/Past/Past-Perfect'><GoLinkExternal /></Link></p>)}
                </Space>
              </List>
            </Card>
          </Col>
        </Row>
        <Title styles={{ paddingTop: "50px" }} >How to use English Learning Platform? 🤔</Title>
        <Steps
          current={current}
          onChange={onChange}
          direction="horizontal"
          items={[
            {
              title: 'Step 1',
              description: 'Pass the tenses',
            },
            {
              title: 'Step 2',
            },
            {
              title: 'Step 3',
            },
            {
              title: 'Step 1',
              description: '123',
            },
          ]}
        />
        <Title styles={{ paddingTop: "50px" }}>Our Learners Feedback🎓</Title>
        <List
          itemLayout="vertical"
          dataSource={data}
        >
          {mappedFeedbacks}
        </List>
        <div style={{ display: "flex", flexDirection: "row-reverse" }}>
          <Tooltip title="Report a Problem">
            <Modal
              title={<h3>Report about the Problem👷‍♂️</h3>}
              centered
              open={modal2Open}
              onOk={() => setModal2Open(false)}
              onCancel={() => setModal2Open(false)}
            >
              {isSubmitted && <Result
                status="success"
                title="Your Report Was Successfully Sent!"
                subTitle="Report number: 2017182818828182881. Thank you for making our service better!"
              />
              }
              <Form
                labelCol={{ span: 4 }}
                hidden={isSubmitted}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                style={{ maxWidth: 600 }}

              >
                <Form.Item label="Was found">
                  <Select>
                    <Select.Option value="Tenses">Tenses</Select.Option>
                    <Select.Option value="Grammar-Levels">Grammar-Levels</Select.Option>
                    <Select.Option value="Dictionary">Dictionary</Select.Option>
                    <Select.Option value="Tests">Tests</Select.Option>
                    <Select.Option value="Releases">Releases</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item label="Description">
                  <TextArea rows={4} />
                </Form.Item>
                <Form.Item label="Upload" valuePropName="fileList">
                  <Upload action="/upload.do" listType="picture-card">
                    <div>
                      <PlusOutlined />
                      <div style={{ marginTop: 8 }}>Upload</div>
                    </div>
                  </Upload>
                </Form.Item>
                <Form.Item style={{ display: "flex", flexDirection: "row-reverse" }}>
                  <Button
                    onClick={() => setSubmit(true)}
                    style={{ display: "flex", justifyContent: "center", alignItems: "center", background: '#1890ff' }}>
                    <span style={{ color: "white" }}>Submit</span>
                  </Button>
                </Form.Item>
              </Form>
            </Modal>
            <Button
              onClick={() => setModal2Open(true)}
              style={{ display: "flex", justifyContent: "center", alignItems: "center", background: '#1890ff', borderRadius: "50%", height: "40px", width: "40px" }}>
              <CustomerServiceOutlined style={{ color: "white" }} />
            </Button>
          </Tooltip>
        </div>
      </ContentSection>
      <Space style={{ display: "flex", flexDirection: "row-reverse", paddingTop: "15px" }} size={[0, 8]} wrap>
          <Tag icon={<BsTwitter />} color="#55acee">
            Twitter
          </Tag>
          <Tag icon={<BsYoutube />} color="#cd201f">
            Youtube
          </Tag>
          <Tag icon={<BsFacebook />} color="#3b5999">
            Facebook
          </Tag>
          <Tag icon={<BsLinkedin />} color="#55acee">
            LinkedIn
          </Tag>
        </Space>
    </div>
  )
}

export default DefaultPage;