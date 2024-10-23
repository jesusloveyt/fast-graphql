from mongoengine import Document, EmbeddedDocumentField
from mongoengine.fields import (
    StringField,
    ObjectIdField,
    EmbeddedDocument,
)

class Author(EmbeddedDocument):
    name = StringField()
    email = StringField()

class Post(Document):
    meta = {"collection": "posts"}

    _id = ObjectIdField()
    title = StringField()
    content = StringField()
    author = EmbeddedDocumentField(Author)
