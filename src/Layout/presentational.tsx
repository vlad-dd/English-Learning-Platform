import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import SiderComponent from './Sider/presentational';
import { Table, Alert, Collapse, List } from 'antd';
import { AlertOutlined, CheckOutlined, CloseOutlined, QuestionOutlined } from '@ant-design/icons';
import Header from './Header/presentational';
import Title from '../Сommon/Title/presentational';
import BreadCrumb from './BreadCrumb/presentational';
import { ContentSection } from './styled';
import tenseDBRequest from './Content/Table/TensesDB';
import { useSelector } from 'react-redux';
import * as selectors from '../selectors';
import { tensesBCState } from '../selectors';
import Link from '../Сommon/ExerciseLink/presentational';

interface DataType {
  key: string;
  type: string;
  noun: string;
  auxiliar: string;
  noun_1: string;
  auxiliar_1: string;
}

const { Content, Footer } = Layout;
const { Panel } = Collapse;

const LayoutPage = () => {
  const state = useSelector(selectors.tensesBCState);
  
  const select = state?.path[state.path.length - 1];

  const [response, setResponse] = useState<any>();

  useEffect(() => {
    const res: any = tenseDBRequest(select);
    setResponse(res);
  }, [state]);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SiderComponent />
      <Layout>
        <Header />
        <Content style={{ margin: '0 16px' }}>
          {!!response && (
            <>
              <BreadCrumb />
              <ContentSection>
                <Alert
                  icon={<AlertOutlined />}
                  message={response[0].data[0].tip}
                  showIcon
                />
                <p style={{ paddingTop: '25px' }}>
                  <Title>Sentence building</Title>
                </p>
                <Table
                  columns={response[0].columns}
                  dataSource={response[0].data[0].table}
                  style={{ paddingBottom: '25px' }}
                />
                 <Title>Examples</Title>
                <Collapse defaultActiveKey={['1']}>
                  <Panel header="Affirmative sentense examples" key="1">
                    {response[0]?.data[0]?.affirmative && response[0].data[0].affirmative.map((el: any) => {
                      return (
                        <List.Item.Meta
                          key={el.id}
                          style={{ padding: '15px'}}
                          avatar={<CheckOutlined />}
                          description={el.sentence}
                        />
                      );
                    })}
                  </Panel>
                  <Panel header="Negative sentense examples" key="2">
                  {response[0]?.data[0]?.negative && response[0].data[0].negative.map((el: any) => {
                      return (
                        <List.Item.Meta
                          key={el.id}
                          style={{ padding: '15px' }}
                          avatar={<CloseOutlined />}
                          description={el.sentence}
                        />
                      );
                    })}
                  </Panel>
                  <Panel header="Question sentense examples" key="3">
                  {response[0]?.data[0]?.questions && response[0].data[0].questions.map((el: any) => {
                      return (
                        <List.Item.Meta
                          key={el.id}
                          style={{ padding: '15px' }}
                          avatar={<QuestionOutlined />}
                          description={el.sentence}
                        />
                      );
                    })}
                  </Panel>
                </Collapse>
               
                <p style={{ paddingTop: '25px' }}>
                <Title>Exercises</Title>
                </p>
                <Title>Practice</Title>
              </ContentSection>
            </>
          )}
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          LearnEA ©2022 Created by vsyrotiuk
        </Footer>
      </Layout>
    </Layout>
  );
};

export default LayoutPage;
