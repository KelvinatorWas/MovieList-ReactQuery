import apCss from './AboutProject.module.css'

const AboutProject = () => (
    <>
        <h1>About Project</h1>
        <div className={apCss.text_section}>
            <p>
                <b>CODELEX: </b> MD16 <br /> <br />
                <b>Project Technology:</b> <br />
                <li className={apCss.bullet}>React</li>
                <li className={apCss.bullet}>React Router</li>
                <li className={apCss.bullet}>React Query</li>
                <li className={apCss.bullet}>MUI Icons</li>
                <li className={apCss.bullet}>Axios</li>
                <li className={apCss.bullet}>Css Modules</li>
                <li className={apCss.bullet}>Json-Server</li>
                <br />
                <b>Later going to add:</b> <br />
                <li className={apCss.bullet}>Zod</li>
                <li className={apCss.bullet}>react-i18next</li>
                <br />
                <b>Other Information:</b><br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores doloremque dolore ea vitae amet commodi voluptates fugit, molestiae temporibus illum facilis at pariatur maxime voluptatum a? Quibusdam tempora illum labore!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo delectus maiores, quo laudantium doloribus dignissimos quos voluptas aliquid, ipsam recusandae ut? Voluptas, praesentium nostrum id omnis aliquam eligendi officia in?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit nam voluptatum omnis aperiam labore harum aliquam deleniti debitis dolore, vel quidem reprehenderit similique vitae non optio alias, magnam error mollitia.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam rerum voluptate rem suscipit, dolorem officia maiores sit exercitationem non amet earum nihil repellat, impedit veritatis blanditiis similique numquam unde voluptatibus.
            </p>
        </div>
    </>
);

export default AboutProject