import React from 'react'
import HeroHome from '../components/HeroHome'
import NewsletterCTA from '../components/NewsletterCTA'
import QuoteSection from '../components/QuoteSection'
import TrustedPartners from '../components/TrustedPartners'
import DevelopmentSection from '../components/DevelopmentSection'
import StatsSection from '../components/StatsSection'
import ProductsSection from '../components/ProductsSection'
import WorldwideBranches from '../components/WorldwideBranches'

const Home = () => {
    return (
        <>
            <div className="heroHome">
                <HeroHome />
            </div>

            <div className="statsSection">
                <StatsSection />
            </div>

            <div className="productSection">
                <ProductsSection />
            </div>

            <div className="howWeStarted">
                <DevelopmentSection />
            </div>

            <div className="worldExportSection">
                <WorldwideBranches />
            </div>

            <div className="trustedPartners">
                <TrustedPartners />
            </div>
            <div className="quoteSection">
                <QuoteSection />
            </div>
            <div className="newsletterCTA">
                <NewsletterCTA />
            </div>

        </>
    )
}

export default Home