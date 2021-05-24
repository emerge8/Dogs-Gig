import styled from 'styled-components';

export const Container = styled.div`
width: 80%;
margin: 0 auto;


.content{
    text-align: center;
    margin-top: 100px;

    & button {
        margin-top:20px;
        color: lightskyblue;
        background: gray;
        border: none;
        font-size: 22px;
        border-radius: 12px;
        cursor: pointer;
        transition: 0.5s;

        &:hover{
                background: bisque;        
        }
    }
}
.title-text{
    text-align: center;
}

.sub-title{
    text-align: center;
    margin-top: 25px;
    font-size: 20px;
}

.image-setings{
    text-align: center;
}

`
