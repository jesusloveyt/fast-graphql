from enum import Enum
from mongoengine import Document, EmbeddedDocumentField
from mongoengine.fields import (
    StringField,
    ListField,
    ObjectIdField,
    EmbeddedDocument,
    EnumField
)

class Status(Enum):
    ACTIVE = 'ACTIVE'
    DEACTIVATED = 'DEACTIVATED'

class Task(EmbeddedDocument):
    name = StringField()
    text = StringField()
    status = EnumField(Status, default=Status.ACTIVE)

class Todo(Document):
    meta = {"collection": "todo"}
    ID = ObjectIdField()
    name = StringField()
    tasks = ListField(EmbeddedDocumentField(Task))
