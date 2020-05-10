import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="wrapper">
      <Head>
        <title>Muriel Silveira</title>
      </Head>

      <nav>
        <Link href="/about">
          <a className="nav-link">About</a>
        </Link>
        <div className="nav-social">
          <a className="nav-social-icon github" href="#">•</a>
          <a className="nav-social-icon twitter" href="#">•</a>
          <a className="nav-social-icon linkedin" href="#">•</a>
        </div>
      </nav>

      <header className="header">
        <img className="header-pic" src="/yo.jpg" alt="Muriel's photo" width="150" height="150" />
        <h1>Muriel Silveira</h1>
      </header>

      <section>
        <article className="article">
          <a href="#"><h2 className="article-title">Uma Breve História do Mundo</h2></a>
          <span className="article-date">16 ago 2016</span>
          <p className="article-summary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod dui vel ipsum commodo ultrices. Vestibulum nec tellus accumsan, pretium ante in, egestas nisi. Nulla sodales aliquet leo eget tincidunt.
          </p>
        </article>
        <article className="article">
          <a href="#"><h2 className="article-title">The Passionate Programmer</h2></a>
          <span className="article-date">15 ago 2016</span>
          <p className="article-summary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod dui vel ipsum commodo ultrices. Vestibulum nec tellus accumsan, pretium ante in, egestas nisi. Nulla sodales aliquet leo eget tincidunt.
          </p>
        </article>
        <article className="article">
          <a href="#"><h2 className="article-title">The Pragmatic Programmer</h2></a>
          <span className="article-date">14 ago 2016</span>
          <p className="article-summary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod dui vel ipsum commodo ultrices. Vestibulum nec tellus accumsan, pretium ante in, egestas nisi. Nulla sodales aliquet leo eget tincidunt.
          </p>
        </article>
      </section>

      <footer className="footer">
        © Copyright 2016
      </footer>

      <style jsx>{`
        .wrapper {
          max-width: 800px;
          padding: 20px;
          margin: 0 auto;
        }

        .nav-link {
          display: inline-block;
          font-size: 13px;
          float: left;
        }

        .nav-social  {
          display: inline-block;
          float: right;
        }

        .nav-social-icon {
          display: inline-block;
          width: 15px;
          height: 15px;
          text-decoration: none;
          background: gray;
          color: gray;
          border-radius: 7.5px;
        }

        .nav-social-icon:hover {
          text-decoration: none;
        }

        .header {
          text-align: center;
          padding: 10vh 0;
        }

        .header-pic {
          margin: 0 auto;
          border-radius: 100px;
          background: gray;
        }

        .article {
          margin-bottom: 10vh;
        }

        .article-title {
          margin-bottom: 10px;
        }

        .article-date {
          font-size: 12px;
        }

        .article-summary {
          font-weight: 100;
        }

        .footer {
          font-size: 12px;
          text-align: center;
          margin-bottom: 10vh;
        }
      `}</style>

      <style jsx global>{`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        body {
          background: rgba(247, 247, 247, 80);
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
          font-size: 1rem;
          color: #343131;
        }

        a {
          color: #343131;
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  )
}
