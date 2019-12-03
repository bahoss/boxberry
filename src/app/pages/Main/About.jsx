import React, { Component } from "react";
import styled from "styled-components";
import Container from "../../components/Container";
import bgImg from "../../../images/authBg.png";
import playIcon from "../../../images/playIcon.png";
import trophyIcon from "../../../images/trophyIcon.png";
import newspaperIcon from "../../../images/newspaperIcon.png";
import pageIcon from "../../../images/pageIcon.png";

import { aboutData } from "../../data";

const VideoBanner = styled.div`
  background-color: #ce0f46;
  background-image: url(${bgImg});
  @media (max-width: 991px) {
    display: none;
  }
`;

const VideoBannerContainer = styled(Container)`
  padding: 30px 0;
`;

const TitleWrapper = styled.div``;

const VideoTitle = styled.h3`
  margin: 0;
  font-family: "CeraPro-Medium", sans-serif;
  font-size: 20px;
  color: #fff;
  font-weight: 500;
  line-height: 1;
`;

const VideoSubTitle = styled.h4`
  margin: 0;
  font-family: "CeraPro-Medium", sans-serif;
  font-size: 20px;
  color: #ffd44f;
  font-weight: 500;
  line-height: 1;
  margin-top: 20px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  font-family: "CeraPro-Italic", sans-serif;
  font-size: 14px;
  color: #fff;
  border: none;
  background: transparent;
  outline: none;
  cursor: pointer;
`;

const PlayIcon = styled.img`
  margin-left: 10px;
  background: #fff;
  padding: 12px 11px 12px 14px;
  border-radius: 50%;
`;

const ContentContainer = styled(Container)`
  align-items: flex-start;
  flex-direction: column;
`;

const Title = styled.h3`
  margin-top: 30px;
  margin-bottom: 20px;
  font-family: "CeraPro-Medium", sans-serif;
  font-size: 30px;
  font-weight: 500;
  color: #11223e;
`;

const Description = styled.p`
  margin: 0;
  font-family: "CeraPro-Regular", sans-serif;
  font-size: 14px;
`;

const ContentsWrapper = styled.div`
  display: flex;
  margin-top: 70px;
`;

const Content = styled.div`
  width: 24%;
`;

const SubTitle = styled.h3`
  font-family: "CeraPro-Medium", sans-serif;
  font-size: 20px;
  font-weight: 500;
  color: #ed1651;
`;

const ContentDesc = styled.p`
  margin-top: 20px;
  font-family: "CeraPro-Regular", sans-serif;
  font-size: 14px;
  opacity: 0.6;
`;

const Steps = styled.div`
  margin-top: 20px;
`;

const Step = styled.span`
  width: 210px;
  height: 65px;
  text-align: center;
  line-height: 65px;
  display: inline-block;
  margin-right: 20px;
  text-transform: uppercase;
  font-family: "CeraPro-Medium", sans-serif;
  font-size: 30px;
  font-weight: 500;
  border-radius: 5px;
  border: solid 1px rgba(0, 0, 0, 0.1);
  background-color: rgba(5, 166, 225, 0.1);
  color: #11223e;
  opacity: ${props => (props.isActive ? "1" : "0.4")};
`;

const StepTitle = styled.h3`
  margin-top: 30px;
  font-family: "CeraPro-Medium", sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #11223e;
`;

const StepDescription = styled.p`
  margin-top: 20px;
  font-family: "CeraPro-Regular", sans-serif;
  font-size: 14px;
`;

const LinksWrap = styled.div`
  margin-top: 30px;
  display: flex;
`;

const AddRequestLink = styled.a`
  width: 215px;
  height: 58px;
  border-radius: 10px;
  background-color: #00a7e1;
  font-family: "CeraPro-Medium", sans-serif;
  font-size: 20px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.3s;
  text-align: center;
  line-height: 58px;
  :hover {
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  }
  :focus {
    background-color: #0093c5;
  }
`;

const VoteLink = styled(AddRequestLink)`
  margin-left: 20px;
  background-color: #00a24d;
  :focus {
    background-color: #016a33;
  }
`;

const BottomLinks = styled.div`
  margin-top: 60px;
  margin-bottom: 60px;
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const LinkWithIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LinkIcon = styled.div`
  width: 90px;
  height: 90px;
  background: #ed1651;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.img``;

