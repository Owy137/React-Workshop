export default function Screen({ equation }) {
    return (
        <div className="screen">
            <div className="screen-text">
                {equation.length > 0 ? equation.join(' ') : '0'}
            </div>
        </div>
    )
}