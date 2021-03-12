import styled from 'styled-components';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap');

  font-family: 'Ubuntu', sans-serif;

  background-color: #121212;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%233e3e3e' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23545454'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");
  width: 100%;
  height: 25vh;

  color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 3rem;

    flex-wrap: wrap;

    width: 90rem;
  }
`;

export const TitleContainer = styled.section`
  h1 {
      background: linear-gradient(264.51deg, #EA5DAD 10.04%, #C2A0FD 47.63%, #9867F0 59.03%, #3BF0E4 69.96%);  transition: width .3s;
      background-position: 58% 50%;
      background-size: 500%;
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-animation: gradient-shift 30s ease infinite;
      animation: gradient-shift 30s ease infinite;
      -webkit-text-fill-color: transparent;
      
      @keyframes gradient-shift {
        0% {
          background-position: 58% 50%;
        }
        25% {
          background-position: 100% 0%;
        }
        75% {
          background-position: 10% 50%;
        }
        100% {
          background-position: 58% 50%;
        }
      }
    }
`;

export const Image = styled.img`
    width: 20%;
    max-width: 100px;
`;

export const SocialContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  background-image: url('https://www.thalycomp.tk/img/logo.png');
  height: 25vh;
  width: 120px;

  background-position: center; 
  background-repeat: no-repeat; 
  background-size: cover;

  img {
    width: 30px;
    height: 30px;
    margin-left: 10px;
  }
`;