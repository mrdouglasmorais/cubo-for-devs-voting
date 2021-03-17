import styled from 'styled-components';

export const CardCount = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    border-radius: 22px;
    width: 80%;
    margin: auto;
    margin-top: 40px;
    color: #0f1928;
    padding: 12px;

    .framework-title {
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 150px;

        h3{
            margin-left: 22px;
        }
    }

    .percent{
        width: 300px;
        height: 40px;
        border-radius: 22px;
        background: #fff;
        border: #0f1928 2px solid;

        .progress{
            background: #00eb87;
            height: 100%;
            border-radius: 22px 0 0 22px;
        }
    }


`