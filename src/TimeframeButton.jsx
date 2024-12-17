export default function TimeframeButton({ onClick, active, title }) {
    return (
        <button className={`text-lg hover:text-white ${active?'text-white':'text-desaturated-blue'}`} onClick={onClick}>{title}</button>
    );
}