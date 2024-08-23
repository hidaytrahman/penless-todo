import NavTop from "./NavTop";

const Header = () => {

  return (
    <>
      <NavTop />

      <header className="main-header">
        <div className="container">
          <div className="row">
            <div className="col-sm-10">
              <h1>🖊️Less - To Do </h1>
              <h3>PenLess To Do gives you focus, from work to play. 😎</h3>
            </div>
            <div className="col-sm-2 d-flex">
            </div>
          </div>
        </div>
      </header>
    </>

  );
};

export default Header;
