/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { Box, Link } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import Header from './header'

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  const { title } = useSiteMetadata()

  return (
    <>
      <Header siteTitle={title} />
      <Box as='div'
          margin='0 auto'
          maxWidth='960'
          padding='0 1.0875rem 1.45rem'
      >
        <Box as='main' fontSize='xl'>{children}</Box>
        <Box as='footer' marginTop='2em'>
          © {new Date().getFullYear()}, Built with
          {` `}
          <Link isExternal
           textDecor='underline'
           color='purple.600'
           fontSize='l'
           href="https://www.gatsbyjs.org">Gatsby</Link>
        </Box>
      </Box>
    </>
  )
}

export default Layout
