import Container from '@components/elements/Container/Container';
import SEO from '@components/elements/SEO/SEO';
import Heading from '@components/elements/Text/Heading';
import Text from '@components/elements/Text/Text';
import Footer from '@components/modules/Footer/Footer';
import ProjectsSection from '@components/templates/ProjectsSection/ProjectsSection';
import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
  > div {
    padding: 70px 20px 40px;
    text-align: left;
    max-width: 1120px;
  }
`;

const ProjectsPage = () => {
  return (
    <>
      <SEO />
      <StyledContainer>
        <Heading
          size="h2"
          style={{
            marginBottom: '10px',
            color: 'var(--color-primary)',
          }}
        >
          Projects
        </Heading>
        <Text>Collection of web development side projects.</Text>
      </StyledContainer>
      <ProjectsSection id="projects" />
      <Footer />
    </>
  );
};

export default ProjectsPage;
