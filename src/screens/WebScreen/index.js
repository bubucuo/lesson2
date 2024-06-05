/* eslint-disable react-native/no-inline-styles */
import WebView from 'react-native-webview';

export default function WebScreen({route}) {
  return (
    <WebView
      webviewDebuggingEnabled={true}
      style={{margin: 40, padding: 40}}
      source={{uri: route.params.uri || 'https://www.baidu.com/'}}
      originWhitelist={['*']}
      // source={{html: '<h1>出错啦！</h1>'}}
    />
  );
}
