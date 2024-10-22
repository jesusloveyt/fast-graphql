# Skills
* FastAPI with GraphQL
* Flask with GraphQL
* Django with GraphQL (VueJS, Angular)
* React with GraphQL

# GraphQL packages
* graphql-core
* Graphene
* Ariadne

# FastAPI / Flask

* 가상 환경 : virtualenv fastapi --python=python3.8 (python 3.13 이상에서 오류)

## 관련 패키지 
* graphql-core
* strawberry-graphql

# React
## library
* npm i -s @apollo/client graphql (apollo-boost @apollo/react-hooks)
* npm i -s -D @graphql-codegen/cli @graphql-codegen/introspection @graphql-codegen/typescript-react-apollo

## codegen
* add codegen.yml
* add ~~.graphql
* scripts : "codegen": "graphql-codegen --config codegen.yml"
* npm run codegen

## in code
* use ApolloClient
* auto generated hook (ex: usePostListQuery)