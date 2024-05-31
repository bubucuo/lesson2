import WebView from 'react-native-webview';

export default function WebScreen({route}) {
  return (
    <WebView
      style={{margin: 20, padding: 20}}
      source={{uri: route.params.uri || 'https://www.kaikeba.com/'}}
      originWhitelist={['*']}
      //source={{html: '<h1>出错啦！</h1>'}}
    />
  );
}
