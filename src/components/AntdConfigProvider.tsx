import { ConfigProvider } from 'antd'
import { COLORS } from '../config/colors'
interface IProp {
  children?: React.ReactNode
}
export const AntdConfigProvider = ({ children }: IProp) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: COLORS.PRIMARY_NEON_GREEN,
      },
    }}
  >
    {children}
  </ConfigProvider>
)
