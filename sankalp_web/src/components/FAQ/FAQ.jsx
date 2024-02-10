import React from 'react'
import "./FAQ.css"

const FAQ = () => {
  return (
    <div class="accordion">
    <h1>Frequently Asked Questions</h1>
    <div class="accordion-item">
        <input type="checkbox" id="accordion1"/>
        <label for="accordion1" class="accordion-item-title"><span class="icon"></span>What is SEO, and why is it important for online businesses?</label>
        <div class="accordion-item-desc">SEO, or Search Engine Optimization, is the practice of optimizing a website to improve its visibility on search engines like Google. It involves various techniques to enhance a site's ranking in search results. SEO is crucial for online businesses as it helps drive organic traffic, increases visibility, and ultimately leads to higher conversions.</div>
    </div>

    <div class="accordion-item">
        <input type="checkbox" id="accordion2"/>
        <label for="accordion2" class="accordion-item-title"><span class="icon"></span>How long does it take to see results from SEO efforts?</label>
        <div class="accordion-item-desc">The timeline for seeing results from SEO can vary based on several factors, such as the competitiveness of keywords, the current state of the website, and the effectiveness of the SEO strategy. Generally, it may take several weeks to months before noticeable improvements occur. However, long-term commitment to SEO is essential for sustained success.</div>
    </div>

    <div class="accordion-item">
        <input type="checkbox" id="accordion3"/>
        <label for="accordion3" class="accordion-item-title"><span class="icon"></span>What are the key components of a successful SEO strategy?</label>
        <div class="accordion-item-desc">A successful SEO strategy involves various components, including keyword research, on-page optimization, quality content creation, link building, technical SEO, and user experience optimization. These elements work together to improve a website's relevance and authority in the eyes of search engines.</div>
    </div>

    <div class="accordion-item">
        <input type="checkbox" id="accordion4"/>
        <label for="accordion4" class="accordion-item-title"><span class="icon"></span>How does mobile optimization impact SEO?</label>
        <div class="accordion-item-desc">Mobile optimization is crucial for SEO because search engines prioritize mobile-friendly websites. With the increasing use of smartphones, search engines like Google consider mobile responsiveness as a ranking factor. Websites that provide a seamless experience on mobile devices are more likely to rank higher in search results.</div>
    </div>

    <div class="accordion-item">
        <input type="checkbox" id="accordion5"/>
        <label for="accordion5" class="accordion-item-title"><span class="icon"></span>What is the role of backlinks in SEO, and how can they be acquired?</label>
        <div class="accordion-item-desc">Backlinks, or inbound links from other websites to yours, play a significant role in SEO. They are considered a vote of confidence and can improve a site's authority. Quality over quantity is crucial when acquiring backlinks. Strategies for obtaining backlinks include creating high-quality content, guest posting, reaching out to industry influencers, and participating in community activities. It's important to focus on natural and ethical link-building practices.</div>
    </div>

</div>
  )
}

export default FAQ
