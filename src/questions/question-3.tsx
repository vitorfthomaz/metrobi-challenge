import "./question-3.css"

export const Layout = () => (
  <div className="application container">
    <header className="header title content">Header</header>
    <main className="main container">
      <section className="page container">
        <div className="misc container">
          <div className="hero title content">Hero</div>
          <nav className="sidebar title content">Sidebar</nav>
        </div>
        <div className="readings container">
          <div className="mainContent content">
            <span className="title">Main Content</span>
            <p className="body">**if things do not look right, make sure your browser is in "Experimental Mode"</p>
          </div>
          <div className="extraContent title content">Extra Content</div>
        </div>
      </section>
      <section className="related container">
        <div className="relatedImages title content">Related Images</div>
        <div className="relatedPosts title content">Related Posts</div>
      </section>
    </main>
    <footer className="footer title content">Footer</footer>
  </div>
)