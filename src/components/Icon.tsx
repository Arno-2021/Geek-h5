import classNames from 'classnames'
type Props = {
    type: string
    className: string
    onClick: () => void
}
export default function Icon({ type, className, onClick }: Props) {
    return (
        <svg
            className={classNames('icon', className)}
            aria-hidden='true'
            onClick={onClick}
        >
            <use xlinkHref={`#${type}`}></use>
        </svg>
    )
}
