import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className=' mx-auto '>
            <div className="header-row flex items-center justify-between border-b-2 px-8 py-4 ">
                <div className="logo">
                    <a href="header.jsx">
                        <h1 className='text-5xl '> Knowledge Cafe</h1>
                    </a>
                </div>
                <div className="header-author">
                    <a href="header.jsc"><img src={profile} alt="" /></a>
                </div>
            </div>
        </header>
    );
};

export default Header;