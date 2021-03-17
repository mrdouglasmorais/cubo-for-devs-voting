import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        font-family: Roboto, sans-serif;
    }
    body{
        background-color: #0f1928;
        background-image: url('https://uploads-ssl.webflow.com/601c3b1ed3e7843e98a71df2/6024114ed613a10fa226bd82_5.png'), linear-gradient( 180deg, #0f1928, #0f1928);
        background-position: 100% 50%, 0px 0px;
        background-size: contain, auto;
        background-repeat: repeat-y, repeat;
        background-attachment: fixed, scroll;
        height: 100vh;
        color: #fff;
    }

    footer{
        text-align: center;
        padding: 80px;
    }

    .container{
        width: 80%;
        margin: auto;
    }
`