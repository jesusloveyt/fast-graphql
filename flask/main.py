from flask import Flask
import strawberry
from strawberry.flask.views import GraphQLView
from schemas import Query,Mutation

schema = strawberry.Schema(query=Query, mutation=Mutation)

app = Flask(__name__)
app.add_url_rule(
    "/graphql",
    view_func=GraphQLView.as_view("graphql_view", schema=schema),
)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8005)
