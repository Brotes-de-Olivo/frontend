import gql from 'graphql-tag'

export const SEND_EMAIL = gql`
  mutation SendEmail(
    $name: String!
    $lastName: String!
    $email: String!
    $phoneNo: String
    $message: String!
  ) {
    sendEmail(
      name: $name
      lastName: $lastName
      email: $email
      phoneNo: $phoneNo
      message: $message
    ) {
      message
    }
  }
`
