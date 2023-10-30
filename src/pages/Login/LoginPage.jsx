/* eslint-disable react/prop-types */
import {useNavigate} from 'react-router-dom';
import { Button, Form, Input } from 'antd';
const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};



function LoginPage ({user,setUser,handleSubmit}){
const navigate = useNavigate();
return (

    <div className='login_container justify-content:center'  >
  <Form className='justify-content:center'
  
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      value={user.name}
      onChange={(e) => setUser(e.target.value)}
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button 
      onSubmit={handleSubmit}
      type="primary"
       htmlType="submit"
       onClick={navigate('/admin')}
       >
        
        Submit
      </Button>
    </Form.Item>
  </Form>
  </div>)
}
export default LoginPage;
