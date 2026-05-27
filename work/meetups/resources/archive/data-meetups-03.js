const caseStudyData = {
    title: "Meetups – Leading a Build-to-Learn Approach",
    subtitle: "A UX Management Case Study",
    company: "Mercari, Inc.",
    role: "UX Design Manager",
    platforms: "Mobile App + Web",
    timeline: "8-week execution",
    achievements: "<ul><li>Outperformed OKR by 20%</li><li>+13% Inventory Growth</li></ul>",
    bodyContent: `
        
        <div class="section-block">
            <h2>Overview</h2>
        
            <p class="intro">At Mercari, I led a project that introduced in-person buying and selling to a marketplace built on
                contact-free transactions. This shift pushed us to adapt to a flexible design process guided by real-time user
                insights.</p>
        
            <div class="figure">
                <img src="resources/images/img-meetups-lede.png">
            </div>
        </div>
        
        <div class="section-block">
            <h2>Project Contribution</h2>
        
            <div class="content-group">
                <div class="callout callout-standard">
                    <div class="content-item">
                        <h3>Role</h3>
                        <p>UX Design Manager</p>
                    </div>
                </div>
                
                <div class="callout callout-standard">
                    <div class="content-item">
                        <h3>Cross-functional Team</h3>
                        <p>UX Designer, UX Content Designer, UX Researcher, Product Manager, Lead Engineer</p>
                    </div>
                </div>
            </div>
        
        
            <h3>Core Responsibilities</h3>
        
            <div class="callout callout-standard">
                <div class="content-group">
                    <div class="content-item">
                        <h4>Led end-to-end UX process</h4>
                        <ul class="custom-list-bullet">
                            <li>Built consensus on strategy and scope</li>
                            <li>Guided ideation, prototyping, and testing</li>
                            <li>Managed stakeholder and team expectations</li>
                        </ul>
                    </div>
        
                    <div class="content-item">
                        <h4>Delivered on time</h4>
                        <ul class="custom-list-bullet">
                            <li>Established UX roadmap</li>
                            <li>Negotiated milestones and delivery schedule</li>
                            <li>Secured organizational support</li>
                        </ul>
                    </div>
                </div>
            </div>
        
        
            <p>I led my team from ambiguity to action by building alignment around a shared problem, securing buy-in on a UX
                roadmap, and removing barriers to meet an ambitious delivery target.</p>
        </div>
        
        <div class="section-block">
        
            <h2>Project Context</h2>
        
            <p>Mercari's community-powered marketplace offers a convenient way to buy and sell new and used items online. It
                caters to a wide range of sellers, from people decluttering their closets to entrepreneurs selling items for
                profit.</p>
        
            <div class="callout callout-standard">

                <div class="graphic">
                    <img src="resources/images/img-logo-mercari.svg">
                </div>
                
                <div class="callout callout-bold">
                    <h3>How it works:</h3>
                    <ol class="custom-list">
                        <li>Sellers list items, set prices, and ship after a sale.</li>
                        <li>Buyers browse, purchase, and rate their transaction experience.</li>
                        <li>Mercari takes a fee (10% of sale price).</li>
                    </ol>
                </div>
            </div>
        
            <div class="figure">
                <img src="resources/images/img-bread-sold.svg">
            </div>
        
            <h3>Business Opportunity</h3>
        
            <p class="intro">Enable local pick-up (like Facebook Marketplace and OfferUp) supported by our trusted purchase flow
                to expand inventory and increase transaction volume while gathering insights on an underserved user segment.</p>
        
            <h3>Strategic Context</h3>
        
            <div class="callout callout-standard">
                <div class="content-group">
                    <div class="content-item">
                        <h4>Problem</h4>
                        <p>Requiring online transactions is driving sellers to competitors (OfferUp, FB Marketplace) to source local
                            buyers for difficult-to-ship items.</p>
                    </div>
            
                    <div class="content-item">
                        <h4>Hypothesis</h4>
                        <p>By integrating safe local discovery with our trusted escrow, we can capture an entire workflow and
                            increase Gross Merchandise Value (GMV).</p>
                    </div>
                </div>
        
                <div class="callout callout-bold">
                    <h3>Feature Vision</h3>
                    <p class="intro">Enable buyers and sellers to meet in-person to facilitate the sale of items that are
                        impractical to ship.</p>
                </div>
            </div>
        
        </div>
        
        <div class="section-block">
        
            <h2>Research</h2>
        
            <h3>Evaluative Research</h3>
        
            <p>We gathered insights through interviews with users who self-reported meeting in person or arranging pickup to
                exchange an item.</p>
        
            <div class="callout callout-standard">
                <div>
                    <h3>12 research participants</h3>
                    <p>Flagged for sharing contact information prohibited by Mercari terms of service.</p>
                </div>
                
                <div class="figure graphic">
                    <img class="img-research" src="resources/images/img-research.svg">
                </div>

                <ul class="custom-list-bullet">
                    <li>Interviewed for insight on existing behavior </li>
                    <li>10 reported selling/buying at least one item in person using Mercari</li>
                    <li>6 reported selling/buying 3 or more items in person using Mercari</li>
                </ul>

                <div class="callout callout-bold">
                    <div>
                        <h3>Assumption:</h3>
                        <p>Users are motivated to leave Mercari and buy/sell in-person to avoid transaction fees.</p>
                    </div>
                </div>
            </div>
        
            <h3>Key Findings</h3>
        
            <div class="callout callout-standard">
                <h3>Users are motivated more by solving practical problems over fee evasion.</h3>
                <ol class="custom-list">
                    <li>Avoid high shipping cost relative to item price</li>
                    <li>Inspect condition and authenticity before buying</li>
                    <li>Risk of shipping and return damage</li>
                </ol>
        
                <div class="callout callout-bold">
                    <p>Reduce friction related to shipping cost, risk, and logistical difficulty:</p>
                    <h4>Seller Perspective</h4>
                    <p class="intro"><em>“UPS was charging me $300 to ship a bike I was selling for $250. It just made more sense to find a local buyer.”</em></p>
                
                    <div class="callout-border"></div>

                    <p>Verify condition of fragile or high-value items in person with more control over immediacy.</p>
                    <h4>Buyer Perspective</strong></h4>
                    <p class="intro"><em>“I'd rather find local sellers for large expensive things. That way I can see the condition before buying. And I can take it right away!”</em></p>
                    
                    <div class="callout-border"></div>

                    <h4>Rationale for making payment with Mercari</h4>
                    <p>Buyer/seller protections offer sense of safety and security</p>
                    <p class="intro"><em>“I use [Mercari] because I don’t feel safe meeting a stranger while carrying a wad of cash. And you get a receipt."</em></p>
                </div>
            </div>
        
            <h3>Research Takeaways</h3>
        
            <div class="callout callout-standard">
                <div>
                    <h4>Behavior</h4>
                    <p class="intro">In-person transactions were already taking place on Mercari.</p>
                </div>

                <div>
                    <h4>Motivation</h4>
                    <p class="intro">Users wanted to avoid shipping hassles and inspect before buying.</p>
                </div>

                <div>
                    <h4>Support</h4>
                    <p class="intro">Mercari’s payment system provided a sense of safety and security.</p>
                </div>
            </div>
        </div>
        
        <div class="section-block">
        
            <h2>Planning</h2>
        
            <h3>Timeline</h3>
        
            <p>Leading the path with clear direction, guidance, and feedback enabled UX delivery in just under 5 weeks with
                ongoing support throughout the project lifecycle.</p>
        
            <div class="callout callout-standard">   
                <div class="figure graphic">
                    <img src="resources/images/img-timeline.svg">
                </div>
            </div>
        
            <h3>Project Organizational Key Result</h3>
        
            <div class="callout callout-standard">
                <h3>At least 50% of daily active users view one pickup-eligible item per session.</h3>
                    
                <div class="content-item">
                    <div class="figure graphic">
                        <img src="resources/images/img-okr.svg">
                    </div>
                </div>
            </div>
        
                <div class="content-group">
                    <div class="callout callout-standard content-item">
                        <div class="content-item">
                            <h4>Objective</h4>
                            <p>Measure interest and engagement driven by awareness of local pickup</p>
                        </div>
                    </div>
        
                    <div class="callout callout-standard content-item">
                        <div class="content-item">
                            <h4>Method</h4>
                            <p>Leverage existing design elements and product infrastructure to support existing user behavior</p>
                        </div>
                    </div>
                </div>
        
            <h3>Build-to-Learn Design Strategy</h3>
        
            <p>Given time constraints and stakeholder expectations, building to learn was a strategic design approach that minimized
                UX effort and maximized impact:</p>
        
            <div class="callout callout-standard content-item">
                <h3>Strategic Rationale</h3>
                <ol class="custom-list">
                    <li>Provided a strategic path to meet our engagement metric without sacrificing quality.</li>
                    <li>Generated practical insights in real time and avoided costly changes to product infrastructure.</li>
                    <li>Narrowed scope reduced financial risk and pressure to over-engineer an unvalidated solution.</li>
                </ol>
            </div>
        
        </div>
        
        <div class="section-block">
        
            <h2>UX Design Execution</h2>
        
            <h3>Research Influence</h3>
        
            <p>I led workshops and activities to synthesize research. These exercises clarified our understanding of user
                perspectives and generated keywords that drove product features.</p>
        
            <div class="callout callout-standard">
                <div class="figure">
                    <img src=" resources/images/img-keywords.svg">
                </div>
            </div>

            <h3>Leveraging Lightweight Patterns and Components to Enable Discovery</h3>
            <p>Simple changes like adding a “Nearby” category to the buyer’s home screen supported search and discovery of local
                items. This was a simple repurposing of existing search infrastructure and design system elements.</p>
        
            <div class="figure">
                <img src="resources/images/img-example-nearby.png">
                <p class="img-cap">A new "Nearby" item category drew attention to location-based items. Location and distance
                    indicators reinforced local relevance.</p>
            </div>
        
            <h3>Discovery through search</h3>
            <p>Search filters were extended to include distance, calculated from the seller’s default address.</p>
        
            <div class="figure">
                <img src="resources/images/img-example-discovery-search.png">
                <p class="img-cap">Search filters let users adjust their distance radius.</p>
            </div>
        
            <h3>Map View</h3>
            <p>A static map with proximity and distance indicators allowed for discoverability while protecting seller privacy.
                This let us avoid the risks and complexities of introducing dynamic maps (e.g., exact address, stalking, or
                pressure to share locations prematurely).</p>
        
            <div class="figure">
                <img src="resources/images/img-example-map.png">
                <p class="img-cap">The map was one of many modular components integrated to optimize development resources and
                    minimize change to the broader product framework.</p>
            </div>
        
            <h3>Repurposing Systems to Transform “Blocking” into “Guiding”</h3>
            <p>Repurposing Mercari’s chat moderation system was an effective way to pilot in-person sales safely and efficiently
                without writing new code. Pairing moderation logic with rewritten content transformed chat warnings into
                strategic onboarding tools.</p>
        
            <div class="figure">
                <img src="resources/images/img-birbs-chat.svg">
            </div>
        
            <div class="figure">
                <h3>Buyer-initiated Meetup through messages</h3>
                <img src="resources/images/img-example-message-request.png">
                <p class="img-cap">Leveraging existing chat moderation tools with content updates created a launch pad for
                    buyers to engage sellers about meeting up. This strategy allowed the team to enable meetups with minimal
                    development resources.</p>
            </div>
        
            <div class="figure">
                <h3>Meetup request to seller</h3>
                <img src="resources/images/img-example-buyer-message.png">
                <p class="img-cap">Repurposed moderation tools were used to inform sellers of local buyer interest in their
                    item. Sellers were coached to coordinate a sale using suggested responses or to continue a free-form
                    conversation.</p>
            </div>
        
            <h3>Repurposed Order and Sale Confirmation</h3>
            <p>Rather than reinventing the wheel for in-person exchanges, we extended the same system people already trusted.
                When a buyer picks something up in person, they confirm in the app the same way they would if it were shipped.
            </p>
        
            <div class="figure">
                <h3>Buyer confirmation</h3>
                <img src="resources/images/img-example-sale-confirmation.png">
                <p class="img-cap">After meeting up, the buyer is asked to confirm whether or not they took possession of the
                    item. Payment to the seller is released once confirmed.</p>
            </div>
        </div>
        
        <div class="section-block">
        
            <h2>Impact</h2>
        
            <p>Meetups outperformed the target engagement metric by 20% which secured commitment for further iteration. The text market saw +13%
                inventory growth within the 4-week evaluation period.</p>
        
            <div class="callout callout-standard">
                <div class="content-group">
                    <div class="content-item">
                        <h3>~70% View Rate</h3>
                        <p>Smashed 50% OKR target</p>
                        <div class="graphic">
                            <img src="resources/images/img-impact-chart.svg">
                        </div>
                    </div>

                    <div class="content-item">
                        <h3>+13% inventory growth</h3>
                        <p>In test market (derived from new listings and sell-through rate)</p>
                        <div class="graphic">
                            <img src="resources/images/img-impact-graph.svg">
                        </div>
                    </div>
                </div>
            </div>
        
                <div class="callout callout-standard">
                    <h4>Additional success metrics</h4>
                    <ul class="custom-list-bullet">
                        <li>Increase in listings tagged “Local Pickup Only.”</li>
                        <li>Increase in existing listings updated with “Available for Local Pickup.”</li>
                        <li>Higher sell-through rate for bulky/heavy item categories.</li>
                    </ul>
                </div>
        
                <div class="callout callout-standard">
                    <h4>Indicators & Guardrails</h4>
                    <ul class="custom-list-bullet">
                        <li>Positive user feedback on the listing/purchase flow.</li>
                        <li>No increase in scam reports or safety incidents related to Meetups.</li>
                        <li>High usage of in-app messaging to coordinate Meetups.</li>
                    </ul>
                </div>
            </div>
        
            <div class="section-block">
                <h2>Reflections</h2>
        
                <div class="callout callout-standard">
                    <h4>Key benefits experienced by building to learn:</h4>
                    
                    <div>
                        <h3>Faster Iteration and Feedback</h3>
                        <p>Tangible features like chat tools enabled direct user feedback, revealing actionable opportunities forimprovement.</p>
                    </div>
                    
                    <div>
                        <h3>Risk Mitigation</h3>
                        <p>Small-scale features leveraging existing infrastructure allowed early experimentation to validate Meetups' viability and impact on inventory growth.</p>
                    </div>

                    <div>
                        <h3>Stakeholder Engagement</h3>
                        <p>Visible progress eased stakeholder concerns, influenced roadmap buy-in, and strengthened trust in my team across the Product organization.</p>
                    </div>
                </div>
        
                <p>This project underscored the value of a flexible, iterative UX approach. By focusing on learning over
                    perfection, we validated Meetups’ potential and added another methodology to our team’s product design toolkit.</p>
        
                <div class="figure">
                    <img src="resources/images/img-birbs-bread-end.png">
                </div>
            </div>
    `
};