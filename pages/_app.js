import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <div className='bg-gray-100 h-screen p-5'>
    <Component {...pageProps} />    
  </div> 
    
}

export default MyApp
