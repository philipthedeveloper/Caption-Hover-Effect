import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Card = ({ data }) => {
  const captionRef = useRef();
  const overlayRef = useRef();

  const resizer = () => {
    console.log("r");
    if (captionRef.current && overlayRef.current) {
      // overlayRef.current.style.display = "none";
      overlayRef.current.style.transform = `translateY(${captionRef.current.scrollHeight}px)`;
    }
  };

  useEffect(() => {
    resizer();
    window.addEventListener("resize", resizer);

    return window.removeEventListener("resize", resizer);
  }, [captionRef?.current?.scrollHeight]);

  return (
    <CardContainer>
      <ImageContainer>
        <Image src={data.imgUrl} />
      </ImageContainer>
      <OverlayContainer ref={overlayRef}>
        <svg fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 40V0C40 22.0914 22.0914 40 0 40H40Z" fill="#24282c" />
        </svg>
        <CaptionContentContainer>
          <Header>
            <AuthorImage src={data.imgUrl} />
            <HeadingInfo>
              <Heading>{data.name}</Heading>
              <PostTime>{data.time}</PostTime>
            </HeadingInfo>
          </Header>
          <Caption ref={captionRef}>{data.description}</Caption>
        </CaptionContentContainer>
      </OverlayContainer>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  // background-color: #fff;
  border-radius: 2.5rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  box-shadow: 0px 4px 10px #181d28;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 2.5rem;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
`;

const OverlayContainer = styled.div`
  position: absolute;
  width: 100%;
  height: fit-content;
  // background-color: red;
  // background-color: #fff;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  border-bottom-left-radius: 2.5rem;
  border-bottom-right-radius: 2.5rem;
  // overflow: hidden;
  transition: 0.5s ease;

  &:hover {
    transform: translateY(0px) !important;
  }

  svg {
    // background-color: #24282c;
    margin-bottom: -1px;
    width: 2.5rem;
    height: 2.5rem;
  }
`;

const CaptionContentContainer = styled.div`
  width: 100%;
  border-top-left-radius: 2.5rem;
  background-color: #fff;
  background-color: #24282c;
`;

const Header = styled.header`
  display: flex;
  gap: 1rem;
  padding: 1.5rem;
`;
const AuthorImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  object-position: top;
`;
const HeadingInfo = styled.div`
  display: flex;
  flex-direction: column;
  // gap: 0.8rem;
`;
const Heading = styled.h2`
  color: #fff;
`;
const PostTime = styled.p`
  color: #fff;
`;

const Caption = styled.p`
  padding: 0rem 1.5rem 2rem;
  line-height: 130%;
  font-size: 0.9rem;
  color: #fff;
`;
export default Card;
