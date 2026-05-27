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

        <h2>Business Growth Opportunity</h2>

        <p>Keeping transactions online kept users safe and ensured fee collection, but limited our inventory to easy-to-ship items. Introducing in-person sales (like <em>Facebook Marketplace</em> or <em>OfferUp</em>) was seen as a way to remain competitive, expand Mercari's inventory and increase transaction volume.</p>

        <h3>Meetups Value Propositions</h3>
        <ol>
            <li><strong>Increased Inventory and Seller Participation</strong></li>
                <ol class="ol-alpha">
                    <li>Casual sellers who don’t want to deal with shipping hassles might list more items.</li>
                    <li>Bulky or heavy items (furniture, appliances, etc.) that are costly to ship become viable.</li>
                    <li>Collectibles and niche goods (e.g., vintage items, trading cards) might see more listings.</li>
                </ol>
            <li><strong>Faster Transactions and Higher Liquidity</strong></li>
                <ol class="ol-alpha">
                    <li>Instant cash for sellers (no waiting for shipping and buyer confirmation).</li>
                    <li>Buyers get items quickly (useful for last-minute or urgent purchases).</li>
                </ol>
            <li><strong>Reduced Friction</strong></li>
                <ol class="ol-alpha">
                    <li>Lowers the barrier to entry for people who avoid selling online due to shipping-hassles.</li>
                </ol>
        </ol>

        <h2>UX Design Management Roles & Responsibilities</h2>

        <p>As a UX Design Manager, I orchestrated activities and workshops aimed at clarifying the product vision and design roadmap. I led a team of UX Designers, Content Designers and Researchers to ship an MVP Meetups experience under an ambitious 12-week timeline.</p>

        <h3>Leadership Challenges: Progress Through Diplomacy</h3>

        <p>During the planning phase, two competing execution strategies emerged, each with their own passionate advocates. One group prioritized speed and on-time delivery, even if it meant narrowing the project’s scope. The other advocated for a more flexible timeline that allowed for deeper research to ensure long-term success.</p>

        <p>Tension around the split stalled activities intended to clarify the product vision. To mediate, I redirected attention toward the project’s organizational key result (OKR).</p>
        
        <div class="highlight-box">
            <h4>Project OKR:<h4>
            <h3>At least half (50%) of daily active users view one meetup-eligible item per session.</h3>
        </div>

        <p>The OKR signaled a priority to evaluate user interest and engagement through awareness of locally available items. It reframed Meetups as a <em>build-to-learn</em> effort and relieved pressure to deliver a fully polished feature.</p>

        <p>This provided enough common ground to align both factions of the project team. One group would gain practical insights in real time while the other saw meaningful progress toward on-time delivery.</p>
        
        <div class="figure">
        <img src="resources/images/img-teamwork.png">
        </div>
        
        <h2>UX Design Planning</h2>
        
        <p>Negotiations with Product Managers led to alignment on a two-phased execution plan and set the project on a clear path forward.</p>

        <div class="highlight-box">
        <h3><strong>Phase 1: Enable Meetups to generate awareness:</strong></h3>
        <ul>
            <li>Introduce location-based item listings to gauge users' expectations and willingness to transact in-person.</li>
            <li>Repurpose moderation tools to promote Meetups and coordinate transactions.</li>
            <li>Conduct evaluative research to understand how user’s expectations differ from transacting online.</li>
        </ul>
        <br>
        <h3>Phase 2: Facilitate in-person sales:</h3>
        <ul>
            <li>Delivery of Meetup safety and verification features to ensure buyer and seller protections.</li>
            <li>Refine in-app payment mandate requiring transactions to go through Mercari’s system to ensure fee collection.</li>
            <li>Enhance scheduling tools to coordinate Meetups.</li>
        </ul>
        </div>

        <h3>Running Research and Design in Parallel to Deliver On Time</h3>

        <p>Our aggressive timeline and <em>build-to-learn</em> approach made generative research impractical. Shifting to evaluative research meant that design could start working on safe assumptions while research was underway.</p>

        <p>Stacking UX tasks added weeks of padding to our timeline without sacrificing quality or insights, and let us move quickly while staying user-centered. The key was making modular updates (e.g., location tags, ‘nearby’ item category), then expanding based on observed user behaviors.</p>

        <h2>UX Design Execution</h2>
        <p>Instead of overhauling Mercari’s core design (which was built to discourage in-person sales), our <em>build-to-learn</em> approach focused on repurposing existing components to support meeting in person.</p>
        
        <h3>New Lightweight Components to Bridge the Gap</h3>
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


        <h2>Outcomes and lessons learned</h2>
        <p>Meetups wasn’t about changing Mercari’s DNA, but extending our product’s capabilities. By taking a <em>build-to-learn</em> approach, we were able to test the waters quickly without risking the product’s core foundation.</p>

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

        <p>Overall user interest in Meetups exceeded our business expectations and grew test-market inventory by ~13%, securing commitment for further iteration.</p>

        <p>This project underscored the value of a flexible, iterative UX approach. By focusing on learning over perfection, we validated Meetups’ potential, aligned cross-functional teams, and added another methodology to our team’s product design tool kit.</p>

        <div class="figure">
        <img src="resources/images/img-birbs-bread-end.png">
        </div>
    `
};