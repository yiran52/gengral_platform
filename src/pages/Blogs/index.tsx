import React, { useEffect, useState } from 'react'
// 在此处引入Ant Design组件
import { Card, Button, Col, Row, Tooltip, Pagination, Avatar } from 'antd'
import styles from './index.module.scss'
import { useNavigate } from 'react-router-dom'
import { _fetchBlogs } from '../../api/generalApi'
import BlogPostForm from '../../components/BlogPostForm'
import bgImage from '../../assets/bg_img.jpeg'

import {
  PlusOutlined,
  EditOutlined,
  DoubleLeftOutlined,
  DeleteOutlined,
  EllipsisOutlined,
  SettingOutlined
} from '@ant-design/icons'
import type { PaginationProps } from 'antd'
const { Meta } = Card
type CardContent = {
  id: number
  title: string
  description: string
  content: string
}

// 假设我们有以下数据
const initialData: CardContent[] = [
  { id: 1, title: 'test', description: 'test', content: '' }
]

const Blogs: React.FC = () => {
  const [data, setData] = useState<CardContent[]>(initialData)
  const [selectedCard, setSelectedCard] = useState<CardContent | null>(null)
  const [pageNo, setPageNo] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [total, setTotal] = useState(0)
  const [createContent, setCreateContent] = useState(false)

  const onChange: PaginationProps['onChange'] = (
    page: number,
    pageSize?: number
  ) => {
    setPageNo(page)
    if (pageSize) setPageSize(pageSize)
  }
  const navigate = useNavigate()

  const handleClick = (content: CardContent) => {
    console.log('content', content)

    setSelectedCard(content)
  }
  const setContent = (values: boolean) => {
    setCreateContent(values)
  }
  const handleSettingClick = (id: number) => {
    console.log('Settings clicked on card with id', id)
  }

  const handleEditClick = (id: number) => {
    console.log('Edit clicked on card with id', id)
  }

  const handleEllipsisClick = (id: number) => {
    console.log('Ellipsis clicked on card with id', id)
  }

  useEffect(() => {
    _fetchBlogs({ page_no: pageNo, pageSize: pageSize }).then((res) => {
      const { blogs, total } = res.data
      setData(blogs)
      setTotal(total)
    })
  }, [pageNo, pageSize, createContent])

  return (
    <div
      className={styles['bg_control']}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Row className={styles['blog-page']}>
        <Col span={3}></Col>
        {createContent ? (
          <BlogPostForm setVisible={setContent} />
        ) : (
          <Col span={18}>
            <div className={styles['Col_style']}>
              {data.map((item) => (
                <Card
                  key={item.id}
                  onClick={() => handleClick(item)}
                  style={{
                    height: 340,
                    marginRight: 25
                  }}
                  hoverable
                  headStyle={{ width: 300 }}
                  bodyStyle={{ width: 300 }}
                  cover={
                    <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                  }
                  actions={[
                    <SettingOutlined
                      key="setting"
                      onClick={() => handleSettingClick(item.id)}
                    />,
                    <EditOutlined
                      key="edit"
                      onClick={() => handleEditClick(item.id)}
                    />,
                    <EllipsisOutlined
                      key="ellipsis"
                      onClick={() => handleEllipsisClick(item.id)}
                    />
                  ]}
                >
                  <Meta
                    avatar={
                      <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
                    }
                    title={item.title}
                    description={item.description}
                  />
                </Card>
              ))}
            </div>
            <Pagination
              total={total}
              showSizeChanger
              showTotal={(total) => `Total ${total}`}
              defaultPageSize={pageSize}
              defaultCurrent={pageNo}
              onChange={onChange}
              style={{ marginTop: 35, position: 'absolute', right: 0 }}
            />
          </Col>
        )}
        <Col span={3} className={styles['button-area']}>
          <Tooltip title="Create">
            <Button
              type="primary"
              shape="circle"
              icon={<PlusOutlined />}
              onClick={() => setCreateContent(true)}
            />
          </Tooltip>
          <Tooltip title="Edit">
            <Button type="primary" shape="circle" icon={<EditOutlined />} />
          </Tooltip>
          <Tooltip title="Delete">
            <Button type="primary" shape="circle" icon={<DeleteOutlined />} />
          </Tooltip>
          <Tooltip title="Back">
            <Button
              type="primary"
              shape="circle"
              icon={<DoubleLeftOutlined />}
              onClick={() => navigate('/')}
            />
          </Tooltip>
        </Col>
      </Row>
    </div>
  )
}

export default Blogs
