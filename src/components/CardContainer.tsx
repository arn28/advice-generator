import { BtnGenerateAdvice } from './BtnGenerateAdvice'
import { LoadingOutlined } from '@ant-design/icons'
import { Card, Typography, message, Spin } from 'antd'
import './CardContainer.scss'
import { getAdvice } from '../api/endpoints'
import { useEffect, useState } from 'react'
import PatternDividerDesktop from '../images/pattern-divider-desktop.svg'
const { Title, Paragraph } = Typography

interface IAdviceSlip {
  id: number
  advice: string
}

export const CardContainer = () => {
  const [advice, setAdvice] = useState<IAdviceSlip>()
  const [loading, setLoading] = useState(false)

  const loadingIcon = <LoadingOutlined style={{ fontSize: 48 }} spin />

  const loadAdvice = async () => {
    setLoading(true)
    try {
      const response = await getAdvice()
      setLoading(false)
      return response
    } catch (error) {
      message.error('Something went wrong, please try again')
    }
  }

  const showAdvice = async () => {
    const response = await loadAdvice()
    if (!response) return
    if (response.data.slip.id !== advice?.id) {
      setAdvice(response.data.slip)
    } else {
      showAdvice()
    }
  }

  useEffect(() => {
    showAdvice()
  }, [])

  return (
    <Card className='card-container' bordered={false}>
      <Title className='card-container__title'>ADVICE # {advice?.id}</Title>
      {loading ? (
        <Spin indicator={loadingIcon} />
      ) : (
        <Paragraph className='card-container__advice'>"{advice?.advice}"</Paragraph>
      )}
      <img className='card-container__divider' src={PatternDividerDesktop} alt='line' />
      <BtnGenerateAdvice onClick={showAdvice} />
    </Card>
  )
}
