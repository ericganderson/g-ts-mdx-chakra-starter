import { ArrowForwardIcon, EmailIcon } from '@chakra-ui/icons'
import { Box, Button, Heading, Link, Text } from '@chakra-ui/react'
import { Link as GatsbyLink } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
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
        title={`Home`}
        titleTemplate={title}
        description={description || ``}
        image={`${siteUrl}${image}`}
        pathname={siteUrl}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
      />
      <Heading>Hi people</Heading>
      <Button size="md" colorScheme="blue" color="red" rightIcon={<EmailIcon />} leftIcon={<ArrowForwardIcon/>} variant="outline">buton</Button>
      <Text my={5}>Welcome to your new Gatsby site.</Text>
      <Text my={5}>Now go build something great.</Text>
      <Box as='div' maxWidth='300px' marginBottom='1.45rem'>
        <StaticImage src="../images/gatsby-astronaut.png" alt="gatsty astronaut" />
      </Box>
      <Link as={GatsbyLink} textDecor='underline' color='purple.500' to="/page-2/">Go to page 2</Link>
    </>
  )
}
