import Nav from './nav'
import Footer from './Footer'
// import Backdrop from './Backdrop'
const Layout = Page => {
    return () => (
        <div className="big">
    <div className="content">
        <Nav />
        <Page />
        <Footer />
  
    </div>
    <style jsx global>{`
html,body{
    height:100%;
}
body { 
    background:blue;
  font: 11px menlo;
  color: #fff;
}
.big{
display: flex;
flex-direction: column;
height: 100%;
}
.content {
    flex: 1 0 auto;
    padding: 10px;
  }
`}</style>
    </div>
    );
  };
  
  export default Layout;