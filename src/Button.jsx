import { memo } from 'react'
import './index.css'

function Button({ value, onClick }) {
    const className = value === 'C'
        ? 'clear-button'
        : value === '='
            ? 'equal-button'
            : ''

    return (
        <button
            className={className}
            onClick={() => onClick(value)}
        >
            { value }
        </button>
    )
}

export default memo(Button)
