module.exports = {
  rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/:path*'
      },
      {
        source: '/:path*',
        destination: 'http://localhost:4000/:path*'
      }, 
      {
        source: '/login', destination: 'http://localhost:4000/'
      }
    ]
  }
}
