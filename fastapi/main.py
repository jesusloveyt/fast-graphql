import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import strawberry
from strawberry.fastapi import GraphQLRouter
from schemas import Query,Mutation

schema = strawberry.Schema(query=Query, mutation=Mutation)

def create_app():
    app = FastAPI()
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )
    graphql_app = GraphQLRouter(schema)
    app.include_router(graphql_app, prefix="/graphql")
    return app

if __name__ == "__main__":
    uvicorn.run(create_app, host="0.0.0.0", port=8007)
