// import the libraries
import { API, graphqlOperation } from "aws-amplify"
import awsExports from "../aws-exports"
import * as queries from "../graphql/queries"

// initialise the API client
API.configure(awsExports)

// define a function that allows you to fetch for all vodAssets in your database
const fetchVideos = async () => API.graphql(graphqlOperation(queries.listVodAssets))

export default fetchVideos