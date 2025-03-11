'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();
  return (
    <html lang="en">
      <body>
        <motion.section
          className="flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 mx-auto mt-20 max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="6rem"
            height="6rem"
            viewBox="0 0 16 16"
          >
            <path
              fill="#B0BEC5"
              fillRule="evenodd"
              d="m7.493.015l-.386.04c-1.873.187-3.76 1.153-5.036 2.579C.66 4.211-.057 6.168.009 8.253c.115 3.601 2.59 6.65 6.101 7.518a8.03 8.03 0 0 0 6.117-.98a8 8 0 0 0 3.544-4.904c.172-.701.212-1.058.212-1.887s-.04-1.186-.212-1.887C14.979 2.878 12.315.498 9 .064C8.716.027 7.683-.006 7.493.015m1.36 1.548a6.3 6.3 0 0 1 1.987.597c.698.34 1.18.686 1.747 1.253A6 6 0 0 1 13.84 5.16c.445.915.646 1.798.646 2.84a6.2 6.2 0 0 1-.66 2.867c-.172.351-.519.914-.681 1.105l-.055.065l-4.563-4.564L3.963 2.91l.065-.055c.191-.162.754-.509 1.105-.681a6.44 6.44 0 0 1 3.72-.611M7.48 8.534l4.56 4.561l-.067.053a7.7 7.7 0 0 1-1.106.68a6.8 6.8 0 0 1-1.987.616c-.424.065-1.336.065-1.76 0c-1.948-.296-3.592-1.359-4.627-2.993a7.5 7.5 0 0 1-.634-1.332a6.6 6.6 0 0 1-.189-3.584a6.8 6.8 0 0 1 1.096-2.388c.07-.095.133-.173.141-.173s2.065 2.052 4.573 4.56"
            ></path>
          </svg>
          <h1 className="text-gray-900 text-3xl font-bold font-manrope mt-6">
            Page Not Found!
          </h1>
          <p className="text-gray-500 text-base font-normal leading-relaxed mt-2">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <button
              onClick={() => router.back()}
              className="text-white bg-main hover:bg-main-lighter tracking-wide rounded-lg text-sm px-6 py-3 inline-block"
            >
              Back
            </button>
          </motion.div>
        </motion.section>
      </body>
    </html>
  );
}
