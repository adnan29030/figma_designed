import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className="hero-sec">
        <div className="container">
          <div className="main">
            <div className="text">
              <h1 className="heading">Hi, I am John, Creative Technologist</h1>
              <p className="para">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <button className="btn">Download Resume</button>
            </div>
            <div>
              <div>
                <Image
                  src="/person-image.png"
                  width={292}
                  height={299}
                  alt="Johan-image"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cards">
        <div className="container">
          <div className="mainn">
            <div className="Heading">
              <h3>Recent Post</h3>
              <button className="view-btn">View All</button>
            </div>
            <div className="card-card">
              <div className="card">
                <h2 className="card-heading">
                  Making a design system from scratch
                </h2>
                <p className="date">12 Feb 2020 | Design Patterb</p>
                <p className="paragrph">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
              <div className="card">
                <h2 className="card-heading">
                  Making a design system from scratch
                </h2>
                <p className="date">12 Feb 2020 | Design Patterb</p>
                <p className="paragrph">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="feature">
        <div className="container">
          <div className="main-h">
            <h3>Feature Works</h3>
          </div>
          <div className="card-img">
            <Image
              src="/image1.png"
              width={246}
              height={200}
              alt="image"
            ></Image>
            <div className="design">
              <h2>Designing Dashboards</h2>
              <div className="badge-p">
                <div className="badge">
                  <p>2020</p>
                </div>
                <p>Dashboard</p>
              </div>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="feature">
        <div className="container">
          <div className="main-h">
            <h3>Feature Works</h3>
          </div>
          <div className="card-img">
            <Image
              src="/image2.png"
              width={246}
              height={200}
              alt="image"
            ></Image>
            <div className="design">
              <h2>Designing Dashboards</h2>
              <div className="badge-p">
                <div className="badge">
                  <p>2020</p>
                </div>
                <p>Dashboard</p>
              </div>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="feature">
        <div className="container">
          <div className="main-h">
            <h3>Feature Works</h3>
          </div>
          <div className="card-img">
            <Image
              src="/image3.png"
              width={246}
              height={200}
              alt="image"
            ></Image>
            <div className="design">
              <h2>Designing Dashboards</h2>
              <div className="badge-p">
                <div className="badge">
                  <p>2020</p>
                </div>
                <p>Dashboard</p>
              </div>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
