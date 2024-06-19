import { Send } from '@mui/icons-material'
import "./newsletter.css";
export default function Newsletter() {
  return (
    <div className='nContainer'>
        <div className="nTitle">
          <h1>Newsletter</h1>
        </div>

        <div className="nDesc"> get updated to buy best !!</div>
        <div className="nInputContainer">
            <input type="text" className='nInput' placeholder='your email'/>
            <button className='nbutton'>
                <Send/>
            </button>
        </div>
    </div>
  )
}
