import classes from './Card.module.css';

import { library } from '@fortawesome/fontawesome-svg-core';

import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Card( {onButtonClick, quote}) {

    return (
        <div className={classes.card}>
        <div className={classes.boxquote}>
          <div className={classes.boxtext}>
          <FontAwesomeIcon icon="fa-solid fa-quote-left" size="2xl" style={{ marginRight: '0.4em', marginBottom: '3px'}} />
            <span className={classes.quotetext}>
             {quote.quote}
            </span>
        
          </div>
          <div className={classes.quoteauthor}>
            <span id='author'>- {quote.author}</span>
          </div>
          <div className={classes.button}>
            <a className={classes.socialbutton} href="https://twitter.com/?lang=es"><FontAwesomeIcon icon="fa-brands fa-square-twitter" size="2xl" /></a>
            <a className={classes.socialbutton} href="https://www.tumblr.com/"><FontAwesomeIcon icon="fa-brands fa-square-tumblr" size="2xl" /></a>
            <button className={classes.buttonright} onClick={onButtonClick}>New quote</button>
          </div>
        </div>
      </div>
    );
  }

  library.add(fab, fas, far)