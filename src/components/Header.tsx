import styles from './header.module.css'
import igniteLogo from '../assets/ignite-logo.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt="Logo tipo do Ignite"></img>
        </header>
        
    );
}