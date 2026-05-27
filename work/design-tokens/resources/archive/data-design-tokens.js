const caseStudyData = {
    title: "Design Tokens: Tackling Design Debt With Strategy, Not Headcount",
    subtitle: "A UX Management Case Study",
    company: "Mercari, Inc. 🇺🇸",
    role: "<ul><li>UX Design Manager</li><li>Design System Lead</li></ul>",
    platforms: "Design System",
    timeline: "<ul><li>2-year initiative</li><li>6-week execution phase</li></ul>",
    achievements: "<ul><li>Enabled rapid prototyping</li><li>Halted design debt accumulation</li></ul>",
    bodyContent: `
        <h2>Overview</h2>
        <p class="intro">At Mercari, I led the adoption of design tokens to streamline UX workflows and tackle our growing design debt. It was a strategic initiative that enhanced scalability, strengthened working relationships and improved product capability through systems thinking.</p>
        
        <h3>Role and Responsibilities</h3>
        <p>As a UX Design Manager, I owned our design system. It had been built alongside a redesign of the app before my time with Mercari. While effective in supporting the redesign, it lacked foundational details needed to manage product design at scale, and the evidence showed in our growing list of design tickets.</p>

        <p>Despite our best efforts, legacy styles and subtle inconsistencies found their way into UX deliverables. Detection and alignment were a huge challenge with seven designers under tight deadlines. Even when we got it right, legacy code threatened to undermine our work. As a result, design debt grew exponentially with every new project release.</p>
        
        <p>I saw a structured, explicit system of tokenized styles as a strategic investment in building a reliable tool to assist in UX Design work and address growing design debt.</p>
        
        <div class="figure">
        <img src="resources/images/img-deliverables.svg"
        alt="Two tile components with slightly different backgrounds.">
        <p class="img-cap">Ambiguous style names made it easy for UX Designers to choose conflicting style options resulting in inconsistencies that increased design debt.</p>
        </div>
       
        <h3>Design Tokens for Enhanced UX Operations</h3>
        <p>Design tokens store reusable style properties at scale ensuring universal elements like color, typography, transition and shape characteristics meet brand standards reliably across a product experience.</p> 

        <p>They’re also an effective way to operationalize collaborative design efforts because they do three things very well:</p>
        
        <div class="highlight-box">
        <h3>Manage Design Complexity</h3>
        <p>Designers navigate a complex set of interconnected rules and guidelines to meet specific brand standards. Many are abstract concepts that can be defined as numerical values and integrated into design tools, liberating designers from repetitive, high-cost, low-value design tasks.</p>
        <br>
        <h3>Clarify Ambiguity</h3>
        <p>Design tokens transform abstract choices made in the design process into clear intentional design decisions. They reduce the guesswork involved in design and development, keeping projects focused and on track.</p>
        <br>        
        <h3>Scale Design Knowledge</h3>
        <p>As a reliable source for communicating design decisions, design tokens can reach well beyond UX and development to align creative efforts across an organization.</p>
        </div>

        <div class="figure">
        <img src="resources/images/img-primitive-elements.svg"
        alt="Color, type, transition and shape styles unite to express a product interface.">
        </div>

        <h2>Obstacles to Design Token Adoption</h2>
        
        <div>
        <p><strong>Misaligned priorities</strong></p>
        <p>Our UX Design and Engineering resources were locked-in and laser-focused on growth initiatives. Without a direct way to drive relevant metrics, staffing a design token project was a non-starter.</p>
        <br>
        <p><strong>Knowledge gap</strong></p>
        <p>The second challenge came from a lack of knowledge and understanding. While <em>design token</em> was a familiar term, the concept lived somewhere between design theory and engineering jargon, so both designers and developers assumed it fell outside of their domains.</p>
        </div>

        <p>I made it my mission to bridge the gap by showing what design tokens could enable, how they worked and why they mattered to an efficient product design operation. This approach aligns with one of my core design principles.</p>

        <div class="highlight-box">
            <h4>Core Design Principle:<h4>
            <h2>"Show, don't tell"</h2>
            <p>People remember what they experience better than what they're told.</p>
        </div>

        <h2>Strategic Onboarding Through Side Projects</h2>
        <p>Given our fixed headcount and a team fully committed to growth initiatives, I created a series of practical side projects to tackle ongoing UX workflow frustrations. I framed them as professional development opportunities to spark interest and give designers hands-on experience with design tokens in low-risk settings.</p>

        <h3>Tokenizing Our Type System</h3>
        <p>This project sought to address inconsistencies in the way designers applied styles in their projects. Typography was an ideal first design-token effort for three reasons:</p>
        
        <ol>
            <li><strong>Design Proficiency</strong> – Typography was well understood by UX Designers</li>
            <li><strong>Limited Scope</strong> – Only 13 style elements needed to be addressed</li>
            <li><strong>High Impact</strong> – Type appears on every surface of the product interface</li>
        </ol>

        <p>Our original type styles were named after HTML header and paragraph tags, which are meant for semantic organization of content rather than visual hierarchy. Over time, designers introduced new styles that went beyond this system to improve hierarchy, but the lack of clear naming created confusion. Developers were often uncertain about design intent which led to costly review cycles and inconsistent implementation across projects.</p>

        <div class="figure">
        <img src="resources/images/img-typography.svg"
        alt="List of the typographic system with examples of each style.">
        <p class="img-cap">HTML tag–based names didn’t scale, and confusing labels like H0 and H7 made handoffs harder. Without clear rules, designers used whichever styles felt right, and their subjective choices added to our growing design debt.</p>
        </div>

        <p>I coached a Junior UX Designer through a series of exercises designed to link each style to its role in the product experience. Those roles then informed a naming convention that clarified how and when each style should be used. Together we iterated on a new naming system that provided designers with stronger guidance and clarity.</p>

        <div class="figure">
        <img src="resources/images/img-typography-neue.svg">
        <p class="img-cap">Our updated naming convention paired type category with scale. This helped us to make style decisions with more clarity and stronger intention.</p>
        </div>

        <p>This pilot project unified my team’s approach to typography and instilled a higher degree of confidence in our design system which was sometimes seen as an obstacle to creative work. Now it was a more reliable tool. It also expanded support for design tokens, validated their ability to scale design knowledge, and halted the accumulation of type-related design debt.</p>

        <h3>Tokenizing Interface Colors</h3>
        <p>Another side project focused on interface colors. Like type, color was well understood by UX designers, limited in scope and highly impactful given its use across our product.</p>
        
        <p>New colors were occasionally added to our style library to support new interface elements, but our naming system didn’t scale well. For example, strange names like <em>ultra-medium-gray</em> and <em>paper-white</em> were added as a way to insert new color styles between existing gray values. Abstract names resulted in colors applied inconsistently, conflicting feedback, and accumulation of design debt with every new project release.</p>
        
        <div class="figure">
        <img src="resources/images/img-color.svg">
        <p class="img-cap">Descriptive names and odd hierarchies were ideal for demonstrating the value of style tokenization.</p>
        </div>

        <p>Taking a similar approach to our type project, I coached a designer through activities that assigned roles to each color based on functional purpose. We used those roles to establish a naming convention which we then published in our design tools.</p>
        
        <div class="figure">
        <img src="resources/images/img-color-neue.svg">
        <p class="img-cap">Our updated naming convention offered stronger guidance, demonstrated the practical value of design tokens, and helped the UX Team understand the concept more clearly.</p>
        </div>

        <p>Building on the success of the type project, we developed a shared approach to color and applied styles with a higher degree of intentionality supported by stronger design guidance. Design tokens also encouraged a more strategic mindset when introducing new styles into our system.</p>

        <h3>Demonstrating Enhanced Accessibility With Design Tokens</h3>
        <p>Another side project involved a strategic partnership with an Engineering Lead to explore the practical aspects of integrating design tokens into our codebase. Together we created a prototype of the Mercari app featuring daytime and evening themes, along with a high-contrast option to demonstrate how tokens can aid in supporting accessibility.</p>

        <div class="figure">
        <img src="resources/images/img-hackathon.svg">
        <p class="img-cap">Our prototype included a high-contrast theme to demonstrate how design tokens could integrate accessible color pairing into our design system.</p>
        </div>

        <p>While the prototype didn’t impact design token prioritization, it gave my partner and me practical insights to more accurately estimate the scope and effort for product-wide adoption. It also generated interest in theming, conceptually introduced tokenization to the broader company and planted the seeds for future implementation.</p>
        
        <h2>Dark Mode Makes a Brighter Future Possible</h2>
        <p>Two years of advocating for design tokens finally paid off when our CEO launched a rebranding initiative focused on attracting Gen Z users. This was the perfect project opportunity to finally score org-level commitment for tokenized styles.</p>        
        
        <p>I proposed design tokens as a strategic prerequisite to fast-track rebrand implementation while also keeping costs from skyrocketing. The idea was to tokenize existing styles so their values could be systematically updated once the new brand was ready for prime time. At the same time, we could beta test a dark theme to ensure every style was accounted for.</p>
        
        <div class="figure">
        <img src="resources/images/img-dark-mode.svg">
        </div>

        <p>The goal of the dark mode project was to validate the practical aspects of design token adoption identified during our work on the themed prototype, but on a project that was low-risk relative to a full-scale rebrand. With organizational commitment, we could also address operational needs for long-term maintenance including governance, workflow management, and contribution guidelines. </p>

        <p>I made the case that rebranding by any other means would be costly, involving screen-by-screen, section-by-section updates with timelines measured in quarters rather than sprints. And worse, style updates at such a large scale would likely bury us in new design debt, which we had worked so hard to escape.</p>

        <p>After two years of building support for design tokens person by person, team by team, momentum finally reached a tipping point and we were given the green light to move forward with dark mode.</p>
        
        <h2>Preparation Turns Theory Into Reality</h2>

        <p>Our earlier work on side projects laid the groundwork for success by giving everyone clarity on their role and a sense of shared purpose around possibilities that reached far beyond dark mode.</p>
        
        <p>This initiative was entirely UX-driven and completed in just six weeks with a small, cross-functional team made up of two UX Design Specialists and a Lead Engineer. Like most of my projects, it aligned with the Double Diamond framework with phases organized into Research and Discovery, Design Exploration, Design Execution, and finally Testing and Release.</p>

        <h2>Design Token Impact and Legacy</h2>

        <div class="highlight-box">
            <h3>Operational Improvements</h3>
            <ul>
                <li>Streamlined workflows through a shared design language built on intentional design decisions</li>
                <li>Clearer cross-functional communication with developers</li>
                <li>Near halt on design debt accumulation</li>
                <li>Elevated our UX Team’s reputation as a strategic partner in foundational change and grew our influence as a business function</li>
            </ul>
        </div>
            
        <div class="highlight-box">
            <h3>Business Impact</h3>
            <ul>
                <li>Increased UX Team capacity to take on additional growth projects</li>
                <li>Enabled rapid prototyping for growth experiments focused on personalization</li>
                <li>Set the stage for a smooth, strategic rebrand rollout</li>
            </ul>
        </div>

        <p>The abstract nature of design tokens makes them a tricky concept to quickly comprehend, and if they’re new to you, I hope this inspires deeper exploration because they’re more than a deliverable or technical asset. They’re a strategic lever for operationalizing collaborative product design, expanding product capability, and strengthening team cohesion.</p>
    `
};