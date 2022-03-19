import React from 'react'

export default function Card(props) {
  return (
    <section className="card">
      <div className="container">
				<div className="card__body">
					<div className="card__img">
						<img src={props.imageUrl} alt="" />
					</div>
					<div className="card__description">
						<div className="card__location">
							<img src="../img/location.png" alt="" className="card__location-img"/>
							<div className="card__city">
								{props.location}
							</div>
							<div className="card__google-location">
								<a href={props.googleMapsUrl}>View on Google Maps</a>
							</div>
						</div>
						<h3 className="card__title">
							{props.title}
						</h3>
						<div className="card__date">
							<span className="card__date-start">
								{props.startDate}
							</span>- 
							<span className="card__date-end">
							{props.endDate}
							</span>
						</div>
						<p className="card__text">{props.description}</p>
					</div>
				</div>
			</div> 
    </section>
  )
}
