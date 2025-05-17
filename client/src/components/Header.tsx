// import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="flex flex-col items-center py-8">
      <h1 className="text-4xl md:text-6xl font-medium text-center mb-6">
        Terra(<span className="font-serif">mort</span>)rium{' '}
        <span className="font-serif">et</span> Sonus
      </h1>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-4xl px-4">
        <h2 className="text-2xl md:text-4xl font-medium whitespace-nowrap">
          Terra <span className="font-serif">earth</span>
        </h2>
        <h2 className="text-2xl md:text-4xl font-medium whitespace-nowrap">
          Mort <span className="font-serif">death</span>
        </h2>
        <h2 className="text-2xl md:text-4xl font-medium whitespace-nowrap">
          Rium <span className="font-serif">place</span>
        </h2>
        <h2 className="text-2xl md:text-4xl font-medium whitespace-nowrap">
          Sonus <span className="font-serif">sound</span>
        </h2>
      </div> */}

      {/* <nav className="mt-8">
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:underline">
              Boxes
            </Link>
          </li>
          <li>
            <Link to="/images" className="hover:underline">
              Images
            </Link>
          </li>
        </ul>
      </nav> */}
    </header>
  );
}
