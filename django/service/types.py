from graphene import relay
from graphene_mongo import MongoengineObjectType
from todo.models import Todo, Task


class TaskType(MongoengineObjectType):
    class Meta:
        model = Task

class TodoType(MongoengineObjectType):
    class Meta:
        model = Todo
