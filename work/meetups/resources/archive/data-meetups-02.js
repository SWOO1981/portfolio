const caseStudyData = {
    title: "Meetups – A Build-to-Learn Approach",
    subtitle: "A UX Management Case Study",
    company: "Mercari, Inc. 🇺🇸",
    role: "UX Design Manager",
    platforms: "Mobile App + Web",
    timeline: "8-week execution",
    achievements: "<ul><li>~13% marketplace growth</li><li>New design methodology</li></ul>",
    bodyContent: `
        <h2>Overview</h2>
        <p class="intro">At Mercari, I led a project that introduced in-person buying and selling to a marketplace built on contact-free transactions. This shift pushed us to adapt to a flexible design process guided by real-time user insights.</p>
        
        <div class="figure">
        <img src="resources/images/img-meetups-lede.svg">
        </div>
        
        <h3>Contactless Buying & Selling</h3>

        <p>Our community-powered marketplace offers a convenient way to buy and sell new and used items online. It caters to a wide range of sellers, from people decluttering their closets to entrepreneurs selling items for profit.</p>

        <div class="highlight-box">
        <h4>How it works:</h4>
        <ul>
            <li><strong><em>Sellers</em></strong> list items, set prices, and ship after a sale</li>
            <li><strong><em>Buyers</em></strong> browse, purchase, and rate their transaction experience</li>
            <li><strong><em>Mercari</em></strong> takes a fee (around 10% of the sale price)</li>
        </ul>
        </div>

        <div class="figure">
        <img src="resources/images/img-bread-sold.svg">
        </div>

        <h2>Business Opportunity</h2>

        <p>Online-only transactions kept users safe and ensured fee collection, but limited our inventory to easy-to-ship items. Introducing in-person sales (like <em>Facebook Marketplace</em> or <em>OfferUp</em>) was seen as a way to remain competitive, expand Mercari's inventory and increase transaction volume.</p>

        <h3>Meetups Feature Vision</h3>
        <p>Enable buyers and sellers to connect for in-person transactions to facilitate the sale of items that are impractical to ship by providing tools for safe, coordinated local pickup.</p>
        
        <h3>User Stories</h3>
        <p><strong>Seller</strong>: As a seller, I want to meet buyers locally to sell items that are impractical to ship.</p>
        <p><strong>Buyer</strong>: As a buyer, I want to find and purchase items available for local pickup so I can inspect them in person and avoid shipping costs and delays.</p>
        
        <h3>Strategic Context</h3>
        <p><strong>Problem</strong>: Users currently use competitors (<em>OfferUp</em>, <em>Facebook Marketplace</em>) for local discovery, then return to Mercari for payment security, creating a fragmented experience.</p>
        <p><strong>Hypothesis</strong>: By integrating safe local discovery with our trusted escrow, we can capture this entire workflow, increase Gross Market Value (GMV) and reduce cross posting.</p>

        <h2>UX Design Management Roles & Responsibilities</h2>

        <p>As a UX Design Manager, I orchestrated activities and workshops aimed at clarifying the product vision and design roadmap. I led a UX team of Designers, Content Designers and Researchers to ship an MVP Meetups experience under an ambitious 12-week timeline.</p>

        <h2>Evaluative Research Challenges Assumptions</h2>

        <p>We interviewed users flagged for sharing high-risk contact information in our chat feature (e.g., phone, email, street address). Sharing these sort of details violated our terms-of-service agreement. Our assumption was that they were attempting to circumvent fees by moving transactions offline.</p>

        <p>We discovered that a majority of sellers had successfully sold at least one item before being flagged by our moderation tools. We also learned that user’s motivations were more practical than simply avoiding fees.</p>

        <p><strong>Sellers</strong>: Avoid shipping challenges related to cost, risk, or difficulty.</p>
        <p class="intro"><em>“UPS was charging me $300 to ship a bike I was selling for $250. It just made more sense to find a local buyer.”</em></p>

        <p><strong>Buyers</strong>: Verify condition of fragile or high-value items in person and get the item immediately.</p>
        <p class="intro"><em>“When I want to buy a large, fragile, or high-value item online, it’s nice to find local sellers and arrange a pickup so I can verify its condition and get it immediately without worrying about shipping.”</em></p>

        <p>A common practice was the sourcing of locally available items on other platforms like OfferUp and Facebook Marketplace, then coordinating the sale on Mercari to take advantage of our strong buyer and seller protections. This revealed our core value proposition. More than finding someone locally, it’s about completing the entire risky transaction safely.</p>
        
        <h2>Build-to-Learn Design Strategy</h2>

        <p>I led workshops that analyzed our research. These exercises clarified user’s perspectives and generated new keywords to drive potential features:</p>

        <ul>
            <li><strong>Discovery</strong>: “Find,” “discover,” “browse,” “search by location/distance.”</li>
            <li><strong>Logistics</strong>: “Arrange pickup,” “coordinate meeting,” “safe exchange location.”</li>
            <li><strong>Motivation</strong>: “Inspect before paying,” “verify condition,” “get it now,” “avoid shipping fees,” “no delivery delays.”</li>
            <li><strong>Safety & Trust</strong>: “How do I safely meet a stranger for a transaction?”</li>
        </ul>

        <p>Given our ambitious 12-week timeline, defining the project’s scope was crucial for establishing the UX roadmap and ensuring on-time delivery. For this, I directed my team’s attention toward the project’s organizational key result (OKR), defined by our Business Intelligence Group.</p>
        
        <div class="highlight-box">
            <h4>Project OKR:<h4>
            <h3>At least half (50%) of daily active users view one meetup-eligible item per session.</h3>
        </div>

        <p>The OKR signaled a priority to evaluate user interest and engagement through awareness of locally available items. It reframed Meetups as a <em>build-to-learn</em> effort and relieved pressure to deliver a fully polished feature. This allowed us to gain practical insights in real time while avoiding costly changes to the broader product infrastructure.</p>
        
        <div class="figure">
        <img src="resources/images/img-teamwork.png">
        </div>
        
        <h2>UX Design Execution</h2>
        <p>Instead of overhauling Mercari’s core design (which was built to discourage in-person sales), our <em>build-to-learn</em> approach focused on repurposing existing components to support meeting in person.</p>
        
        <h3>New Lightweight Components to Enable Discovery</h3>
        <p>Simple changes like adding a “Nearby” category to the buyer’s home screen supported search and discovery of local items. This was a simple repurposing of existing search infrastructure and design system elements.</p>

        <div class="figure">
        <img src="resources/images/img-example-nearby.png">
        <p class="img-cap">A new "Nearby" item category drew attention to location-based items. Location and distance information reinforced proximity.</p>
        </div>

        <h3>Discovery through search</h3>
        <p>Search filters were extended to include distance, determined by the seller’s default address.</p>

        <div class="figure">
        <img src="resources/images/img-example-discovery-search.png">
        <p class="img-cap">Search filters let users adjust their distance radius.</p>
        </div>

        <h3>Map View</h3>
        <p>A static map with proximity and distance indicators allowed for discoverability while protecting seller privacy. This let us avoid the risks and complexities of introducing dynamic maps (e.g., exact address, stalking, or pressure to share locations prematurely).</p>
        
        <div class="figure">
        <img src="resources/images/img-example-map.png">
        <p class="img-cap">The map was one of many modular components integrated to optimize development resources and minimize change to the broader product framework.</p>
        </div>

        <h3>Using Chat Features to Transform “Blocking” to “Guiding”</h3>
        <p>Repurposing Mercari’s chat moderation system was an effective way to pilot in-person sales safely and efficiently without writing new code. Pairing moderation logic with rewritten content transformed chat warnings into strategic onboarding tools.</p>

        <div class="figure">
        <img src="resources/images/img-birbs-chat.svg">       
       </div>

        <div class="figure">
        <h3>Buyer-initiated Meetup through messages</h3>
        <img src="resources/images/img-example-message-request.png">
        <p class="img-cap">Leveraging existing chat moderation tools with content updates created a launch pad for buyers to engage sellers about meeting up. This strategy allowed the team to enable meetups with minimal development resources.</p>
        </div>

        <div class="figure">
        <h3>Meetup request to seller</h3>
        <img src="resources/images/img-example-buyer-message.png">
        <p class="img-cap">Repurposed moderation tools were used to inform sellers of local buyer interest in their item. Sellers were coached to coordinate a sale using suggested responses or continue a free-form conversation.</p>
        </div>

        <h3>Repurposed Order and Sale Confirmation</h3>
        <p>Rather than reinventing the wheel for in-person exchanges, we extended the same system people already trusted. When a buyer picks something up in person, they confirm in the app the same way they would if it were shipped.</p>
        
        <div class="figure">
        <h3>Buyer confirmation</h3>
        <img src="resources/images/img-example-buyer-confirmation.png">
        <p class="img-cap">After meeting up, the buyer is asked to confirm whether or not they took possession of the item. Payment to the seller is released once confirmed.</p>
        </div>

        <div class="figure">
        <h3>Seller confirmation</h3>
        <img src="resources/images/img-example-seller-confirmation.png">
        <p class="img-cap">After meeting up, the seller is asked to confirm whether or not they sold the item. Confirmation updates the item’s status to ‘sold’ and a successful sale is added to the seller’s history.</p>
        </div>

        <h2>Impact</h2>

        <p>Overall user interest in Meetups exceeded our business expectations and grew test-market inventory by ~13%, securing commitment for further iteration.</p>

        <h3>Additional success metrics included:</h3>

        <ul>
            <li>Increase in listings tagged “Local Pickup Only.”</li>
            <li>Increase in existing listings updated with “Available for Local Pickup.”</li>
            <li>Higher sell-through rate for bulky/heavy item categories.</li>
        </ul>

        <h3>Leading indicators & guardrails</h3>

        <ul>
            <li>Positive user feedback on the listing/purchase flow.</li>
            <li>No increase in scam reports or safety incidents related to meetups.</li>
            <li>High usage of in-app messaging to coordinate Meetups.</li>
        </ul>


        <h2>Outcomes and Lessons Learned</h2>
        <p>Meetups wasn’t about changing Mercari’s DNA, but extending our product’s capabilities to support existing user behaviors. By taking a build-to-learn approach, we were able to test the waters quickly without risking the product’s core foundation.</p>

        <div class="highlight-box">
        <h3>Key benefits experienced by building to learn:</h3>
        <br>
        <p><strong>Faster Iteration and Feedback</strong></p>
        <p>Tangible features like chat tools enabled direct user feedback, revealing actionable opportunities for improvement.</p>
        <br>
        <p><strong>Risk Mitigation</strong></p>
        <p>Small-scale features leveraging existing infrastructure allowed early experimentation to validate Meetup’s viability and impact on inventory growth.</p>
        <br>
        <p><strong>Stakeholder Engagement</strong></p> 
        <p>Visible progress eased stakeholder concerns, influenced roadmap buy-in and strengthened trust in my team across the Product organization.</p>
        </div>

        <p>This project underscored the value of a flexible, iterative UX approach. By focusing on learning over perfection, we validated Meetups’ potential and added another methodology to our team’s product design tool kit.</p>

        <div class="figure">
        <img src="resources/images/img-birbs-bread-end.png">
        </div>
    `
};