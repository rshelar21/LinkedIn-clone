import React, { useState } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import { connect } from "react-redux";

import firebase from 'firebase/compat/app';

import { postPhotoAPI } from "../actions";

const PostModal = (props) =>{
    const [editText, setEditText] = useState("")
    const [shareImage, setShareImage] = useState("")
    const [videoLink, setVideoLink] = useState("")
    const [assets, setAssets] = useState("")
    const textValue = (e) =>{
        setEditText(e.target.value)
        // console.log(e.target.value)

    }
    
    const handleChange = (e) => {
        const image = e.target.files[0]
        console.log(e)
        

        if (image === "" || image === undefined) {
            alert(`not an image, the file is a ${typeof(image)}`)
            return;
        }
        setShareImage(image)
    }
    const ChangeAssets = (area) => {
        setShareImage("");
        setVideoLink("");
        setAssets(area)
    }

    const postArtical = (e) =>{
        console.log('first') 
        e.preventDefault();
        if(e.target !== e.currentTarget){
            console.log("hi")
            return;
        }
        // const dtTime = new Date(); firebase.firestore.Timestamp.now()
        const paylod = {
            image: shareImage,
            video: videoLink,
            user: props.user,
            description: editText,
            timestamp: new Date().toLocaleDateString(),

        };
        

        props.postArtical(paylod)
        reset(e)

    }

    const reset = (e) =>{
        setEditText("");
        setShareImage("");
        setVideoLink("");
        props.handleClick(e);
    }
    return(
        <>
        { props.showmodel === "open" &&
        <Container>
        <Content>
        <Header>
            <h2>Create a post</h2>
            <button onClick={(e) => reset(e)}>
                <img src="/images/close-icon.svg" alt="" />
            </button>
        </Header>
        <ShareContent>
        <UserInfo>
        {
            props.user.photoURL ? (
                <img src={props.user.photoURL} alt="" />
            ):
            (
                <img src="/images/user.svg" alt="" />
            )
        }
        {
            props.user.displayName ? (
                <span>{props.user.displayName}</span>
            ) : (
                <span>Name</span>
                
            )
        }
        </UserInfo>
        <Editor>
        <textarea onChange={textValue} value={editText} 
        placeholder='What do you want to talk aout?'
        autoFocus={true}></textarea>
        { assets === "image" ? (
        <UploadPh>
            <input type="file" accept="images/*"
            name="images" id="file"
            style={{display: "none" }}
            onChange={handleChange}    
            />
            <p>
            <label htmlFor="file">Select an images to share</label>
        </p>
        {shareImage && <img src ={URL.createObjectURL(shareImage)}/>}
        </UploadPh>
        ):( 
            assets === "media" && (
        <>
            <input type="text" 
                placeholder="Please input a video Link"
                value={videoLink}
                onChange={(e) => setVideoLink(e.target.value)}
            />
            {
                videoLink && (
                    <ReactPlayer width={"100%"} url={videoLink}/>
                )
            }
        </>
        )
        
        )}
        
        </Editor>
        </ShareContent>
        <ShareCreate>
            <Assets>
                <AssetsBtn onClick={() => ChangeAssets("image")}>
                    <img src="/images/gallery.svg" alt="" />
                </AssetsBtn>
                <AssetsBtn  onClick={() => ChangeAssets("media")}>
                    <img src="/images/video.svg" alt="" />
                </AssetsBtn>
            </Assets>
            <Comment>
                <AssetsBtn>
                    <img src="/images/anyone.svg" alt="" />
                    <span>Anyone</span>
                </AssetsBtn>
            </Comment>
            <PostBtn disabled={!editText ? true :false} onClick={(e) => postArtical(e)}>
                Post
            </PostBtn>
        </ShareCreate>
        </Content>
        </Container>
        }
            
        </>
    )
}

const Container = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
color: black;
z-index: 9999;
bottom: 0;
background-color: rgba(0,0,0,0.8);
animation: fadeIn 0.3s ease-in;
`;

const Content = styled.div`
width: 100%;
max-width: 552px;
background-color: #fff;
max-height: 90%;
border-radius: 5px;
position: relative;
display: flex;
flex-direction: column;
top: 32px;
margin: 0 auto;
overflow: initial;
`;

const Header = styled.div`
display: block;
padding: 16px 20px;
display: flex;
justify-content: space-between;
line-height: 1.5;
align-items: center;
border-bottom: 1px solid rgba(0,0,0,0.15);
font-size: 16px;
color: rgba(0,0,0,0.6);

h2 {
    font-size: 16px;
    font-weight: 400;
}

button {
    height: 40px;
    width: 40px;
    min-width: auto;
    color: rgba(0,0,0,0.15);
    border: none;
    outline: none;
    background-color: #fff;
    border-radius: 50%;

    &:hover {
        background-color: rgba(0,0,0,0.05);
    }


    svg,
    img {
        pointer-events: none;
    }
}
`
const ShareContent = styled.div`
display: flex;
flex-direction: column;
flex-grow: 1;
overflow-y: auto;
vertical-align: baseline;
background: transparent;
padding: 8px 12px ;

`
const UserInfo = styled.div`
display: flex;
align-items: center;
padding: 12px 24px;

svg, 
img {
    width: 48px;
    height: 48px;
    background-clip: content-box;
    border-radius: 50%;
    border: 2px solid transparent;
}

span {
    font-size: 16px;
    margin-left: 5px;
    font-weight: 600;
    line-height: 1.5;
}

`;
const ShareCreate = styled.div`
display: flex;
justify-content: space-between;
padding: 12px 24px 12px 16px;
`;
const AssetsBtn = styled.button`
display: flex;
align-items: center;
height: 40px;
min-width: auto;
color: rgba(0,0,0,0.5);
border: none;
outline: none;
/* margin-right: 15px; */
background-color: transparent;

span {
    margin-left: 3px;
}


`
const Assets = styled.div`
display: flex;
align-items: center;
padding-right: 8px;
${AssetsBtn} {
    width: 40px;
}
`

const Comment = styled.div`
margin-right: auto;
padding-left: 8px;
border-left: 1px solid rgba(0,0,0,0.15);
${AssetsBtn} {
    margin-left: 5px;
}


`;

const PostBtn = styled.button`
padding-left: 16px;
padding-right: 16px;
border-radius: 20px;
letter-spacing: 1.5;
font-weight: 700;
background-color: ${(props) => (props.disabled ? "rgba(0,0,0,0.1)" : "#0a66c2")};
border: none;
outline: none;
color: ${(props) => (props.disabled ? "rgba(0,0,0,0.5)" : "#fff")};
&:hover {
    background-color: #004182;
}
`;

const Editor  = styled.div`
padding: 12px 24px;

textarea {
    width: 100%;
    resize: none;
    min-height: 100px;
}
input {
    width: 100%;
    font-size: 16px;
    margin-bottom: 20px;
    height: 35px;
}

`;

const UploadPh = styled.div`
text-align: center;


img {
    width: 100%;
    
    
}

`

const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    }
}

const mapDispatchToProps = (dispatch) =>({
    postArtical: ( payload) => dispatch(postPhotoAPI(payload))
    

})




export default connect(mapStateToProps, mapDispatchToProps) (PostModal);