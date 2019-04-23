import React from "react"
import Layout from "../components/layout"

//export default () => <div>Hello world!</div>

export default () => (
    <Layout>
        <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
        <p>What do I like to do? Lots of course but definitely enjoy building  websites.</p>
        <div style={{ color: `purple` }}>
            <h1>Hello Gatsby!</h1>
            <p>What a world.</p>
            <img src="https://source.unsplash.com/random/400x200" alt="" />  
        </div>
    </Layout>
)

