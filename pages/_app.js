import '../styles/globals.css' // 必须有两个点，表示跳出 pages 文件夹找到 styles

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
