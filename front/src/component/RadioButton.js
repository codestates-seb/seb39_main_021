import styled from 'styled-components'

const RadioButton = (props) => {
    return (
        <UserInfoRadio>
            <h1>회원구분</h1>
            <div>
                <label htmlFor="user-normal">
                    <UserCheck id="user-normal" name="user" type="radio"/>
                    <span>일반유저</span>
                </label>
            </div>
            <div>
                <label htmlFor='user-store'>
                    <UserCheck id='user-store' name='user' type="radio" />
                    <span>사업자</span>
                </label>
            </div>
        </UserInfoRadio>
    )
}

export default RadioButton;

const UserInfoRadio = styled.section`
    span {
        vertical-align: middle;
    }

`

const UserCheck = styled.input`
    width:10px;
    height:10px;
    vertical-align: middle;
    border-radius: 50%;

    &:checked{
        border: 1px solid black;
        accent-color: #FFC700;
    }
`