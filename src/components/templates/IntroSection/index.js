import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Button from '../../atoms/Button'
import Layout from '../../atoms/Layout'
import avatar from '../../../assets/images/avatar.svg'
import './styles.scss'

const IntroSection = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
      contentfulAsset (title: { eq: "resume" }) {
        file {
          url
        }
      }
    }
  `)
  const { url: resumeUrl } = data.contentfulAsset.file
  return (
    <Layout innerClassName="IntroSection">
      <div className="IntroSection__Headline">
        <h1 className="IntroSection__Title">{data.site.siteMetadata.author}</h1>
        <p className="IntroSection__Subtitle">Software Engineer based in Hong Kong with focus on Front-end Dev and Human-centered Design.</p>
        <div className="IntroSection__Buttons">
          <Button link="#projects" target="_self">View Projects</Button>
          <Button link={resumeUrl} fill>View Resume</Button>
        </div>
      </div>
      <img className="IntroSection__Avatar" src={avatar} alt="fabian-avatar"/>
    </Layout>
  )
}

export default IntroSection