import { BtnGenerateAdvice } from './BtnGenerateAdvice'
import { Card, Typography } from 'antd'
import './CardContainer.scss'
import { getAdvice } from '../api/endpoints'
import { useState } from 'react'
const { Title, Paragraph } = Typography

interface IAdviceSlip {
  id: number
  advice: string
}

export const CardContainer = () => {
  const [advice, setAdvice] = useState<IAdviceSlip>({
    id: 0,
    advice: 'Practice patience and trust the process. Good things take time.',
  })

  const loadAdvice = async () => {
    try {
      const response = await getAdvice()
      return response
    } catch (error) {
      console.log(error)
    }
  }

  const showAdvice = async () => {
    const response = await loadAdvice()
    if (response && response.data.slip.id !== advice.id) {
      setAdvice(response.data.slip)
    } else {
      showAdvice()
    }
  }

  return (
    <Card className='card-container' bordered={false}>
      <Title className='card-container__title'>ADVICE # {advice?.id}</Title>
      <Paragraph className='card-container__advice'>"{advice?.advice}"</Paragraph>
      <img className='card-container__divider' src='/pattern-divider-desktop.svg' alt='line' />
      <BtnGenerateAdvice onClick={showAdvice} />
    </Card>
  )
}
