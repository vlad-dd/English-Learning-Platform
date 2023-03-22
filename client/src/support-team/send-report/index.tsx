import React, { useState } from "react";
import { Button, Form, Input, Modal, Result, Select, Tooltip, Upload } from "antd";
import { CustomerServiceOutlined, PlusOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const SendReportModal = () => {
  const [modal2Open, setModal2Open] = useState(false);
  const [isSubmitted, setSubmit] = useState(false);
    return (
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
    )
}

export default SendReportModal;
