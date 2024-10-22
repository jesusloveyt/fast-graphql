import pymongo
from os import getenv
from dotenv import load_dotenv


load_dotenv()

# client = pymongo.MongoClient(
#     host=getenv("MONGO_HOST", default='localhost'),
#     port=int(getenv("MONGO_PORT", default=27017)),
#     username=getenv("MONGO_USERNAME", default='root'),
#     password=getenv("MONGO_PASSWORD", default='root')
# )

client = pymongo.MongoClient(
    getenv("MONGO_URI", default='mongodb+srv://eimmo:DoVUqsphkzoiafvy@dev-eimmo.1jkei.azure.mongodb.net/feature_working?retryWrites=true&w=majority')
)

MONGO_DATABASE = getenv("MONGO_DATABASE", default="feature_working")

db = client[MONGO_DATABASE]