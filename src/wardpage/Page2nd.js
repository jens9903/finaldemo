import React, { Fragment } from 'react';
import { Button, Form, Select, Image } from 'antd';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo/logo.jfif';
import './Ward.css';

const Page2nd = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log('Success:', values);
    navigate('/map');
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="body">
      <Fragment>
        <div className='ward'>
          <center><Image width={90} src={logo} /></center>
          <h2 >CCMC</h2>
        </div>
        <div className='head'>
          <h2 >Bill Collector Login</h2>
        </div>
       
        <div className='wardbox'>
          <Form
            name="basic"
            wrapperCol={{
              span: 19,
              offset: 4,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Zone"
              name="zone"
              rules={[
                {
                  required: true,
                  message: 'Please select your zone!',
                },
              ]}
            >
              <Select placeholder="Select your Zone">
                <Select.Option value="north">North</Select.Option>
                <Select.Option value="south">South</Select.Option>
                <Select.Option value="central">Central</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              wrapperCol={{ span: 19, offset: 1 }}
              label="Ward Number"
              name="ward"
              rules={[
                {
                  required: true,
                  message: 'Please select your ward number!',
                },
              ]}
            >
              <Select placeholder="Select your Ward">
                <Select.Option value="66">66</Select.Option>
                <Select.Option value="12">12</Select.Option>
                <Select.Option value="31">31</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                span: 24,
              }}
            >
              <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                Confirm
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Fragment>
    </div>
  );
};

export default Page2nd;
