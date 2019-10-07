import { gql } from 'apollo-boost';

export const REPOS_QUERY = gql`
  query listRepos($queryString: String!, $after: String, $before: String, $first: Int, $last: Int) {
    search(query:$queryString, type:REPOSITORY, first:$first, last:$last, after:$after, before:$before) {  
      repositoryCount
      edges {
        node {
          ... on Repository {
            id,
            name,
            description,
            url,
            licenseInfo {
              id,
              key,
              name
            },
						stargazers {
              totalCount
            }						
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
  }
`

export const LICENSES_QUERY = gql`
  query {
    licenses {
      id,
      key,
      name
    }
  }
`
