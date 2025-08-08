import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className="hero__title">ZeroTier Documentation</h1>
            <p className="hero__subtitle">
              Connect all your devices with secure, software-defined networking. 
              Get started in minutes with our comprehensive guides and tutorials.
            </p>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/quickstart">
                Quick Start Guide
              </Link>
              <Link
                className={clsx('button button--outline button--secondary button--lg', styles.secondaryButton)}
                to="/what">
                What is ZeroTier?
              </Link>
            </div>
          </div>
          <div className={styles.heroImage}>
            <img 
              src="/img/hero-splash.webp" 
              alt="ZeroTier Network Illustration"
              className={styles.heroImg}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

function FeatureCard({title, description, link}) {
  return (
    <div className={clsx('col col--4', styles.feature)}>
      <div className="card">
        <div className="card__body">
          <h3>{title}</h3>
          <p>{description}</p>
          <Link to={link} className="button button--primary">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Complete documentation for ZeroTier - secure, software-defined networking">
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <FeatureCard
                title="Getting Started"
                description="New to ZeroTier? Start here for quick setup guides and basic concepts."
                link="/quickstart"
              />
              <FeatureCard
                title="Guides"
                description="Step-by-step tutorials for common use cases and advanced configurations."
                link="/guides"
              />
              <FeatureCard
                title="FAQ"
                description="Frequently asked questions and troubleshooting help."
                link="/faq"
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}