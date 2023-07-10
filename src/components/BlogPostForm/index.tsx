import React, { useState } from 'react'
import { Form, Input, Button, message } from 'antd'
import { _createBlog } from '../../api/generalApi'
import ReactMarkdown from 'react-markdown'
import gifCat from '../../assets/gif_cat.gif'
import svgIcon from '../../assets/hover.svg'
import styles from './index.module.scss'
interface Props {
  setVisible: (value: boolean) => void
}
const BlogPostForm: React.FC<Props> = ({ setVisible }) => {
  const [form] = Form.useForm()
  const [markdownContent, setMarkdownContent] = useState('')

  const onFinish = (values: any) => {
    _createBlog(values).then(() => {
      setVisible(false)
      message.success('创建成功！')
    })
  }

  const cancelCreate = () => {
    setVisible(false)
    message.success('已取消！')
  }
  return (
    <Form form={form} onFinish={onFinish} className={styles.form}>
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

      <div className={styles.previewContainer}>
        Content Preview:
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
      <img src={gifCat} alt="gif" className={styles.gifImage} />
      <img src={svgIcon} alt="gif" className={styles.svgIcon} />
    </Form>
  )
}

export default BlogPostForm
