import './button.scss'

export default function Button({content, type}) {
  return (
    <div className={`button ${type ? type : ''}`}>
        <div>{content}</div>
    </div>
  )
}
