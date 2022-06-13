import React, { useState, useEffect} from 'react'
import styled from 'styled-components';
import PostModal from './PostModal'
import { connect } from 'react-redux';
import { getArticalsAPI } from '../actions';
import ReactPlayer from "react-player"

const Mainside = (props)=> {
  useEffect(() =>{
    props.getArticals()
  }, [])
  const [showDiv, setShowDiv] = useState("close")
  const Changebox = (e) =>{
    // e.prevenDefault();
    // if(e.target !== e.currentTarget){
    //   return;
    // }
    console.log(e)
    
    switch(showDiv){
      case "open":
        setShowDiv("close")
        break;
      case "close":
        setShowDiv("open")
        break;
      default:
        setShowDiv("close")
        break;
    }

  }

  return (
    <>
    {
      props.articles.length === 0 ?
      (<p>there are no </p>) :
      (
    
    
   
    <Container>
    <CommanCard>
    <Box>
    <PhotoPost>
    {
      props.user && props.user.photoURL ?
      ( <img src={props.user.photoURL} alt="" /> )
      : (
        <img src="/images/user.svg" alt="" />
      )
    }
      
      <button onClick={Changebox}>Start a post</button>
    </PhotoPost>
    <AddData>
    <button>
      <img src="/images/photo-icon.svg" alt="" />
      <span>Photo</span>
    </button>
    <button>
    <img src="/images/video-icon.svg" alt="" />
      <span>Video</span>
    </button>
    <button>
    <img src="/images/event-icon.svg" alt="" />
      <span>Event</span>
    </button>
    <button>
    <img src="/images/artical-icon.svg" alt="" />
      <span>Write artical</span>
    </button>
    </AddData>
    </Box>
    </CommanCard>
    
      <Loader>
      {props.loading && <img src="./images/spinner.svg" alt="" />}
      {/* {console.log(props.articles[0].actor.date.time.toLocaleDateString())} */}
      {/* {console.log(props.articles.actor.date.toDate().toLocaleDateString())} */}
      {props.articles.length > 0 &&
      props.articles.map((data, index) =>(

      <Avatar key={index}>
      <ShareCard>
        <a href="">
          <img src={data.actor.images} alt="k" />
          <div>
            <span>{data.actor.title}</span>
            <span>{data.actor.description}</span>
            <span>{data.actor.date}</span>
          </div>
        </a>
        <button>
          <img src="/images/dots-icon.svg" alt="" />
        </button>
      </ShareCard>

      <Description>
        {data.description}
      </Description>

      <SharedImg>
        <a>
          {
            data.sharedImg ?(
              <img src={data.sharedImg} alt="images"/>
            )
            : (
              <ReactPlayer width={'100%'} url={data.video}/>
            )
            
          }
        </a>
      </SharedImg>
      <SocialCout>
        <li>
        <button>
          <img src="https://static-exp1.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt" alt="" />
          <img src="https://static-exp1.licdn.com/sc/h/cpho5fghnpme8epox8rdcds22" alt="" />
          <span>75</span>
        </button>
        </li>
        <li>
          <a>
            2 comments
          </a>
        </li>
      </SocialCout>
      <SocialAct>

      
      <button>
        <img src="/images/like-icon.svg" alt="" />
        <span>Like</span>
      </button>
      <button>
        <img src="/images/comment-icon.svg" alt="" />
        <span>Comment</span>
      </button>
      <button>
        <img src="/images/share-icon.svg" alt="" />
        <span>Share</span>
      </button>
      <button>
        <img src="/images/send-icon.svg" alt="" />
        <span>Send</span>
      </button>
      </SocialAct>
      </Avatar>


      ))}
      </Loader>
     
    
    <PostModal showmodel={showDiv} handleClick={Changebox}/>
    </Container>
    

    )
    }
    </>
  )
}
const Container = styled.div`
grid-area: "main";
`;

