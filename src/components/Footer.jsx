import React from 'react'

const footerLinks = [
    "Privacy Policy", "Terms of Use", "Sales Policy", "Legal", "Site Map",
]

const shop = ["Store", "Mac", "iPad", "iPhone", "Watch", "AirPods", "TV & Home", "AirTag", "Accessories", "Gift Cards"];
const account = ["Manage Your Apple Account", "Apple Store Account", "iCloud.com"];
const entertainment = ["Apple One", "Apple TV+", "Apple Music", "Apple Arcade", "Apple Podcasts", "Apple Books", "App Store"];
const appleStore = ["Find a Store", "Genius Bar", "Today at Apple", "Group Reservations", "Apple Camp", "Apple Trade In", "Ways to Buy", "Recycling Programme", "Order Status", "Shopping Help"];
const business = ["Apple and Business", "Shop for Business"];
const education = ["Apple and Education", "Shop for Education", "Shop for University"];
const applevalues = ["Accessibility", "Education", "Environment", "Privacy", "Supply Chain Innovation"];
const aboutapple = ["Newsroom", "Apple Leadership", "Career Opportunities", "Investors", "Ethics & Compliance", "Events", "Contact Apple"];



const footerlinksblock1 = [
    {
        title: "Shop and Learn",
        values: shop,
    },
    {
        title: "Apple Wallet",
        values: "Wallet",
    },]
const footerlinksblock2 = [
    {
        title: "Account",
        values: account,
    },
    {
        title: "Entertainment",
        values: entertainment,
    },]
const footerlinksblock3 = [
    {
        title: "Apple Store",
        values: appleStore,
    },]
const footerlinksblock4 = [
    {
        title: "For Business",
        values: business,
    },
    {
        title: "For Education",
        values: education,
    },
    {
        title: "For Healthcare",
        values: "Apple and Healthcare",
    },
    {
        title: "For Government",
        values: "Apple and Government",
    },]
const footerlinksblock5 = [
    {
        title: "Apple Values",
        values: applevalues,
    },
    {
        title: "About Apple",
        values: aboutapple,
    },
];

const footerBlocks = [footerlinksblock1, footerlinksblock2, footerlinksblock3, footerlinksblock4, footerlinksblock5]

const Footer = () => {
    return (
        <footer className='mx-24 py-6 text-xs flex flex-col gap-2 text-gray-500'>
            <p >◊Instant cashback is available with the purchase of an <a href="#" className='underline text-gray-700'>eligible product</a> with qualifying American Express, Axis Bank and ICICI Bank cards only. Minimum transaction value of ₹10001 applies. <a href="#" className='underline text-gray-700'>Click here</a> to see instant cashback amounts and eligible devices. Instant cashback is available for up to two orders per rolling 90-day period with an eligible card. Card eligibility is subject to terms and conditions between you and your card issuer. Total transaction value is calculated after any trade-in credit or eligible discount is applied. Any subsequent order adjustment(s) or cancellation(s) may result in instant cashback being recalculated, and any refund may be adjusted to account for instant cashback clawback; this may result in no refund being made to you. Offer may be revised or withdrawn at any time without any prior notice. <a href="#" className='underline text-gray-700'>Additional terms apply</a>. Instant cashback is not available to business customers and cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Multiple separate orders cannot be combined for instant cashback.
            </p>
            <p>‡No Cost EMI is available with the purchase of an <a href="#" className='underline text-gray-700'>eligible product</a> made using qualifying cards on 3- or 6-month tenures from most leading card issuers. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your card issuer, subject to your card issuer’s terms and conditions. Minimum order spend applies as per your card issuer’s threshold. No Cost EMI is not available to business customers and cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Card eligibility is subject to terms and conditions between you and your card issuer. Offer may be revised or withdrawn at any time without any prior notice. <a href="#" className='underline text-gray-700'>Terms apply</a>.
            </p>
            <p>1. Testing conducted by Apple in July 2025 using AirPods Pro 3 paired with iPhone 16 with pre-release AirPods firmware and iOS 26.
                Noise reduction was tested in accordance with IEC 60268-24. Comparison made against the best-selling wireless in-ear headphones commercially
                available at the time of testing. Performance depends on device settings, environment and many other factors.
            </p>
            <p>A subscription is required for Apple TV+.</p>
            <p>Features are subject to change. Some features, applications and services may not be available in all regions or all languages.</p>
            <hr />

            <div className='flex flex-wrap justify-between'>
                <>
                    {
                        footerBlocks.map((footerBlock, index) => (
                            <div key={index}>
                                {
                                    footerBlock.map((links) => (
                                        
                                            <div key={links.title} id="block1" className='flex flex-col'>
                                                <h4 className='font-semibold text-gray-700 mt-3'>{links.title}</h4>
                                                {Array.isArray(links.values,index)
                                                    ? (links.values.map((key) => (
                                                        <a key={key} href="#" className='mt-2 hover:underline'>{key}</a>
                                                    )))
                                                    : <a key={links[index]} href="#" className='mt-2 hover:underline'>{links.values}</a>
                                                }
                                            </div>
                                        
                                    ))
                                }
                            </div>
                        ))
                    }
                </>



            </div>

            <p>More ways to shop: <a href="#" className='underline text-blue-700'>Find an Apple Store</a> or <a href="#" className='underline text-blue-700'>other retailer</a> near you. Or <a href="#" className='underline text-blue-700'>call 000800 040 1966.</a></p>
            <hr />
            <div className='flex flex-wrap justify-between'>
                <div className='flex flex-wrap gap-4'>
                    <p>Copyright © 2025 Apple Inc. All rights reserved.</p>
                    {
                        footerLinks.map((link, index) => (
                            <div key={index} className='flex gap-4'>
                                <p className='hover:underline cursor-pointer'>{link}</p>
                                <p>{index == footerLinks.length - 1 ? "" : "|"}</p>
                            </div>
                        ))
                    }
                </div>
                <p>India</p>
            </div>
        </footer>
    )
}

export default Footer;
