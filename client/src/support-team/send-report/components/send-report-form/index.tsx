import React from "react";
import { Form, Select, Upload, Input, Button } from "antd";
import { PlusOutlined } from '@ant-design/icons';
import { ELP_APPLICATIONS } from "../../../constants";

const { TextArea } = Input;

const SendReportForm = ({ isSubmitted, setSubmitted }: any) => {
    return (
        <Form
            labelCol={{ span: 6 }}
            hidden={isSubmitted}
            wrapperCol={{ span: 12 }}
            layout="horizontal"
            style={{ maxWidth: 600 }}
        >
            <Form.Item required label="Was found in">
                <Select options={ELP_APPLICATIONS} />
            </Form.Item>
            <Form.Item required label="Description">
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
                    onClick={() => setSubmitted(true)}
                    style={{ display: "flex", justifyContent: "center", alignItems: "center", background: '#1890ff' }}>
                    <span style={{ color: "white" }}>Submit</span>
                </Button>
            </Form.Item>
        </Form>
    );
};

export default SendReportForm;