import React from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';

const Leftside = (props)=> {
  return (
    <>
    <Container>
        <ArtCard>
            <UserInfo>
            <CardBg/>
            <a>
                    <Photo/>
                    <Link>Welcome, { props.user ? props.user.displayName : 'there!'}</Link>
                </a>
                <a >
                    <AddPhoto>
                        Add a Photo
                    </AddPhoto>
                </a>
            </UserInfo>

            <Widget>
              <a >
                <div>
                  <span>Connections</span>
                  <span>Grow your network</span>
                </div>
                <img src="/images/widget-icon.svg" alt="" />
              </a>
            </Widget>
            <Item>
              <span>
                <img src="/images/item-icon.svg" alt="" />
                My Items
              </span>
            </Item>
        </ArtCard>
        <CommunityCard>
          <a >
            <span>
              Groups
            </span>
          </a>
          
          <a >
            <span>
              Groups
            </span>
          </a>
          <a >
            <span>
            Events 
            <img src="/images/plus-icon.svg" alt="" />
            </span>
          </a>
          <a >
            <span>
              Follow hashtags
            </span>
          </a>
          <a >
            <span>
              Discover more
            </span>
          </a>
        </CommunityCard>
    </Container>

    </>
  )
}
const Container = styled.div`
grid-area: "leftside";
`;

const ArtCard = styled.div`
text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  transition: box-shadow 83ms;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;


const UserInfo = styled.div`
 border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 12px 16px;
  word-wrap: break-word;
  word-break: break-word;
`;

const CardBg = styled.div`
background-image: url('/images/card-bg.svg');
background-position: center;
background-size: 462px;
height: 54px;
margin: -12px -12px 0;

`

const Photo = styled.div`
box-shadow: none;
background-image: url('/images/photo.svg');
width: 72px;
box-sizing: border-box;
height: 72px;
background-repeat: no-repeat;
background-color: white;
border-radius: 1px solid white;
background-position: center;
background-size: 60%;
background-clip: content-box;
margin: -38px auto 12px;
border-radius: 50%;
border: 2px solid white;

`
const AddPhoto = styled.div`
text-decoration: none;
font-size: 12px;
color: #0a66c2;
margin-top: 4px;
line-height: 1.35;
font-weight: 400;


`

const Link = styled.div`
font-size: 16px;
color: rgba(0,0,0,0.9);
font-weight: 600;
line-height: 1.5;
`;

const Widget = styled.div`
padding: 12px 0px 12px;
border: 1px solid rgba(0,0,0,0.15);


a {
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 12px;

  &:hover {
    background-color: rgba(0,0,0,0.08);
  }

  div {
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    span {
      font-size: 12px;
      font-weight: 500;
      line-height: 1.333;
      color: rgba(0,0,0,0.6);

      &:nth-child(even) {
      font-weight: 600;
      color: rgba(0,0,0,1);

    }
    }

    

  }
}

svg {
  color: rgba(0,0,0,1);
}

`;

const Item = styled.div`
padding: 12px;
display: block;
text-align: left;
border-color: rgba(0,0,0,0.8);
font-size: 12px;

span {
  display: flex;
  align-items: center;
  color: rgba(0,0,0,1);

  svg {
    color: rgba(0,0,0,0.6);
  }
}

&:hover {
  background-color: rgba(0,0,0,0.08);
}

`;

const CommunityCard = styled(ArtCard)`
padding: 8px 0 0;
text-align: left;
display: flex;
flex-direction: column;

a {
  padding: 4px 12px;
  font-size: 12px;
  color: black;

  &:hover {
    color: #0a66c2;
  }


  span {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &:last-child {
    color: rgba(0,0,0,0.6);
    text-decoration: none;
    border-top: 1px solid rgba(0,0,0,0.15);
    padding: 12px;

    &:hover {
      background-color: rgba(0,0,0,0.08);
    }
  }
}

`;

const mapStateToProps = (state) =>{
  return {
    user: state.userState.user,
  }
}
export default connect(mapStateToProps)(Leftside);