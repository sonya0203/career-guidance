import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-left">
          <h1>
            Find Your Perfect <br />
            Career Path with AI
          </h1>
          <p>
            Answer simple questions. Take a quick test.
            Get personalized career recommendations.
          </p>
          <button className="primary-btn">Get Started →</button>
        </div>

        <div className="hero-right">
          <img
            src="https://illustrations.popsy.co/blue/work-from-home.svg"
            alt="AI Career"
          />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-it-works">
        <h2>How It Works</h2>

        <div className="steps">
          <div className="step-card">
            <div className="step-number">1</div>
            <h3>Enter Your Details</h3>
            <p>Qualification, Skills, Interests</p>
          </div>

          <div className="step-card">
            <div className="step-number">2</div>
            <h3>Take a Quick MCQ Test</h3>
          </div>

          <div className="step-card">
            <div className="step-number">3</div>
            <h3>Get AI Career Recommendations</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
