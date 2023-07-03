import React from 'react'
import { Button, ButtonProps } from 'antd'
import { IconDiceSvg } from '../images/graphics'
import './BtnGenerateAdvice.scss'

export const BtnGenerateAdvice: React.FC<ButtonProps> = ({ ...rest }) => {
  return (
    <Button
      className='generate-advice-button'
      type='primary'
      shape='circle'
      icon={<IconDiceSvg />}
      {...rest}
    ></Button>
  )
}
