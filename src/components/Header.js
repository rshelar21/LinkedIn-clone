import React from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';
import { signOutAPI } from '../actions';

const Header = (props) =>{
  return (
      <>
          <Container>
              <Content>
              <Logo>
                  <a href="">
                      <img src="/images/home-logo.svg" alt="" />
                  </a>
                </Logo>
                  <Search>
                  <div>
                    <input type="text" name="" id="" placeholder='Search'/>
                    </div>
                    <SearchIcon>
                        <img src="/images/search-icon.svg" alt="" />
                    </SearchIcon>
                  </Search>
                 
                  <Nav>
                  <Navwrap>
                      <NavList className='active'>
                      <a >
                          <img src="/images/nav-home.svg" alt="" />
                          <span>Home</span>
                      </a>
                      </NavList>

                      <NavList>
                      <a >
                          <img src="/images/nav-network.svg" alt="" />
                          <span>My Network</span>
                      </a>
                      </NavList>
                      <NavList>
                      <a >
                          <img src="/images/nav-jobs.svg" alt="" />
                          <span>Jobs</span>
                      </a>
                      </NavList>
                      <NavList>
                      <a >
                          <img src="/images/nav-messaging.svg" alt="" />
                          <span>Messaging</span>
                      </a>
                      </NavList>
                      <NavList>
                      <a >
                          <img src="/images/nav-notifications.svg" alt="" />
                          <span>Notifications</span>
                      </a>
                      </NavList>

                      <User>
                          <a >
                          { props.user && props.user.photoURL ?(
                            <img src={props.user.photoURL} alt="" />
                          ):(
                            <img src="/images/user.svg" alt="" />
                          )}
                              <span>Me
                              <img src="/images/down-icon.svg" alt="" />
                              </span>
                          </a>

                          <SignOut onClick={() => props.signOut()}>
                              <a>Sign Out</a>
                          </SignOut>
                      </User>

                      <Work>
                          <a > 
                          <img src="/images/nav-work.svg" alt="" />
                          <span>Work 
                          <img src="/images/down-icon.svg" alt="" />
                          </span>
                          </a>
                      </Work>
                    </Navwrap>
                  </Nav>
              </Content>
          </Container>
      </>
  )
}

const Container = styled.div`
position: fixed;
top: 0;
left: 0;
background-color: white;
padding: 0 24px;
border-bottom: 1px solid rgba(0,0,0,0.08);
width: 100vw;
z-index: 100;

`
const Content = styled.div`
display: flex;
align-items: center;
margin: 0 auto;
max-width: 1128px;
min-height: 100%;

`

const Logo = styled.span`
margin-right: 8px;
font-size: 0px;
`
const Search = styled.div`
position: relative;
opacity: 1;
flex-grow: 1;

& > div{
    max-width: 280px;

    input {
    border: none;
    outline: none;
    width:  218px;
    box-shadow: none;
    font-size: 14px;
    font-weight: 400;
    background-color: #eef3f8;
    color: rgba(0,0,0,0.9);
    padding: 0 8px 0 40px;
    line-height: 1.75;
    vertical-align: text-top;
    border-radius: 2px;
    height: 34px;
    border-color: #dce6f1;


}
}

`
const SearchIcon = styled.div`
width: 40px;
position: absolute;
top: 10px;
left: 2px;
margin: 0;
border-radius: 0 2px 2px 0;
pointer-events: none;
display: flex;
justify-content: center;
align-items: center;
transition: background-color 0.15s;
`
const Nav = styled.nav`
margin-left: auto;
display: block;

@media (max-width: 768px) {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    background-color: white;
    
}


`;

const Navwrap = styled.ul`
display: flex;
list-style: none;
align-items: center;

.active {
    span:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        border-bottom: 2px solid black;
        width: 100%;
        transform-origin: center;
        transition: transform 0.5s ease-in;
        transform: scaleX(0);
    }

    &:hover {
        span:after {
           
            transform: scaleX(1);
        }
    }
}


`;

const NavList = styled.li`
display: flex;
align-items: center;


a {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 52px;
    min-width: 80px;
    line-height: 1.5;
    font-size: 12px;
    background: transparent;
    font-weight: 400;
    position: relative;
    text-decoration: none;



    span {
        color: rgba(0,0,0,0.6);
    }


}

&:hover,
&:active {
    a {
        span {
            color: rgba(0,0,0,0.9);
        }
    }
}
`;


const SignOut = styled.div`
position: absolute;
top: 45px;
color: rgba(0,0,0,0.9);
background-color: white;
width: 100px;
height: 40px;
transition-duration: 167ms;
text-align: center;
display: none;
border-radius: 0 0 5px 5px;

`

const User =  styled(NavList)`
a > svg {
    width: 24px;
    border-radius: 50%;
}
a > img{
    width: 24px;
    height: 24px;
    border-radius: 50%;

}
span {
    display: flex;
    align-items: center;
}

&:hover {
    ${SignOut} {
        display: flex;
    }
}

`;



const Work =  styled(NavList)`
border-left: 1px solid rgba(0,0,0,0.08);
`

const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    }
}

const mapDispatchToProps = (dispatch) =>({
    signOut: () => dispatch(signOutAPI())

})

export default connect(mapStateToProps, mapDispatchToProps)(Header);