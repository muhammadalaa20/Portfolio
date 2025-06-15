'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-transparent px-6 py-10 flex justify-between items-center max-w-7xl mx-auto"
    >
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Link href="/" className="text-white text-lg font-semibold tracking-wide">
          <Image src="/m.svg" alt="Logo" width={60} height={60} className='rounded-full p-2 bg-[#7F1DFF] shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0_0_25px_#9c3bff] hover:bg-[#9c3bff]' />
        </Link>
      </motion.div>

      {/* Desktop Nav */}
      <motion.ul
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="hidden md:flex space-x-8 text-sm md:text-base font-medium text-white bg-transparent"
      >
        {['Home', 'About', 'Projects' , 'Skills',  'Contact'].map((item, index) => (
          <motion.li
            key={item}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Link
              href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
              className="hover:text-[#7F1DFF] transition-colors"
            >
              {item}
            </Link>
          </motion.li>
        ))}
      </motion.ul>

      {/* Mobile Menu with Sheet */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
        className="md:hidden"
      >
        <Sheet>
          <SheetTrigger className="text-white">
            <Menu size={28} />
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-[#0d0d0d] text-white border-none flex flex-col justify-center items-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="space-y-6 text-center mt-12"
            >
              {['Home', 'About', 'Projects' , 'Skills',  'Contact'].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                  className="block text-lg font-medium hover:text-[#7F1DFF] transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                  {item}
                </Link>
              ))}
            </motion.div>
          </SheetContent>
        </Sheet>
      </motion.div>
    </motion.nav>
  );
}
