import Head from 'next/head'




interface Props {
  posts: any
}

export default function Home(props:Props){


  return (
    <>
      {/* <Head>
        <title>Home</title>
        
      </Head> */}
      <main>
      <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">I</span>
            <span className="block text-indigo-600">Quit.</span>
          </h1>
          <p className="mt-3 mb-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            <span>Want to quit your corporate job but don&apos;t have the balls? </span> <br></br>
            <span>Quit vicariously with QuitterDAO. 🤪 </span>
            </p>
            <div className="mb-3 mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
                <ul className="flex space-x-4">
                  <li className="flex items-center space-x-1">
                      <a href="https://discord.gg/HugE8Xw2ak" className="text-sm font-medium text-gray-500">
                      <img src="https://img.icons8.com/ios-glyphs/30/000000/discord-logo.png"/></a>
                  </li>
                  <li className="flex items-center space-x-1">
                      <a href="https://twitter.com/QuitterDAO" className="text-sm font-medium text-gray-500">
                      <img src="https://img.icons8.com/ios-glyphs/30/000000/twitter--v1.png"/></a>
                  </li>
                  <li className="flex items-center space-x-1">
                      <a href="#" className="text-sm font-medium text-gray-500">
                      <img src="https://img.icons8.com/ios-glyphs/30/000000/carton-of-orange-juice.png"/></a>
                  </li>
                  <li className="flex items-center space-x-1">
                      <a href="#" className="text-sm font-medium text-gray-500">
                      <img src="https://img.icons8.com/ios-filled/30/000000/sail-boat.png"/></a>
                  </li>
                  </ul>
                  
                </div>
        </div>
      </div>

    <div className="relative">
      <div className="absolute inset-0 flex flex-col" aria-hidden="true">
        <div className="flex-1"></div>
        {/* <div className="flex-1 w-full bg-gray-800"></div> */}
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <img className="mt-8 mb-8 relative rounded-lg shadow-lg" src="https://s2.loli.net/2022/05/03/FqEGwDclmVj1eWb.png" alt="App screenshot"/>
      </div>
    </div>
  
  
  </main>
     

    </>
  )
}

