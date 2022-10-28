export default function Event(props) {
  console.log(props);
  const {
    description: desc,
    startDate: dateFrom,
    endDate: dateTill,
    googleMapsUrl: linkToMaps,
    imageUrl: img,
    location,
    title,
  } = props;
  return (
    <div className="event">
      <div className="event--image">
        <img src={img} alt="{title}" />
      </div>
      <div className="event--details">
        <span class="material-symbols-outlined icon">location_on</span>
        <h3>{location}</h3>
        <a href={linkToMaps}>View on Google Maps</a>
        <h2>{title}</h2>
        <h4>
          {dateFrom}-{dateTill}
        </h4>
        <p>{desc}</p>
      </div>
    </div>
  );
}
