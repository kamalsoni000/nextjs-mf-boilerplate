const NextFederationPlugin = require('@module-federation/nextjs-mf');

const remotes = (isServer)=>{
  return {
    home: `home@http://localhost:3000/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
    about: `about@http://localhost:3001/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
    contacts: `contacts@http://localhost:3002/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
  }
}

module.exports = {
  swcMinify: true,
  images: {
    domains: ["images.unsplash.com", "cdn.pixabay.com", "images.pexel.com","firebasestorage.googleapis.com","images.pexels.com"],
    unoptimized: true,
  },
  compiler: {
    // Remove `console.*` output except `console.error`
    // removeConsole: {
    //   exclude: ['error'],
    // },
    // Uncomment this to suppress all logs.
    // removeConsole: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
   },
   typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: 'home',
        filename: 'static/chunks/remoteEntry.js',
        remotes: remotes(isServer),
        exposes: {
         
        },
        shared: {},
        extraOptions: {
          exposePages: true,
          enableImageLoaderFix: true,
          enableUrlLoaderFix: true,
        },
      }),
    );

    return config;
  },
};