from enum import Enum

import graphene
from todo.models import Todo
from posts.models import Author, Post
from .types import TodoType, PostType

class TaskInput(graphene.InputObjectType):
    name = graphene.String()
    text = graphene.String()

class CreateTodoMutation(graphene.Mutation):
    class Arguments:
        name = graphene.String(required=True)
        tasks = graphene.List(TaskInput)

    todo = graphene.Field(TodoType)

    def mutate(self, info, name, tasks):

        my_todo = Todo(name=name, tasks=tasks)
        my_todo.save()
        return CreateTodoMutation(todo=my_todo)


class AuthorInput(graphene.InputObjectType):
    name = graphene.String()
    email = graphene.String()


class CreatePostMutation(graphene.Mutation):
    class Arguments:
        title = graphene.String()
        content = graphene.String()
        author = AuthorInput()

    post = graphene.Field(PostType)

    def mutate(self, info, title, content, author):
        author = Author(name=author.name, email=author.email)
        new_post = Post(title=title, content=content, author=author)
        new_post.save()
        # return {'post': new_post}
        return CreatePostMutation(post=new_post)