import "./App.css";
function App() {
  return (
    <div>
      <span class="bar">
        <i class="fa fa-bars"></i>
      </span>
      <nav class="toggle-nav">
        <ul class="listing">
          <li>
            <a href="https://www.facebook.com/sulav.ano" target="_blank">
              <i class="fa fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="#"></i>
            </a>
          </li>
          <li>
            <a href="mailto:sulavgautam@proton.me">
              <i class="fa fa-envelope"></i>
            </a>
          </li>
        </ul>
      </nav>
      <section class="coming-soon">
        <div class="coming-soon-inner">
          <h1 class="heading">Coming Soon</h1>
          <h2 class="small-heading">Under Construction</h2>
          <div class="counter-timer">
            <ul>
              <li>
                <span id="days"></span>days
              </li>
              <li>
                <span id="hours"></span>Hours
              </li>
              <li>
                <span id="minutes"></span>Minutes
              </li>
              <li>
                <span id="seconds"></span>Seconds
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
export default App;
