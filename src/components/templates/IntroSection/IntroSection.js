import Box from '@components/elements/Box/Box';
import Button from '@components/elements/Button/Button';
import Container from '@components/elements/Container/Container';
import Heading from '@components/elements/Text/Heading';
import Paragraph from '@components/elements/Text/Paragraph';
import { useTheme } from '@components/templates/ThemeProvider';
import { breakpoints } from '@lib/theme/GlobalStyles';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 30px 20px 90px;
    max-width: 100%;

    @media screen and (min-width: ${breakpoints.sm}) {
      flex-direction: row;
      max-width: 768px;
    }

    @media screen and (min-width: ${breakpoints.md}) {
      max-width: 992px;
    }

    @media screen and (min-width: ${breakpoints.lg}) {
      max-width: 1200px;
    }
  }
`;

const Buttons = styled(Box)`
  @media screen and (min-width: ${breakpoints.sm}) {
    justify-content: flex-start;
  }
`;

const Headline = styled.div`
  text-align: center;
  max-width: 340px;
  margin-bottom: 30px;

  @media screen and (min-width: ${breakpoints.sm}) {
    text-align: left;
    margin-bottom: 0px;
  }
`;

const Avatar = styled.img`
  width: 335px;
  height: 198px;
  animation: fadeIn 0.5s ease-in-out;

  @media screen and (min-width: ${breakpoints.md}) {
    width: 534px;
    height: 315px;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const IntroSection = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          email
          description
        }
      }
      contentfulAsset(title: { eq: "resume" }) {
        file {
          url
        }
      }
    }
  `);
  const { avatar } = useTheme();
  const { author, email, description } = data.site.siteMetadata;
  const { url: resumeUrl } = data.contentfulAsset.file;
  return (
    <StyledContainer>
      <Headline>
        <Heading size="h1" style={{ margin: 0 }}>
          {author}
        </Heading>
        <Paragraph style={{ fontSize: '18px' }}>{description}</Paragraph>
        <Buttons justifyContent="center">
          <Button link={`mailto:${email}`} target="_self">
            Email Me
          </Button>
          <Box mr="10px" />
          <Button link={resumeUrl} fill>
            View Resume
          </Button>
        </Buttons>
      </Headline>
      {avatar ? <Avatar src={avatar} alt="fabian-avatar" /> : null}
    </StyledContainer>
  );
};

export default IntroSection;
