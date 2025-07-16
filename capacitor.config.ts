import { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'com.correctimage.kidsgame',
  appName: 'Correct Image',
  webDir: 'out',
  bundledWebRuntime: false,
  android: {
    buildOptions: {
      keystorePath: './android/keystore/my-release-key.keystore',
      keystorePassword: 'android',
      keystoreAlias: 'my-key-alias',
      keystoreAliasPassword: 'android',
      releaseType: 'APK'
    }
  }
}

export default config
