import Link from "next/link";

import "~/styles/app.css";

const App = ({ Component, pageProps }) => {
  return (
    <div className="w-full">
      <div className="bg-pink-500 leading-none p-4 text-center">
        <Link href="/">
          <a className="text-white hover:text-yellow-300">Proof of Concept for Amanda</a>
        </Link>
      </div>
      <Component {...pageProps} />
      <div className="bg-gray-300 leading-none p-4 text-center">
        Copyright {new Date().getFullYear()}, all rights reserved.{" "}
        <Link href="/sample-page">
          <a className="text-blue-500 hover:text-yellow-300">Sample Page</a>
        </Link>
      </div>
    </div>
  );
};

export default App;
