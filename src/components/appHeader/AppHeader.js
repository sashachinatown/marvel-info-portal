import './appHeader.scss';

const AppHeader = () => {
    return (
        <header className="app__header">
            <h1 className="app__title">
                <a href="111">
                    <span>Marvel</span> information portal
                </a>
            </h1>
            <nav className="app__menu">
                <ul>
                    <li><a href="111">Characters</a></li>
                    /
                    <li><a href="111">Comics</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;