const CommanCard = styled.div`
text-align: center;
overflow: hidden;
margin-bottom: 8px;
position: relative;
border: none;
border-radius: 5px;
box-shadow: 0 0 0 1px rgba(0 0 0 / 15%), 0 0 0 rgba(0 0 0 / 20%);
background-color: #fff;
`;

const Box = styled(CommanCard)`
display: flex;
flex-direction: column;
color: #958b7b;
margin: 0 0 8px;
`;

const PhotoPost = styled.div`
padding: 12px;
display: flex;
align-items: center;

img {
  width: 47px;
  height: 47px;
  border-radius: 50%;
  margin-right: 8px;

}

button {
  flex-grow: 1;
  border: none;
  outline: none;
  height: 100%;
  padding: 12px 15px;
  border-radius: 999px;
  background-color: #fff;
  border: 1px solid rgba(0,0,0,0.4);
  text-align: left;

}
`;

const AddData = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 18px;

button {
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 5px;
  box-sizing: border-box;
  img {
    margin-right: 8px;
    
  }

  span {
    color: rgba(0,0,0,0.5);
    font-weight: 500;
    font-size: 15px;

  }

  &:hover {
    background-color: rgba(0,0,0,0.1);
    border-radius: 3px;
  }
}
`;

const Avatar = styled(CommanCard)`
padding: 0;
margin: 0 0 8px;
overflow: visible;

`;

const ShareCard  = styled.div`
padding-right: 40px;
padding: 12px 16px 0;
flex-wrap: nowrap;
display: flex;
align-items: center;
margin-bottom: 8px;

a {
  margin-right: 12px;
  flex-grow: 1;
  overflow: hidden;
  display: flex;
  text-decoration: none;

  img {
  width: 48px;
  height: 48px;
}

& > div {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-basis: 0;
  margin-left: 8px;  
  overflow: hidden;

  span {
    text-align: left;

    &:nth-child(1){
      color: rgba(0,0,0,1);
      font-weight: 700;
      font-size: 14px;

    }

    &:nth-child(n + 1){
      color:rgba(0,0,0,0.6);
      font-size: 12px;

    }
  }
}
  
}

button {
  position: absolute;
  top: 0px;
  right: 12px;
  outline: none;
  background-color: transparent;
  border: none;

}
`;

const Description = styled.div`
text-align: left;
padding: 0 16px;
/* margin-bottom: 8px; */
font-size: 14px;
color: rgba(0,0,0,0.9);
overflow: hidden;


`;

const SharedImg = styled.div`
/* padding: 0 16px; */
display: block;
position: relative;
background-color: #f9fafb;
width: 100%;
margin-top: 8px;
img {
  width: 100%;
  height: 100%;
  object-fit: contain;

}
`;

const SocialCout = styled.ul`
list-style: none;
margin: 0 16px;
border-bottom: 1px solid #e9e5df;
display: flex;
align-items: flex-start;
line-height: 1.3;
overflow: auto;
padding: 8px 0;
li {
  margin-left: 5px;
  font-size: 12px;

  button {
    display: flex;
    align-items: center;
    border: none;
    outline: none;

  }
  
}
`;

const SocialAct = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 5px 16px;


button {
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 8px 12px;
  outline: none;
  border: none;


  img {
    margin-right: 5px;
    height: auto;
    width: auto;
  }

  

  &:hover {
    background-color: rgba(0,0,0,0.1);
    border-radius: 4px;
  }
}
`;

const Loader = styled.div`
text-align: center;
& > img {
  width: 45px;
  height: 45px;
  background-color: transparent;

}
`;


const mapStateToProps = (state) =>{
  return {
    loading: state.articalState.loading,
    user: state.userState.user,
    articles : state.articalState.articles,
  }
};

const mapDispatchToProps = (dispatch) =>({
getArticals: ()=>dispatch(getArticalsAPI())
})

export default connect(mapStateToProps, mapDispatchToProps)(Mainside);