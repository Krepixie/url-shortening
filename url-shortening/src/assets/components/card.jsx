import '../styles/Card.css'

export default function Card({icon, title, children}) {
    return (
        <div className='card-container'>
            <div className='card-icon'><img src={icon} alt={title + " Icon"}/></div>
            <h4 className='card-title'>{title}</h4>
            <p className='card-description'>{children}</p>
        </div>
    )
}