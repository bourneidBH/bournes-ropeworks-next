"use client"
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FaAngleDown, FaBars } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import useWindowDimensions from '../hooks/useWindowDimensions';

interface MenuItem {
  title: string,
  slug: string,
  submenu?: MenuItem[],
}

const navItems: MenuItem[] = [
  {
    title: 'Services',
    slug: 'services',
    submenu: [
      {
        title: 'Splicing',
        slug: 'splicing',
      },
      {
        title: 'Rigging',
        slug: 'rigging',
      },
      {
        title: 'Custom',
        slug: 'custom',
      },
    ],
  },
  {
    title: 'Industries Served',
    slug: 'industries',
    submenu: [
      {
        title: 'Marine',
        slug: 'marine'
      },
      {
        title: 'Industrial',
        slug: 'industrial',
      },
      {
        title: 'Architectural',
        slug: 'architectural'
      },
    ],
  },
  {
    title: 'About',
    slug: 'about'
  },
  {
    title: 'Contact',
    slug: 'contact'
  },
]

const Header = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { width } = useWindowDimensions();
  const ref= useRef<HTMLElement>(null);
  
  const toggleOpen = () => {
    setOpen(!open)
  }

  const closeNav = () => {
    if (open) {
      setOpen(false)
    }
  }

  const toggleSubmenu = (slug: string) => {
    const selected = document.getElementById((slug))
    selected?.classList.toggle('hidden')
  }
  
  // close mobile menu when navigating to new page
  useEffect(() => {
    closeNav()
  }, [pathname])

   // close mobile menu on resize to md
   useEffect(() => {
    if (width && width >= 768) {
      closeNav()
    }
  }, [width])

  useEffect(()=> {
    const handleClickAway = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node;
      if (ref?.current && !ref.current.contains(target)) {
        closeNav()
      }
    }
  
    document.addEventListener('click', handleClickAway);
    document.addEventListener('touchend', handleClickAway);
  
    return () => {
      document.removeEventListener('click', handleClickAway);
      document.removeEventListener('touchend', handleClickAway);
    }

  }, [ref])

  return (
    <header className="w-full relative bg-primary py-2 px-4 flex items-center justify-between">
      <Link href="/" title="Bourne's RopeWorks home page">
        <img src="/images/BournesRopeworks_logo-reverse.png" alt="Bourne's Ropeworks logo" className="w-[160px]" />
      </Link>
      <nav ref={ref} className={`${open ? 'block absolute bg-primary-dark z-10 top-[96px] right-0 h-[calc(100vh-96px)] text-neutral shadow-md p-4' : 'hidden relative top-0 bg-transparent text-white'} text-sm font-medium uppercase md:block md:relative md:bg-transparent md:shadow-none md:top-0 md:text-white`}>
        <ul className="flex flex-col md:flex-row md:items-center md:justify-end">
          {navItems.map(item => (
            <li key={item.slug} className="nav-item relative px-4 py-2">
              {item?.submenu ? (
                <div className="flex items-center justify-between">
                <Link
                  className={open ? "text-white": "hover:text-secondary md:hover:text-neutral-light"}
                  href={`/${item.slug}`}
                >
                  {item.title}
                </Link>
                <button 
                  id={`dropdownMenuButton-${item.slug}`}
                  className="px-2 w-2 text-white"
                  onClick={() => toggleSubmenu(item.slug)}
                >
                  <FaAngleDown />
                </button>
              </div>

              ) : (
                <Link 
                  href={`/${item.slug}/`} 
                  className={open ? "text-white": "hover:text-secondary md:hover:text-neutral-light"}
                >
                  {item.title}
                </Link>
              )}
              {item?.submenu && (
                <ul className="subnav md:hover:block" id={item.slug}>
                  {item.submenu.map(sub => (
                    <li key={sub.slug} className={open ? "text-white py-2": "text-neutral font-medium hover:text-secondary py-2"}>
                      <Link 
                        href={sub.slug}
                      >
                        {sub.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <button 
        className="p-2 text-white text-2xl hover:text-neutral-light md:hidden" 
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={toggleOpen}
      >
        {/* Hamburger icon */}
        <span className="[&>svg]:w-7">
          {open ? (
            <MdClose size={25} className="mr-4" />
          ) : (
            <FaBars size={25} />
          )}
        </span>
      </button>
    </header>
  )
}

export default Header