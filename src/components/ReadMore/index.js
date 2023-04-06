// Write your code here
import {useState} from 'react'
import {MainDiv, Head, Para, Content, Btn, Imag} from './styledComponents'

const ReadMore = ({reactHooksDescription}) => {
  const slicedContent = reactHooksDescription.slice(0, 170)
  const [isSliced, setIsSliced] = useState(true)
  return (
    <MainDiv>
      <Head>React Hooks</Head>
      <Para as="p">Hooks are a new addition to React</Para>
      <Imag
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <Content as="p">
        {isSliced ? slicedContent : reactHooksDescription}
      </Content>
      <Btn
        onClick={() => {
          setIsSliced(prev => !prev)
        }}
      >
        {isSliced ? 'Read More' : 'Read Less'}
      </Btn>
    </MainDiv>
  )
}

export default ReadMore
