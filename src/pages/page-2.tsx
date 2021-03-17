import { Heading, Link, Text } from '@chakra-ui/react'
import { Link as GatsbyLink } from 'gatsby'
import React from 'react'
import SEO from 'react-seo-component'
import { useSiteMetadata } from '../hooks/use-site-metadata'

export default () => {
  const {
    title,
    description,
    siteUrl,
    image,
    siteLanguage,
    siteLocale,
    twitterUsername,
  } = useSiteMetadata()
  return (
    <>
      <SEO
        title={`Page Two`}
        titleTemplate={title}
        description={description || ``}
        image={`${siteUrl}${image}`}
        pathname={siteUrl}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
      />
      <Heading>Hi from the second page</Heading>
      <Text>Welcome to page 2</Text>
      <Link as={GatsbyLink} textDecor='underline' color='purple.500' to="/">Go back to the homepage</Link>
    </>
  )
}
