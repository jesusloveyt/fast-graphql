from graphene import relay
from graphene_mongo import MongoengineObjectType
from todo.models import Todo, Task
from posts.models import Post


class TaskType(MongoengineObjectType):
    class Meta:
        model = Task

class TodoType(MongoengineObjectType):
    class Meta:
        model = Todo

class PostType(MongoengineObjectType):
    class Meta:
        model = Post