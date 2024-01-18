
import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import styles from "../styles/About.module.scss";
import { Fade } from "react-awesome-reveal";

const Prices = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const categories = [
    {
      title: "Website Development",
      tiers: [
        {
          name: "Bronze",
          price: "KES 25,000",
          description: (
            <>
              <ul>
                <li>User-friendly interface.</li>
                <li>1 - 5 Unique Pages Design.</li>
                <li>Custom Design and Development.</li>
                <li>Site Upload & Setup of domain emails.</li>
                <li>Interactive Maps and Location Information.</li>
                <li>Social Media Integration.</li>
                <li>Basic Contact/Inquiry Form.</li>
                <li>Search Engine Optimization (SEO.)</li>
                <li>Speed Optimization.</li>
                <li>1 month free support after delivery.</li>
              </ul>
            </>
          ),
        },
        {
          name: "Gold",
          price: "KES 50,000",
          description: (
            <>
              <ul>
                <li>Enhanced User interface</li>
                <li>5 - 20 Unique Pages Design</li>
                <li>Custom Design and Development</li>
                <li>Advanced Contact/Inquiry Form</li>
                <li>Comprehensive Site Upload & Setup of domain emails</li>
                <li>Interactive Maps and Location Information</li>
                <li>Extensive Social Media Integration</li>
                <li>Newsletter feature</li>
                <li>Enhanced Search Engine Optimization (SEO)</li>
                <li>Further Speed Optimization</li>
                <li>3 month free support after delivery</li>
              </ul>
            </>
          ),
        },
        {
          name: "Diamond",
          price: "KES 100,000",
          description: (
            <>
              <ul>
                <li>Premium user interface</li>
                <li>Responsive design for mobile, tablet and laptop</li>
                <li>
                  Custom Design and Development for a premium website with
                  exclusive features
                </li>
                <li>Advanced Contact/Inquiry Form</li>
                <li>Comprehensive Site Upload & Setup of domain emails</li>
                <li>
                  State-of-the-art interactive maps and location information
                </li>
                <li>Comprehensive Social Media Integration</li>
                <li>Full-service site upload and setup of domain emails</li>
                <li>Advanced Search Engine Optimization (SEO)</li>
                <li>Advanced Speed Optimization</li>
                <li>6 month free support after delivery</li>
              </ul>
            </>
          ),
        },
      ],
    },
    {
      title: "Graphic Design",

      tiers: [
        {
          name: "Bronze",
          price: "KES 10,000",
          description: (
            <>
              <ul>
                <li>Basic graphic design services for small-scale projects.</li>
                <li>Simple and effective user interface designs.</li>
                <li>Custom graphics for standard visual content needs.</li>
                <li>Basic file formats and delivery options.</li>
              </ul>
            </>
          ),
        },
        {
          name: "Gold",
          price: "KES 25,000",
          description: (
            <>
              <ul>
                <li>
                  Advanced graphic design services for medium-sized projects.
                </li>
                <li>More intricate and detailed user interface designs.</li>
                <li>
                  Custom graphics with additional revisions for precise
                  requirements.
                </li>
                <li>
                  High-quality file formats and flexible delivery options.
                </li>
              </ul>
            </>
          ),
        },
        {
          name: "Diamond",
          price: "KES 45,000",
          description: (
            <>
              <ul>
                <li>
                  Premium graphic design services for large-scale and premium
                  projects.
                </li>
                <li>Highly detailed and customized user interface designs.</li>
                <li>
                  Bespoke graphics with unlimited revisions for the most precise
                  requirements.
                </li>
                <li>
                  High-quality file formats and priority delivery options.
                </li>
              </ul>
            </>
          ),
        },
      ],
    },
    {
      title: "UI & UX Design",
      tiers: [
        {
          name: "Bronze",
          price: "KES 15,000",
          description: (
            <>
              <ul>
                <li>
                  User-friendly interface design with a focus on essential
                  features.
                </li>
                <li>
                  Intuitive user experience to guide users through key
                  interactions.
                </li>
                <li>
                  Basic wireframes and prototypes for standard design concepts.
                </li>
                <li>Standard design revisions for optimal usability.</li>
                <li>Basic usability testing for initial feedback.</li>
                <li>Delivery of final UI/UX designs in standard formats.</li>
              </ul>
            </>
          ),
        },
        {
          name: "Gold",
          price: "KES 30,000",
          description: (
            <>
              <ul>
                <li>
                  Enhanced user interface design with a more sophisticated look
                  and feel.
                </li>
                <li>
                  Improved user experience with advanced interaction designs.
                </li>
                <li>
                  Detailed wireframes and prototypes for more complex design
                  concepts.
                </li>
                <li>
                  Advanced design revisions for a refined and polished look.
                </li>
                <li>
                  Comprehensive usability testing for enhanced user feedback.
                </li>
                <li>
                  Delivery of final UI/UX designs in high-resolution formats.
                </li>
              </ul>
            </>
          ),
        },
        {
          name: "Diamond",
          price: "KES 50,000",
          description: (
            <>
              <ul>
                <li>
                  Premium user interface design with a high-end and unique
                  visual appeal.
                </li>
                <li>
                  Exceptional user experience with advanced and innovative
                  interactions.
                </li>
                <li>
                  Customized wireframes and prototypes for unique and complex
                  design concepts.
                </li>
                <li>
                  Unlimited design revisions for the most refined and polished
                  appearance.
                </li>
                <li>
                  Comprehensive usability testing for the highest level of user
                  feedback.
                </li>
                <li>
                  Priority delivery of final UI/UX designs in the highest
                  resolution.
                </li>
              </ul>
            </>
          ),
        },
      ],
    },
    {
      title: "Photography",
      tiers: [
        {
          name: "Bronze",
          price: "KES 10,000",
          description: (
            <>
              <ul>
                <li>Basic photography package for small events or sessions.</li>
                <li>Standard photo editing and enhancement.</li>
                <li>Delivery of up to 50 edited photos in standard formats.</li>
              </ul>
            </>
          ),
        },
        {
          name: "Gold",
          price: "KES 20,000",
          description: (
            <>
              <ul>
                <li>
                  Professional photography package with extended coverage.
                </li>
                <li>Advanced photo editing and enhancement.</li>
                <li>
                  Delivery of up to 100 edited photos in high-resolution
                  formats.
                </li>
              </ul>
            </>
          ),
        },
        {
          name: "Diamond",
          price: "KES 40,000",
          description: (
            <>
              <ul>
                <li>
                  Premium photography package for special events and occasions.
                </li>
                <li>Exclusive coverage with personalized attention.</li>
                <li>
                  Advanced photo editing and enhancement with premium
                  retouching.
                </li>
                <li>
                  Unlimited edited photos delivered in the highest resolution.
                </li>
              </ul>
            </>
          ),
        },
      ],
    },
    {
      title: "Videography",
      tiers: [
        {
          name: "Bronze",
          price: "KES 15,000",
          description: (
            <>
              <ul>
                <li>Basic videography services for simple video projects.</li>
                <li>Standard video editing and enhancement.</li>
                <li>Delivery of edited videos in standard formats.</li>
              </ul>
            </>
          ),
        },
        {
          name: "Gold",
          price: "KES 35,000",
          description: (
            <>
              <ul>
                <li>
                  Advanced videography services with additional editing and
                  features.
                </li>
                <li>High-quality video editing and enhancement..</li>
                <li>Delivery of edited videos in high-resolution formats.</li>
              </ul>
            </>
          ),
        },
        {
          name: "Diamond",
          price: "KES 60,000",
          description: (
            <>
              <ul>
                <li>
                  Premium videography services for high-quality video
                  production.
                </li>
                <li>Exclusive coverage with personalized attention.</li>
                <li>
                  Advanced video editing and enhancement with premium features.
                </li>
                <li>
                  Priority delivery of edited videos in the highest resolution.
                </li>
              </ul>
            </>
          ),
        },
      ],
    },
  ];

  const tierColors = {
    bronze: "bronzeColorClass",
    gold: "goldColorClass",
    diamond: "diamondColorClass",
  };

  const handleTabSelect = (index) => {
    setSelectedTab(index);
  };
  return (
    <div className={styles.aboutPrices}>
      <div className={styles.aboutPrice}>
        <h2>Prices</h2>
        <p>
          Unearth the Bronze starter pack, discover the Midas touch with Gold,
          and ascend to the elite realm of Diamond, because even the prices
          sparkle with brilliance!
        </p>
        <Fade bottom big duration={2000}>
          <Tabs onSelect={handleTabSelect} selectedIndex={selectedTab}>
            <TabList className={styles.tablist}>
              {categories.map((category, index) => (
                <Tab key={index}>{category.title}</Tab>
              ))}
            </TabList>

            {categories.map((category, index) => (
              <TabPanel key={index}>
                <div className={styles.gridContainer}>
                  {category.tiers.map((tier, tierIndex) => (
                    <div
                      key={tierIndex}
                      className={`${styles.card} ${
                        styles[tierColors[tier.name.toLowerCase()]]
                      }`}
                    >
                      <h4
                        className={`${styles.name} ${
                          styles[tierColors[tier.name.toLowerCase()]]
                        }`}
                      >
                        {tier.name}
                      </h4>
                      {tier.price && (
                        <p className={styles.price}>{tier.price}</p>
                      )}
                      <div className={styles.description}>
                        {tier.description}
                      </div>
                    </div>
                  ))}
                </div>
              </TabPanel>
            ))}
          </Tabs>
        </Fade>
      </div>
    </div>
  );
};

export default Prices;