const LinkTitle = styled.h3`
  margin-top: 28px;
  font-family: "CeraPro-Medium", sans-serif;
  font-size: 20px;
  color: #11223e;
  font-weight: 500;
`;

const LinkDescription = styled.p`
  margin-top: 22px;
  font-family: "CeraPro-Regular", sans-serif;
  font-size: 14px;
  line-height: 1.5;
  opacity: 0.6;
  text-align: center;
`;

const LinkMore = styled(AddRequestLink)`
  margin-top: 20px;
  width: 180px;
`;

const AboutQuestions = () => (
  <>
    <Title>Что дает этот конкурс?</Title>
    <Description>
      Отсюда естественно следует, что потребительская база стремительно экономит
      конструктивный поведенческий таргетинг. <br></br>
      Таргетирование, суммируя приведенные примеры, изменяет бренд, не считаясь
      с затратами.
    </Description>
    <ContentsWrapper>
      {aboutData.map(elem => (
        <Content>
          <SubTitle>{elem.title}</SubTitle>
          <ContentDesc>{elem.description}</ContentDesc>
        </Content>
      ))}
    </ContentsWrapper>
  </>
);

export default class About extends Component {
  render() {
    const { steps } = this.props;
    const filteredSteps = steps.filter(step => step.is_active != null);
    const activeStep = filteredSteps[0];
    console.log(activeStep);
    return (
      <div>
        <VideoBanner>
          <VideoBannerContainer>
            <TitleWrapper>
              <VideoTitle>ПРОГРАММА ПРИЗНАНИЯ ДОСТИЖЕНИЙ 2019 года</VideoTitle>
              <VideoSubTitle>Уже проголосовало 250 человек</VideoSubTitle>
            </TitleWrapper>
            <Button>
              Смотреть видео презентацию конкурса
              <PlayIcon src={playIcon}></PlayIcon>
            </Button>
          </VideoBannerContainer>
        </VideoBanner>
        <ContentContainer>
          <Title>Этапы голосования</Title>
          <Description>
            Отсюда естественно следует, что потребительская база стремительно
            экономит конструктивный поведенческий таргетинг. <br></br>
            Таргетирование, суммируя приведенные примеры, изменяет бренд, не
            считаясь с затратами.
          </Description>

          <Steps>
            {steps.map(step => (
              <Step isActive={step.is_active != null}>{step.name}</Step>
            ))}
          </Steps>
          <StepTitle>
            {activeStep && `${activeStep.name}:${activeStep.description}`}
          </StepTitle>
          <StepDescription>
            Отсюда естественно следует, что потребительская база стремительно
            экономит конструктивный поведенческий таргетинг. Таргетирование,
            суммируя приведенные примеры, изменяет бренд, не считаясь с
            затратами. Отсюда естественно следует, что потребительская база
            стремительно экономит конструктивный поведенческий таргетинг.
            Таргетирование, суммируя приведенные примеры, изменяет бренд, не
            считаясь с затратами.
          </StepDescription>
          <LinksWrap>
            <AddRequestLink>Подать заявку</AddRequestLink>
            <VoteLink>Проголосовать</VoteLink>
          </LinksWrap>
          <BottomLinks>
            <LinkWithIcon>
              <LinkIcon>
                <Icon src={trophyIcon}></Icon>
              </LinkIcon>
              <LinkTitle>Номинанты</LinkTitle>
              <LinkDescription>
                Пацаны вообще ребята и вообще <br /> Тут должно быть описание
                какое-либо
              </LinkDescription>
              <LinkMore>Подробнее</LinkMore>
            </LinkWithIcon>
            <LinkWithIcon>
              <LinkIcon>
                <Icon src={pageIcon}></Icon>
              </LinkIcon>
              <LinkTitle>Итоги голосования</LinkTitle>
              <LinkDescription>
                Пацаны вообще ребята и вообще <br /> Тут должно быть описание
                какое-либо
              </LinkDescription>
              <LinkMore>Подробнее</LinkMore>
            </LinkWithIcon>
            <LinkWithIcon>
              <LinkIcon>
                <Icon src={newspaperIcon}></Icon>
              </LinkIcon>
              <LinkTitle>Новости</LinkTitle>
              <LinkDescription>
                Пацаны вообще ребята и вообще <br /> Тут должно быть описание
                какое-либо
              </LinkDescription>
              <LinkMore>Подробнее</LinkMore>
            </LinkWithIcon>
          </BottomLinks>
        </ContentContainer>
      </div>
    );
  }
}
