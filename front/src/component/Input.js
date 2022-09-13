import styled from 'styled-components'

const Input = (props) => {
    return (
        props.color === 'gray' ? <InputBorderGray/> : <InpputBoederYellow/>
    )
}

export default Input

const InputBorderGray = styled.input`
    border:1px solid #76736E;
    padding:5px;
`

const InpputBoederYellow = styled.input`
    border:1px solid #FFC700;
    padding:5px;
`