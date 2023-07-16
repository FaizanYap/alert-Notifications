import {Heading, CustomButton} from './styledComponents'

import './App.css'

const App = () => (
  <>
    <Heading>Hello World</Heading>
    <CustomButton color="#ffffff" bgColor="#0070c1">
      Click
    </CustomButton>
    <CustomButton color="#0070c1" bgColor="#ffffff">
      Click
    </CustomButton>
  </>
)

export default App
