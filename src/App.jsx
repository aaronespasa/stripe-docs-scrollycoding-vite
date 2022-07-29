import '@code-hike/mdx/dist/index.css'
import './custom-code-hike.css'
import Content from './markdown/hello.mdx'

function App() {
  return (
    <div>
      <nav>
        <div>Stripe Docs</div>
      </nav>
      <div className="warning">
        <strong>
          This clone of <a href="https://stripe.com/docs/checkout/quickstart?client=react">Stripe Docs</a>
          &nbsp;has been made by <a href="https://github.com/pomber">@pomber</a> & <a href="https://www.aaronespasa.com/">@aaronespasa</a>
          &nbsp;using <a href="https://codehike.org/">Code Hike</a>.
        </strong>
      </div>
      <article>
        <div>
          <Content/>
        </div>
      </article>
    </div>
  )
}

export default App
