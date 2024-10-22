import pymongo
from os import getenv

client = pymongo.MongoClient('mongodb+srv://eimmo:DoVUqsphkzoiafvy@dev-eimmo.1jkei.azure.mongodb.net/feature_working?retryWrites=true&w=majority')

MONGO_DATABASE = 'feature_working'

db = client[MONGO_DATABASE]