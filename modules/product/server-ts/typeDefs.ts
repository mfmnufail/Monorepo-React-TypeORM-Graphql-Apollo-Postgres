import {  gql } from  'apollo-server-express';

export const typeDefs = gql`

type Query {
  hello(name: String): String!
}

type Outlet {

  name: String
  address: String
  city: String
  state: String
  country: String
  postal_code: String
  phone: String
  taxrate_id: Int
  email: String
  business_id: Int
  tax_rate: Int
  link_type: String
  linked_outlets: String
  copy_outlet: Int
}

type Error{
  path: String!
  message: String!
}

 type Mutation {
  # Create new outlet
  addOutlet(
    name: String!,
    address: String,
    city: String,
    state: String,
    country: String,
    postal_code: String,
    phone: String,
    taxrate_id: Int,
    email: String,
    business_id: Int,
    tax_rate: Int,
    link_type: String,
    linked_outlets: String,
    copy_outlet: Int
  ): Boolean
 
}



`;
