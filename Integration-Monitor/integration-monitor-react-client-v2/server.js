import webpack from "webpack"
import WebpackDevServer from "webpack-dev-server"
import config from './config'

const location = {
  protocol: "http://",
  host: "127.0.0.1",
  port: 8081,
  open: true
}

const serverUrl = `${ location.protocol }${ location.host }:${ location.port }`


const server = new WebpackDevServer(webpack(config), {
  contentBase: config.output.publicPath,
  hot: true,
  stats: {
    colors: true,
    chunkModules: false,
    assets: true,
  },
  noInfo: true,
  historyApiFallback: true,
})

server.listen(
  location.port,
  location.host,
  () => {
    console.log(`open ${ serverUrl } in your browser`)
  }
)
