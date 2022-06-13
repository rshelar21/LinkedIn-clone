import React from "react";
import styled from "styled-components";
import Leftside from "./Leftside";
import Mainside from "./Mainside";
import Rightside from "./Rightside";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

const Home = (props) =>{
    return(
        <>
        <Container>
        { !props.user && <Navigate to='/'/>}
            <Section>
            <h5> <a > Hiring in a hurry? - </a></h5>
            <p>
              Find talented pros in record time with Upwork and keep business
          moving.
            </p>

            </Section>
            <Layout>
            <Leftside/>
            <Mainside/>
            <Rightside/>
            </Layout>
        </Container>        
    

        </>
    )
}

const Container = styled.div`
padding-top: 52px;
max-width: 100%;
`;

const Content = styled.div`
  max-width: 1128px;
  margin-left: auto;
  margin-right: auto;
`;

const Section = styled.div`
min-height: 50px;
text-align: center;
box-sizing: border-box;
padding: 16px 0;
display: flex;
justify-content: center;
text-decoration: none;

h5 {
    color: #0a66c2;
    font-size: 14px;
    a {
        font-weight: 700;
    }
}

p {
    font-weight: 600;
    color: #434649;
    font-size: 14px;
}

@media (max-width: 768px) {
    padding: 0 5px;
    flex-direction: column;
    
}
`

const Layout = styled.div`
display: grid;
/* grid-template-columns: repeat(3, minmax(0, 2fr)); */
grid-template-areas: "leftside main rightside";
grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
gap: 25px;
margin: 25px 0;


@media (max-width: 768px){
    display: flex;
    flex-direction: column;
    padding: 0 5px;
}
`;

const mapStateToProps = (state) =>{
    return {
        user: state.userState.user,
    }
}


export default connect(mapStateToProps)(Home);