/* eslint-disable react/jsx-key */
import {headerLogo} from '../assets/images/index'
import {navLinks} from '../constants'
import { hamburger} from '../assets/icons/index'
const Nav = () => {
  return (
<header className='padding-x py-8 absolute top-0 z-10 w-full'>
    <nav className='flex justify-between items-center max-container'>
        <a href="/">
            <img src={headerLogo} alt="Logo" width={130} height={29}/>
        </a>
        <ul className="flex1 flex justify-center items-center gap-16 max-lg:hidden">{navLinks.map((item)=>(<a href={item.href} className='font-montserat leading-normal text-lg text-slate-gray'>
            {item.label}
        </a>))}
        </ul>
        <div className='hidden max-lg:block '>
          <img src={hamburger} alt=""  width={25} />
        </div>
    </nav>
</header>
  )
}

export default Nav

