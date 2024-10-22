import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Author = {
  __typename?: 'Author';
  email: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type AuthorInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type CreatePostResponse = {
  __typename?: 'CreatePostResponse';
  id: Scalars['String']['output'];
};

export type DeletePostResponse = {
  __typename?: 'DeletePostResponse';
  message: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  deletePost: DeletePostResponse;
  post: CreatePostResponse;
  updatePost: UpdatePostResponse;
};


export type MutationDeletePostArgs = {
  postId: Scalars['String']['input'];
};


export type MutationPostArgs = {
  author: AuthorInput;
  content: Scalars['String']['input'];
  title: Scalars['String']['input'];
};


export type MutationUpdatePostArgs = {
  author: AuthorInput;
  content: Scalars['String']['input'];
  postId: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type PageMeta = {
  __typename?: 'PageMeta';
  /** The next cursor to continue with. */
  nextCursor?: Maybe<Scalars['String']['output']>;
};

export type Post = {
  __typename?: 'Post';
  author: Author;
  content: Scalars['String']['output'];
  id: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type PostsResponse = {
  __typename?: 'PostsResponse';
  /** Metadata to aid in pagination. */
  pageMeta: PageMeta;
  /** The list of posts. */
  posts: Array<Post>;
};

export type Query = {
  __typename?: 'Query';
  post?: Maybe<Post>;
  posts: PostsResponse;
};


export type QueryPostArgs = {
  postId: Scalars['String']['input'];
};


export type QueryPostsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit: Scalars['Int']['input'];
};

export type UpdatePostResponse = {
  __typename?: 'UpdatePostResponse';
  id: Scalars['String']['output'];
};

export type PostListQueryVariables = Exact<{
  limit: Scalars['Int']['input'];
  cursor?: InputMaybe<Scalars['String']['input']>;
}>;


export type PostListQuery = { __typename?: 'Query', posts: { __typename?: 'PostsResponse', pageMeta: { __typename?: 'PageMeta', nextCursor?: string | null }, posts: Array<{ __typename?: 'Post', id: string, title: string, content: string, author: { __typename?: 'Author', name: string, email: string } }> } };

export type PostByIdQueryVariables = Exact<{
  postId: Scalars['String']['input'];
}>;


export type PostByIdQuery = { __typename?: 'Query', post?: { __typename?: 'Post', id: string, title: string, content: string, author: { __typename?: 'Author', name: string, email: string } } | null };

export type InsertPostMutationVariables = Exact<{
  author: AuthorInput;
  title: Scalars['String']['input'];
  content: Scalars['String']['input'];
}>;


export type InsertPostMutation = { __typename?: 'Mutation', post: { __typename?: 'CreatePostResponse', id: string } };

export type UpdatePostMutationVariables = Exact<{
  postId: Scalars['String']['input'];
  author: AuthorInput;
  title: Scalars['String']['input'];
  content: Scalars['String']['input'];
}>;


export type UpdatePostMutation = { __typename?: 'Mutation', updatePost: { __typename?: 'UpdatePostResponse', id: string } };

export type DeletePostMutationVariables = Exact<{
  postId: Scalars['String']['input'];
}>;


export type DeletePostMutation = { __typename?: 'Mutation', deletePost: { __typename?: 'DeletePostResponse', message: string } };


export const PostListDocument = gql`
    query postList($limit: Int!, $cursor: String) {
  posts(limit: $limit, cursor: $cursor) {
    pageMeta {
      nextCursor
    }
    posts {
      author {
        name
        email
      }
      id
      title
      content
    }
  }
}
    `;

/**
 * __usePostListQuery__
 *
 * To run a query within a React component, call `usePostListQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostListQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function usePostListQuery(baseOptions: Apollo.QueryHookOptions<PostListQuery, PostListQueryVariables> & ({ variables: PostListQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostListQuery, PostListQueryVariables>(PostListDocument, options);
      }
export function usePostListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostListQuery, PostListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostListQuery, PostListQueryVariables>(PostListDocument, options);
        }
export function usePostListSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<PostListQuery, PostListQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PostListQuery, PostListQueryVariables>(PostListDocument, options);
        }
export type PostListQueryHookResult = ReturnType<typeof usePostListQuery>;
export type PostListLazyQueryHookResult = ReturnType<typeof usePostListLazyQuery>;
export type PostListSuspenseQueryHookResult = ReturnType<typeof usePostListSuspenseQuery>;
export type PostListQueryResult = Apollo.QueryResult<PostListQuery, PostListQueryVariables>;
export const PostByIdDocument = gql`
    query postById($postId: String!) {
  post(postId: $postId) {
    author {
      name
      email
    }
    id
    title
    content
  }
}
    `;

/**
 * __usePostByIdQuery__
 *
 * To run a query within a React component, call `usePostByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostByIdQuery({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function usePostByIdQuery(baseOptions: Apollo.QueryHookOptions<PostByIdQuery, PostByIdQueryVariables> & ({ variables: PostByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostByIdQuery, PostByIdQueryVariables>(PostByIdDocument, options);
      }
export function usePostByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostByIdQuery, PostByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostByIdQuery, PostByIdQueryVariables>(PostByIdDocument, options);
        }
export function usePostByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<PostByIdQuery, PostByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PostByIdQuery, PostByIdQueryVariables>(PostByIdDocument, options);
        }
export type PostByIdQueryHookResult = ReturnType<typeof usePostByIdQuery>;
export type PostByIdLazyQueryHookResult = ReturnType<typeof usePostByIdLazyQuery>;
export type PostByIdSuspenseQueryHookResult = ReturnType<typeof usePostByIdSuspenseQuery>;
export type PostByIdQueryResult = Apollo.QueryResult<PostByIdQuery, PostByIdQueryVariables>;
export const InsertPostDocument = gql`
    mutation insertPost($author: AuthorInput!, $title: String!, $content: String!) {
  post(author: $author, title: $title, content: $content) {
    id
  }
}
    `;
export type InsertPostMutationFn = Apollo.MutationFunction<InsertPostMutation, InsertPostMutationVariables>;

/**
 * __useInsertPostMutation__
 *
 * To run a mutation, you first call `useInsertPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertPostMutation, { data, loading, error }] = useInsertPostMutation({
 *   variables: {
 *      author: // value for 'author'
 *      title: // value for 'title'
 *      content: // value for 'content'
 *   },
 * });
 */
export function useInsertPostMutation(baseOptions?: Apollo.MutationHookOptions<InsertPostMutation, InsertPostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertPostMutation, InsertPostMutationVariables>(InsertPostDocument, options);
      }
export type InsertPostMutationHookResult = ReturnType<typeof useInsertPostMutation>;
export type InsertPostMutationResult = Apollo.MutationResult<InsertPostMutation>;
export type InsertPostMutationOptions = Apollo.BaseMutationOptions<InsertPostMutation, InsertPostMutationVariables>;
export const UpdatePostDocument = gql`
    mutation updatePost($postId: String!, $author: AuthorInput!, $title: String!, $content: String!) {
  updatePost(postId: $postId, author: $author, title: $title, content: $content) {
    id
  }
}
    `;
export type UpdatePostMutationFn = Apollo.MutationFunction<UpdatePostMutation, UpdatePostMutationVariables>;

/**
 * __useUpdatePostMutation__
 *
 * To run a mutation, you first call `useUpdatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePostMutation, { data, loading, error }] = useUpdatePostMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *      author: // value for 'author'
 *      title: // value for 'title'
 *      content: // value for 'content'
 *   },
 * });
 */
export function useUpdatePostMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePostMutation, UpdatePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePostMutation, UpdatePostMutationVariables>(UpdatePostDocument, options);
      }
export type UpdatePostMutationHookResult = ReturnType<typeof useUpdatePostMutation>;
export type UpdatePostMutationResult = Apollo.MutationResult<UpdatePostMutation>;
export type UpdatePostMutationOptions = Apollo.BaseMutationOptions<UpdatePostMutation, UpdatePostMutationVariables>;
export const DeletePostDocument = gql`
    mutation deletePost($postId: String!) {
  deletePost(postId: $postId) {
    message
  }
}
    `;
export type DeletePostMutationFn = Apollo.MutationFunction<DeletePostMutation, DeletePostMutationVariables>;

/**
 * __useDeletePostMutation__
 *
 * To run a mutation, you first call `useDeletePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePostMutation, { data, loading, error }] = useDeletePostMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useDeletePostMutation(baseOptions?: Apollo.MutationHookOptions<DeletePostMutation, DeletePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePostMutation, DeletePostMutationVariables>(DeletePostDocument, options);
      }
export type DeletePostMutationHookResult = ReturnType<typeof useDeletePostMutation>;
export type DeletePostMutationResult = Apollo.MutationResult<DeletePostMutation>;
export type DeletePostMutationOptions = Apollo.BaseMutationOptions<DeletePostMutation, DeletePostMutationVariables>;