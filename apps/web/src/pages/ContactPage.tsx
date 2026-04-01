import type { CmsContactPageContent, CmsCollectionResponse } from '@workspace/shared';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { Button, FeatureHighlights, FurniroFooter, FurniroHeader } from '../components/ui';
import { contactPageFallback } from '../content/contactPageFallback';
import { useGetContactPageBySlugQuery } from '../services/cmsApi';

type ContactFormFieldProps = {
  label: string;
  input: ReactNode;
};

function ContactFormField({ label, input }: ContactFormFieldProps) {
  return (
    <label className="contact-form-field">
      <span>{label}</span>
      {input}
    </label>
  );
}

function normalizeCollectionEntry<T>(response: CmsCollectionResponse<T> | undefined): T | undefined {
  const entry = response?.data?.[0];

  if (!entry) {
    return undefined;
  }

  if (entry.attributes) {
    return entry.attributes;
  }

  return entry as T;
}

function getContactPageContent(data: CmsCollectionResponse<CmsContactPageContent> | undefined): CmsContactPageContent {
  const normalized = normalizeCollectionEntry<CmsContactPageContent>(data);

  if (!normalized) {
    return contactPageFallback;
  }

  return {
    ...contactPageFallback,
    ...normalized,
    headerContent: {
      ...contactPageFallback.headerContent,
      ...normalized.headerContent,
    },
    heroContent: {
      ...contactPageFallback.heroContent,
      ...normalized.heroContent,
    },
    contactDetails: normalized.contactDetails ?? contactPageFallback.contactDetails,
    contactFormContent: {
      ...contactPageFallback.contactFormContent,
      ...normalized.contactFormContent,
      fields: normalized.contactFormContent?.fields ?? contactPageFallback.contactFormContent.fields,
    },
    featureHighlights: normalized.featureHighlights ?? contactPageFallback.featureHighlights,
    footerContent: {
      ...contactPageFallback.footerContent,
      ...normalized.footerContent,
    },
  };
}

export function ContactPage() {
  const { data } = useGetContactPageBySlugQuery('contact');
  const content = getContactPageContent(data);

  return (
    <div className="contact-page">
      <FurniroHeader content={content.headerContent} />

      <section
        className="contact-hero"
        style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.68), rgba(255,255,255,0.68)), url(${content.heroContent.backgroundImageUrl})` }}
      >
        <img src={content.heroContent.logoImageUrl} alt="" aria-hidden="true" />
        <h1>{content.heroContent.title}</h1>
        <nav aria-label="Breadcrumb" className="contact-breadcrumb">
          {content.heroContent.breadcrumbs.map((crumb, index) => (
            <span key={crumb.label}>
              <Link to={crumb.href}>{crumb.label}</Link>
              {index < content.heroContent.breadcrumbs.length - 1 ? (
                <span className="contact-breadcrumb-separator">&gt;</span>
              ) : null}
            </span>
          ))}
        </nav>
      </section>

      <main className="contact-main">
        <section className="contact-intro">
          <h2>{content.introTitle}</h2>
          <p>{content.introDescription}</p>
        </section>

        <section className="contact-content-grid">
          <div className="contact-details-column">
            {content.contactDetails.map((detail) => (
              <article key={detail.id} className="contact-detail-item">
                <img src={detail.iconUrl} alt="" aria-hidden="true" />
                <div>
                  <h3>{detail.title}</h3>
                  {detail.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
            {content.contactFormContent.fields.map((field) => {
              if (field.type === 'textarea') {
                return (
                  <ContactFormField
                    key={field.id}
                    label={field.label}
                    input={<textarea rows={4} placeholder={field.placeholder} required={field.required} />}
                  />
                );
              }

              return (
                <ContactFormField
                  key={field.id}
                  label={field.label}
                  input={<input type={field.type} placeholder={field.placeholder} required={field.required} />}
                />
              );
            })}

            <Button variant="brand" className="contact-submit-button">
              {content.contactFormContent.submitLabel}
            </Button>
          </form>
        </section>
      </main>

      <FeatureHighlights items={content.featureHighlights} />
      <FurniroFooter brandName={content.headerContent.brandName} content={content.footerContent} />
    </div>
  );
}
