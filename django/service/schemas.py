import graphene
from graphene.relay import Node
from todo.models import Todo
from posts.models import Post
from .mutations import CreateTodoMutation, CreatePostMutation
from .types import TodoType, TaskType, PostType


class Mutations(graphene.ObjectType):
    create_todo = CreateTodoMutation.Field()

    create_post = CreatePostMutation.Field()

class Query(graphene.ObjectType):
    node = Node.Field()

    todos = graphene.List(TodoType)

    def resolve_todos(self, info):
        return Todo.objects.all()
    
    posts = graphene.List(PostType)

    def resolve_posts(self, info):
        return Post.objects.all()
    
    post = graphene.Field(PostType, postId=graphene.String())

    def resolve_post(self, info, postId):
        return Post.objects.get(_id=postId)

schema = graphene.Schema(query=Query, mutation=Mutations, types=[TodoType, TaskType, PostType])
