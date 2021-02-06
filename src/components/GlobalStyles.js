import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

:root {
    --text-dark: #8b54ce;
    --text-light: #fff;
    --text-grey: #403d39;

    --primary-color: #C60F13;
    --dark-color: #333333;
    --light-color: #f4f4f4;
    --danger-color: #C60F13;
    --success-color: #28a745; 

    --secondary-font: 'Bungee', cursive;;

    --max-width: 1280px;
}

    *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }
    html{
        &::-webkit-scrollbar{
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color: darkgrey;
        }
        &::-webkit-scrollbar-track {
    background: white;
  }
    }
    body{
        font-family: 'Roboto', sans-serif;
        width: 100%;
    }
    h2{
        font-size: 2rem;
        font-weight: 900;
        color: #333;
    }
    h3{
        font-size: 1.3rem;
        color: #333;
        padding: 1.5rem 0rem;
    }
    p{
        font-size: 1.2rem;
        line-height: 200%;
        color: #696969;
    }
    a{
        text-decoration: none;
        color: #333;
    }
    img{
        display: block;
    }
    input{
        font-weight: bold;
    font-family: "Montserrat", sans-serif;
    }
    ul{
      list-style: none;
    }

.alert {
  opacity: 0.9;
  background: var(--light-color);
  color: #333;
  display: flex;
  align-items:center;

 svg{
   margin: 0 0.5rem;
 }
}

.alert-primary {
  background: var(--primary-color);
  color: #fff;
}

.alert-light {
  background: var(--light-color);
  color: #333;
}

.alert-dark {
  background: var(--dark-color);
  color: #fff;
}

.alert-danger {
  background: var(--danger-color);
  color: #fff;
}

.alert-success {
  background: var(--success-color);
  color: #fff;
}

.alert-white {
  background: #fff;
  color: #333;
  border: #ccc solid 1px;
}

.btn-container{
  display: flex;
  justify-content: flex-end;
}

.clear-btn{
  margin-top: 1rem;
  border: none;
  outline:none;
  background: #d9d9d9;
  color: var(--text-grey);
  cursor: pointer;
  padding: 0.5rem 0.5rem;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items:center;

  img{
    height: 12px;
    width:  12px;
  }
}

/* Spinner */
.spinner-box{
  margin-top: 4rem;
}

.pulse-container {
  height: 50vh;
  width: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
}

.pulse-bubble {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: var(--text-dark);
}

.pulse-bubble-1 {
    animation: pulse .4s ease 0s infinite alternate;
}
.pulse-bubble-2 {
    animation: pulse .4s ease .2s infinite alternate;
}
.pulse-bubble-3 {
    animation: pulse .4s ease .4s infinite alternate;
}

@keyframes pulse {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: .25;
    transform: scale(.75);
  }
}
`;

export default GlobalStyles;
