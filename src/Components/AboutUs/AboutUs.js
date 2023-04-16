import "./AboutUs.css";

export default function AboutUs() {
  return (
    <>
      <h1 className="h1">Team information</h1>

      <div className="grand">
        <div className="parent-div">
          <div className="child-div">
            <h3>Al-Mutaz Abutaha</h3>
            <img
              src="https://avatars.githubusercontent.com/u/125547543?v=4"
              alt="al-mutaz pic"
            />
            <a className="href" href="https://github.com/MutazAbutaha">
              AL-mutaz's githup
            </a>
          </div>

          <div className="child-div">
            <h3>Malik Alhudrub</h3>
            <img
              src="https://avatars.githubusercontent.com/u/85555157?v=4"
              alt="malik pic"
            />
            <a className="href" href="https://github.com/Malik-Essa99">
              Malik's githup
            </a>
          </div>
        </div>

        <div className="parent-div">
          <div className="child-div">
            <h3>Mohammad-Shiyyab</h3>
            <img
              src="https://avatars.githubusercontent.com/u/125825700?v=4"
              alt="mohammad pic"
            />
            <a className="href" href="https://github.com/Mohammad-Shiyyab">
              Mohammad's githup
            </a>
          </div>
        </div>

        <div className="parent-div">
          <div className="child-div">
            <h3>Bayan Banat</h3>
            <img
              src="https://avatars.githubusercontent.com/u/125543324?v=4"
              alt="bayan pic"
            />
            <a className="href" href="https://github.com/BayanBanat">
              Bayan's githup
            </a>
          </div>

          <div className="child-div">
            <h3>Ahmad falah</h3>
            <img
              src="https://avatars.githubusercontent.com/u/125550624?v=4"
              alt=""
            />
            <a className="href" href="https://github.com/Ahmadlotfyfalah1998">
              Ahmad's githup
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
