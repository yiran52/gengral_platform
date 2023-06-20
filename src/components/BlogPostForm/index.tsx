import React, { useState } from 'react'
import { Form, Input, Button, message, Row, Col } from 'antd'
import { _createBlog } from '../../api/generalApi'
import ReactMarkdown from 'react-markdown'
import gifCat from '../../assets/gif_cat.gif'
import svgIcon from '../../assets/hover.svg'
interface Props {
  setVisible: (value: boolean) => void
}
const BlogPostForm: React.FC<Props> = ({ setVisible }) => {
  const [form] = Form.useForm()
  const [markdownContent, setMarkdownContent] = useState('')

  const onFinish = (values: any) => {
    _createBlog(values).then((res) => {
      setVisible(false)
      message.success('创建成功！')
    })
  }

  const cancelCreate = () => {
    setVisible(false)
    message.success('已取消！')
  }
  return (
    <Form
      form={form}
      onFinish={onFinish}
      style={{
        position: 'absolute',
        left: 500,
        width: 800,
        border: '1px solid grey',
        padding: 50,
        borderRadius: 10,
        marginTop: 30,
        background: 'linear-gradient(to right bottom, white, grey)',
        opacity: 0.8,
        height: 900
      }}
    >
      <Form.Item
        name="title"
        rules={[{ required: true, message: 'Please input your title!' }]}
        style={{ marginTop: 20 }}
      >
        <Input placeholder="Title" />
      </Form.Item>

      <Form.Item
        name="description"
        rules={[{ required: true, message: 'Please input your description!' }]}
      >
        <Input placeholder="Description" />
      </Form.Item>

      <Form.Item
        name="content"
        rules={[{ required: true, message: 'Please input your content!' }]}
        style={{ marginTop: 50 }}
      >
        <Input.TextArea
          rows={4}
          placeholder="Content - Supports markdown"
          onChange={(e) => setMarkdownContent(e.target.value)}
          style={{ height: 240 }}
        />
      </Form.Item>

      <div
        style={{
          height: 240,
          overflow: 'scroll',
          border: '1px solid grey',
          padding: 5,
          borderRadius: 5
        }}
      >
        预览：
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      </div>
      <Form.Item style={{ position: 'absolute', right: 20, marginTop: 15 }}>
        <Button type="dashed" htmlType="submit" style={{ marginRight: 20 }}>
          Save
        </Button>
        <Button type="dashed" onClick={cancelCreate}>
          Cancel
        </Button>
      </Form.Item>
      <img
        src={gifCat}
        alt="gif"
        style={{
          borderRadius: 200,
          position: 'absolute',
          left: 30,
          top: 780,
          width: 100,
          height: 100
        }}
      />
      <img
        src={svgIcon}
        alt="gif"
        style={{
          borderRadius: 200,
          position: 'absolute',
          right: 10,
          top: 2
        }}
      />
    </Form>
  )
}

export default BlogPostForm
