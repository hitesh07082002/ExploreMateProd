
import Link from 'next/link';
const HomePage = () => {
  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='text-6xl font-bold text-primary'>ExploreMate</h1>
          <p className='py-6 text-lg leading-loose'>
           ExploreMate: Your AI-powered travel companion and chat guide in one place. Experience seamless conversations and expert tour planning, all fueled by OpenAI's cutting-edge technology.
          </p>
          <Link href='/chat' className='btn btn-secondary '>
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;