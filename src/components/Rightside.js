import React from 'react'
import styled from 'styled-components';

const Rightside = ()=> {
  return (
    <>
    <Container>
        <FollowCard>
          <Title>
            <h2>Add to your feed</h2>
            <img src="/images/feed-icon.svg" alt="" />
          </Title>

          <Feedlist>
            <li>
              <a>
                <Avatar/>
              </a>
              <div>
                <span>#Linkedin</span>
                <button>Follow</button>
              </div>
            </li>

            <li>
              <a>
                <Avatar/>
              </a>
              <div>
                <span>#Video</span>
                <button>Follow</button>
              </div>
            </li>
          </Feedlist>

          <Recommendation>
          <span>
            view all recommendations
            <img src="/images/right-icon.svg" alt="" />
          </span>
          </Recommendation>
        </FollowCard>

        <BannerCard>
          <img src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg" alt="" />
        </BannerCard>
    </Container>

    </>
  )
}
const Container = styled.div`
grid-area: "rightside";
`;

const FollowCard = styled.div`
overflow: hidden;
margin-bottom: 8px;
text-align: center;
border-radius: 5px;
position: relative;
border: none;
background-color: #fff;
box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
padding: 12px;
`;

const Title = styled.div`
display: inline-flex;
align-items: center;
justify-content: space-between;
width: 100%;
color: rgba(0,0,0,0.6);
font-size: 16px;

h2 {
  font-size: 16px;
}

`;

const Feedlist = styled.ul`
list-style: none;
margin-top: 16px;

li {
  display: flex;
  align-items: center;
  margin: 12px 0;
  font-size: 14px;
  position: relative;

  & > div {
    display: flex;
    flex-direction: column;
  }

}

button {
background-color: transparent;
color: rgba(0,0,0,0.6);
padding: 16px;
box-sizing: border-box;
border-radius: 15px;
font-weight: 600;
display: inline-flex;
align-items: center;
justify-content: center;
box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.6);
max-height: 32px;
max-width: 480px;
text-align: center;
outline: none;
}

`;

const Avatar = styled.div`
width: 47px;
height: 47px;
background-image: url("https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs");
background-size: contain;
margin-right: 8px;
background-position: center;
background-repeat: no-repeat;


`;


const Recommendation = styled.div`
font-size: 14px;
color: #0a66c2;
span {
  display: flex;
  align-items: center;
}
`;

const BannerCard = styled(FollowCard)`
img {
  width: 100%;
  height: 100%;
}

`;

export default Rightside;