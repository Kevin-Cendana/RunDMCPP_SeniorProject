<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ChurchTemplate</title>
  <link rel="stylesheet" href="header.css" />
  <header>
    {/*Title*/}
    <h1>
      Sacramento Glory
      <br />
      Korean Church
    </h1>
    {/* Navigation bar */}
    <ul>
      <li>
        <a href="announcements.html" className="active">
          Announcements
        </a>
      </li>
      <li className="dropdown">
        <a href="javascript:void(0)" className="dropbtn">
          Events ▼
        </a>
        <div className="dropdown-content">
          <a href="events.html">Events</a>
          <a href="pastEvents.html">Past Events</a>
          <a href="photoGallery.html">Photo Gallery</a>
        </div>
      </li>
      <li className="dropdown">
        <a href="javascript:void(0)" className="dropbtn">
          Sermons ▼
        </a>
        <div className="dropdown-content">
          <a href="upcomingSerms.html">Upcoming</a>
          <a href="previousSerms.html">Previous</a>
        </div>
      </li>
      <li>
        <a href="services.html">Services</a>
      </li>
      <li className="dropdown">
        <a href="javascript:void(0)" className="dropbtn">
          About Us ▼
        </a>
        <div className="dropdown-content">
          <a href="ourBeliefs.html">Our Beliefs</a>
          <a href="ourGoals.html">Our Goals</a>
          <a href="dateTime.html">Date / Time</a>
          <a href="languages.html">Language</a>
        </div>
      </li>
      <li>
        <a href="default.html">Home</a>
      </li>
    </ul>
  </header>
  <main>
    {/* Main content goes here */}
    <p>This is the announcement page</p>
  </main>
  <footer>
    {/* Footer content goes here */}
    <p className="sameLine" style={{ fontSize: 12 }}>
      Sacramento Glory Korean Church
      <br />
      1820 Bell Street
      <br />
      Sacramento, CA. 95825
    </p>
    <p className="sameLine" style={{ fontSize: 12, float: "right" }}>
      Contact Us:{" "}
      <a href="mailto: sacglorychurch@hotmail.com">
        sacglorychurch@hotmail.com
      </a>
    </p>
  </footer>
</>
