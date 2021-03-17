import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    margin: 80px 0 80px 0;
    justify-content: space-around;

    .card{
        background-color: #fff;
        border-radius: 20px;
        color: #0f1928;
        text-align: center;
        padding: 20px;
        max-width: 250px;

        .text-content{
            display: block;
            margin: 20px 0 20px 0;
        }

        button{
            background: #00eb87;
            color: #fff;
            border: none;
            font-size: 18px;
            width: 100%;
            cursor: pointer;
            border-radius: 5px;
            font-weight: 900;
            transition: 0.5s;
            padding: 5px;

            &:hover{
                background: #0f1928;
            }
        }
    }



`