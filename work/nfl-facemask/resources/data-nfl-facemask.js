const caseStudyData = {
    title: "Facemask: Building NFL's Design System from the Ground Up",
    subtitle: "A Design System Case Study",
    company: "NFL Media",
    role: "UX Designer (contract)",
    platforms: "Mobile, Web, Connected TV",
    timeline: "Three-year initiative",
    achievements: "Built and implemented scalable product design infrastructure",
    bodyContent: `
        
    <div class="canvas">
        <div class="band">
            <div class="content">
                <div class="choke">
                    <h2>Overview</h2>
                    <p class="intro">At the NFL, I designed and architected the Facemask Design System, a full suite of interconnected resources, processes and tools that unified fan experiences across web browsers, mobile devices and connected TVs for millions nation-wide.</p>
                
                    <h3>The Challenge</h3>
                    <p>Beyond architecting cross-platform component libraries, I had to earn buy-in from multiple platform-specific teams of designers, developers and product mangers to adopt new processes, tools and workflows while navigating the complex environment of a legacy sports-media giant.</p>

                    <h3>What I Did</h3>
                    <p>I approached Facemask as a product for Product Design. Stakeholder interviews revealed challenges and needs of design system adoption. I paired with designers to onboard, test and iterate on component library architecture. Strategic coalition building ensured buy-in across teams and business groups.</p>

                    <h3>Where We Landed</h3>
                    <p>A multi-year transition from siloed, platform-specific product teams to a unified system that enables the NFL to scale design and technical resources, reduce vendor dependency, and deliver consistent fan experiences across the evolving digital media landscape.</p>
                </div>
            </div>
        </div>
    </div>

    <div class="band">
        <div class="content">
            <div class="figure">
                <img src="resources/images/img-productFamily.png">
            </div>
        </div>
    </div>

    <!-- <div class="section-block">
        <h2>Overview</h2>
        <p class="intro">Long before modern tools like Figma enabled scalable component libraries, I built Facemask, the NFL’s design system, establishing a foundation for how the League creates, delivers, and captures value through digital sports-media assets.</p>
        
        <div class="figure">
        <img src="resources/images/img-facemask-components.png">
        </div>
    </div>

    <div class="section-block">
        <h2>Design System Origins</h2>

        <h3>SuperBowl.com Redesign</h3>
        <p>NFL Product Design functioned as independent, platform-specific teams. As part of the Web team, I helped redesign SuperBowl.com. This served as a low-risk initiative to explore a broader redesign of NFL.com, transitioning it from separate web and mobile builds to a unified responsive website.</p>

        <div class="figure">
            <img src="resources/images/img-sb51.png">
        </div>

        <h3>Static Layouts → Responsive Component-Based Design</h3>
        <p>I piloted a component-based design approach to optimize for responsive design. I worked with scalability as a constraint, analyzed design layouts, and broke down components into foundational elements optimized for shared use across mobile and desktop browsers.</p>

        <div class="figure">
            <img src="resources/images/img-sb51-components.png">
        </div>

        <h3>A Unified Fan Experience</h3>
        <p>Redesigning SuperBowl.com validated our component-based approach as a strategic way to deliver websites with cross-platform parity. We launched a cohesive, mobile and web-friendly fan experience without the cost or complexity of running parallel platform-specific teams. The reduction in design and development effort secured buy-in to tackle a redesign of NFL.com.</p>

        <div class="callout callout-standard">
            <h3>SuperBowl.com Redesign Highlights</h3>
            <ul class="custom-list-bullet">
                <li>Platform-specific web + mobile builds → unified responsive system</li>
                <li>Fixed-width layouts → scalable, screen-agnostic architecture</li>
                <li>Component-based experimentation → organizational buy-in for a dedicated design system</li>
            </ul>
        </div>

    </div>
    
    <div class="section-block">
        <h2>Designing for Scalability</h2>
        
        <h3>NFL.com Redesign</h3>
        <p>I scaled up my component-based design approach to support the NFL.com redesign. I championed mobile-first principles, defined rules and standards, documented components, and guided implementation.</p>

        <div class="figure">
            <img src="resources/images/img-nfl-redesign.png">

            <img src="resources/images/img-nfl-components.png">
        </div>

        <h3>Proto-Design Tokens</h3>
        <p>I introduced a semantic color system that abstracted team branding into reusable roles (primary, secondary, tertiary). This early form of design tokens enabled dynamic theming across 32 teams using a single system that decoupled branding from implementation.</p>

        <div class="figure">
            <img src="resources/images/img-color-system.png">
        </div>

        <h3>Scaling Operational Capacity</h3>
        <p>Governing team brands under one system restored internal ownership and creative control of all 32 team websites. Consolidation reduced vendor dependency, standardized quality, and strengthened brand identity.</p>

        <h3>Component Libraries → Facemask Design System</h3>
        <p>Centralizing all 32 team websites under a single system shifted web operations from a fragmented, vendor-dependent model to a unified, internally-controlled, sports-media system. Operational efficiencies secured investment in a more formal design system, cementing my role as Facemask’s de facto owner.</p>

        <div class="callout callout-standard">
            <h3>NFL.com Redesign Highlights</h3>
            <ul class="custom-list-bullet">
                <li>32 vendor-managed team websites → transitioned to internal ownership</li>
                <li>Inconsistent vendor-run website quality → tighter control over the fan experience</li>
                <li>Unified design standards → consistent, high-quality, online presence</li>
            </ul>
        </div>

    </div>

    <div class="section-block">
        <h2>Extending Facemask for Mobile</h2>

        <h3>NFL Mobile App Redesign</h3>
        <div class="figure">
            <img src="resources/images/img-mobile.png">
            <img src="resources/images/img-mobile-components.png">
        </div>

        <h3>Architectural Challenges</h3>
        <p>Extending Facemask to mobile came with critical challenges that threatened adoption. Shared component libraries led to accidental misuse of platform-specific elements. Avoiding misuse layered additional oversight onto each designer’s workflow, increased friction, and undermined trust in the system.</p>

        <h3>Architectural Evaluation</h3>

        <div class="content-group">
            <div class="content-item callout callout-standard">
                <h3>Naming Conventions</h3>
                <p>Structured naming conventions improved clarity, but added cognitive overload and still enabled misuse.</p>
            </div>

            <div class="content-item callout callout-standard">
                <h3>Platform-Specific Libraries</h3>
                <p>Platform-specific libraries prevented misuse but duplicated foundational assets and introduced long-term maintenance risk.</p>
            </div>
        </div>

        <p>Neither approach balanced usability with system maintainability. I architected a third option built around a global library of primitive elements that fed into platform-specific component libraries for web and mobile.</p>

        <div class="figure">
            <img src="resources/images/img-facemask-architecture.png">
        </div>

        <p>This architectural shift established a foundation that allowed Facemask to expand beyond web and mobile into future platforms without compromising system integrity or maintainability. </p>

        <div class="callout callout-standard">
            <h3>Structure Highlights</h3>
            <ul class="custom-list-bullet">
                <li>Preserved a single source of truth for shared assets</li>
                <li>Eliminated misuse of platform-specific components</li>
                <li>Enabled independent platform evolution without system fragmentation</li>
            </ul>
        </div>

        <div class="callout callout-standard">
            <h3>Mobile Integration Highlights</h3>
            <ul class="custom-list-bullet">
                <li>Inconsistent design patterns → consistent cross-platform experiences</li>
                <li>Linked library architecture → durable cross-platform scalability</li>
                <li>Siloed product teams → unified by system architecture</li>
            </ul> 
        </div>
    </div>

    <div class="section-block">
        <h2>Extending Facemask for Connected TV</h2>

        <h3>New Platform Considerations</h3>
        <p>Expanding Facemask to support connected TV introduced a new class of constraints specific to the 10-foot experience. I drove system adaptation that took into consideration new interactions, visual hierarchies, and conditions for low-light environments.</p>

        <div class="figure">
            <img src="resources/images/img-ctv.png">
        </div>

        <h3>Designing for Controlled Flexibility</h3>
        <p>Strict adherence to our foundational color system produced overly bright, high-contrast interfaces that were unsuitable for TV viewing environments. I adapted the proto-token system used for team brand management to integrate darker, platform-specific themes without breaking the system’s underlying structure.</p>

        <div class="callout callout-standard">
            <h3>Adapted Token Structure Highlights</h3>
            <ul class="custom-list-bullet">
                <li>Maintained consistency at the system level</li>
                <li>Allowed for flexibility at the platform level</li>
                <li>Reusing patterns limited system complexity</li>
            </ul> 
        </div>

        <h3>Validating System Scalability</h3>
        <p>Expansion into connected TV elevated Facemask from a structured component library to a platform-agnostic design system capable of supporting diverse product surfaces. It also reinforced the system’s role as a shared source of truth that scaled product knowledge and design decisions transparently across teams.</p>
    </div>
    
    <div class="section-block">
        <h2>Facemask Impact</h2>
        <p>Facemask introduced a shared design language that enhanced scalability so teams could avoid rebuilding solutions in isolation. Leading its evolution from a component-based experiment into a structured system established a foundation for scalable product development across NFL Media.</p>
    
        <div class="callout callout-standard">
            <h3>Facemask Highlights</h3>
            <ul class="custom-list-bullet">
                <li>Reduced creative-vendor dependency by 86% → brought creative control in-house</li>
                <li>Standardized high-quality fan experiences → increased brand equity</li>
                <li>Scaled design knowledge + resources → managed complexity without increasing support costs</li>
                <li>Standardized NFL's product design language → strengthened cross-functional collaboration</li>
            </ul> 
        </div>
    
    </div>

    <div class="section-block">
        <h2>Reflections</h2>
        <p>Building Facemask from the ground up shaped my approach to design systems as products for product design. They’re the operational infrastructure that connects technology, tooling, and design culture to align decision-making, scale resources, and enable product ecosystems to adapt to changing demands.</p>
    </div>         -->
    `
};