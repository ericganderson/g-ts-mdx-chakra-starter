import { Text } from '@chakra-ui/react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'

interface Props {
  data:{
    mdx:{
      body:string, 
      frontmatter:{
        date: string, 
        title:string
      }
    }
  } 
}

export default function PostPage({ data }: Props) {
  const {
    body,
    frontmatter: {title}
  } = data.mdx
  return (
    <>
      <Text fontSize="4x1">{title}</Text>
      <MDXRenderer>{body}</MDXRenderer>
    </>
  )
}

export const query = graphql`
  query POST_BY_SLUG($slug: String) {
    mdx(slug: { eq: $slug }) {
      id
      slug
      body
      frontmatter {
        date
        title
      }
    }
  }
`
