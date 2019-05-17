const orientation = process.env.ORIENTATION || 'PORTRAIT' // LANDSCAPE|PORTRAIT

exports.config = Object.assign({}, require('./chrome').config, {
  // Docker for Mac host address:
  hostname: 'host.docker.internal',
  // Appium port:
  port: 4723,
  // Appium path:
  path: '/wd/hub',
  capabilities: [
    {
      maxInstances: 1,
      browserName: 'safari',
      platformName: 'iOS',
      useNewWDA: "true",
      platformVersion: process.env.PLATFORM_VERSION || '12.1',
      deviceName: process.env.DEVICE_NAME || 'iPhone SE',
      orientation
    }
  ],
  appium: {
    mjpegServerFramerate: 15,
    mjpegServerScreenshotQuality: 100
  },
  videos: {
    enabled: true,
    inputFormat: 'mjpeg',
    rotate: orientation === 'LANDSCAPE' ? 90 : undefined,
    port: 9100,
    startDelay: 500,
    stopDelay: 500
  },
  maximizeWindow: false,
  assetsDir: null
})
