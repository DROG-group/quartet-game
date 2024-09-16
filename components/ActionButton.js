export default function ActionButton({ onClick, disabled }) {
    return (
        <div className="action-button">
            <button
                className={`btn btn-primary ${disabled ? '!bg-base-content !text-gray-600' : ''}`}
                onClick={onClick}
                disabled={disabled}
            >
                Ask for Card
            </button>
        </div>
    );
}
