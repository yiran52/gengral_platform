import React from 'react'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import styles from './index.module.scss'
import gifCat from '../../assets/gif_cat.gif'
import svgIcon from '../../assets/hover.svg'
import bgImage from '../../assets/bg_img.jpeg'

const HomePage: React.FC = () => {
  const navigate = useNavigate()
  return (
    <>
      <div
        className={styles['bg_control']}
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <img
          src={gifCat}
          alt="gif"
          style={{
            borderRadius: 200,
            position: 'absolute',
            right: 110,
            top: 20,
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
            right: 100,
            top: 5
          }}
        />
        <div className={styles['menu-container']}>
          <Button
            type="text"
            className={styles['custom-button']}
            style={{ marginRight: 300 }}
            onClick={() => navigate('/Blogs')}
          >
            Blogs - 博言
          </Button>
          <Button
            type="text"
            className={styles['custom-button']}
            onClick={() => navigate('/Essays')}
          >
            Essays - 随笔
          </Button>
        </div>
      </div>
    </>
  )
}

export default HomePage
