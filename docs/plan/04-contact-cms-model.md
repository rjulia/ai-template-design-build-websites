# Contact Page CMS Model

## Content Type

- Name: `contact-page`
- Collection name: `contact_pages`
- Purpose: structured content model for the Furniro contact page implementation

## Required Fields

1. `title` (`string`)
2. `slug` (`uid`, derived from `title`)
3. `introTitle` (`string`)
4. `introDescription` (`text`)
5. `headerContent` (`json`)
6. `heroContent` (`json`)
7. `contactDetails` (`json`)
8. `contactFormContent` (`json`)
9. `featureHighlights` (`json`)
10. `footerContent` (`json`)

## Optionality Strategy

- At CMS level, all section fields are required to keep page rendering predictable.
- At frontend level, fallback content is kept in the app to avoid blank renders while content is being authored.
- For form field-level optionality, `required` is controlled inside `contactFormContent.fields` items.
