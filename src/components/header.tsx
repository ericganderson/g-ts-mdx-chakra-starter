import { Box, Heading, Link } from '@chakra-ui/react'
import { Link as GatsbyLink } from 'gatsby'
import React from 'react'
import ThemeToggle from './theme-toggel'

interface Props {
  siteTitle: string
}

const Header = ({ siteTitle }: Props) => (
  <Box as='header'
      background='rebeccapurple'
      marginBottom='1.45rem'
  >
    <Box as='div'
        margin='0 auto'
        maxWidth='960px'
        padding='1.45rem 1.0875rem'
    >
      <Heading margin='0'>
        <Link as={GatsbyLink}
          to="/"
            color='white'
            textDecoration='none'
            _hover={{textDecor:'none'}}
        >
          {siteTitle}
        </Link>
      </Heading>
    </Box>
    <Box as='div' position='fixed' right='50px' top='50px' >
      <ThemeToggle/>
    </Box>
  </Box>
)

export default Header
