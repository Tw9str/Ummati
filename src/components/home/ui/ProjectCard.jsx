'use client';
import ProgressBar from '@/components/widgets/ProgressBar';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard({
  project: { title, description, raised, goal, slug, images },
}) {
  return (
    <motion.div
      className="bg-second-lightest h-full rounded-lg shadow-sm overflow-hidden"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: 'easeOut' },
        },
      }}
    >
      <div className="relative aspect-video">
        <Image src={images[0]} alt="test" fill className="object-cover" />
      </div>
      <div className="p-4 space-y-4">
        <h3 className="text-lg font-medium text-gray-900 line-clamp-1">
          {title}
        </h3>
        <p className="text-gray-700 line-clamp-4 h-24">{description}</p>
        <ProgressBar raised={raised} goal={goal} />
        <Link
          href={`/projects/${slug}`}
          className="block w-fit rounded-lg px-4 py-2 uppercase bg-main hover:bg-main-light duration-300 text-white font-bold"
        >
          Donate
        </Link>
      </div>
    </motion.div>
  );
}
