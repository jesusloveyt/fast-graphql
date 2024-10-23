import pymongo

client = pymongo.MongoClient('mongodb+srv://eimmo:DoVUqsphkzoiafvy@dev-eimmo.1jkei.azure.mongodb.net/feature_working?retryWrites=true&w=majority')

db = client['feature_working']