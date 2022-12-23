import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// creating cards
export function Card({ card }) {
  return (
    <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">{card.plan}</h5>
          <h6 className="card-price text-center">${card.price}<span className="period">/month</span></h6>
          <hr />
          <ul className="fa-ul">

            {/* to loop all features using map */}

            {card.features.map((list) => {
              return (<li className={list.isEnable ? `` : `text-muted`}>
                <span>
                  {
                    list.isBold ? <strong>{list.title}</strong> : list.title
                  }
                </span>
                <span className="fa-li">
                  {
                    list.isEnable ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faXmark} />
                  }
                </span>
              </li>)
            })}

          </ul>
          <div className="d-grid">
            <a href="#" className="btn btn-primary text-uppercase">Button</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;