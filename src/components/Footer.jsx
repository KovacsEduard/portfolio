export default function Footer() {
    return (
        <footer 
            className="py-8 px-6 text-center text-[0.82rem] border-t" 
            style={{ 
                color: 'var(--text2)',
                borderColor: 'var(--border)', 
                background: 'var(--bg)' 
            }}
        >
            <p>
                &copy; {new Date().getFullYear()} Kovács Eduárd. All rights reserved.
            </p>
        </footer>
    );
}