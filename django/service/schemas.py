import graphene
from graphene.relay import Node
from todo.models import Todo
from .mutations import CreateTodoMutation
from .types import TodoType, TaskType


class Mutations(graphene.ObjectType):
    create_todo = CreateTodoMutation.Field()

class Query(graphene.ObjectType):
    node = Node.Field()

    todos = graphene.List(TodoType)

    def resolve_todos(self, info):
        return Todo.objects.all()

schema = graphene.Schema(query=Query, mutation=Mutations, types=[TodoType, TaskType])
