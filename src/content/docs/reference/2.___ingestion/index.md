---
title: Ingestion guide
categories: ['reference', 'api', 'guides', 'ingestion']
prev: '/reference/authentication'
next: '/reference/ingest-products'
---

In order to get your products (e.g. movies) into our system and link them up with places (e.g. cinemas), images (e.g. posters), and videos (e.g. trailers), we need to ingest all that data.

## Preferred method

The preferred method of ingestion is exposing an API on your end, giving us the documentation and a set of credentials, giving us access to:

- The products to ingest,
- The images tied to a product,
- The sources for audio fragments such as videos (trailers),
- Optionally a list of places and which products should be tied to which places.

In this case, you are done reading, as the rest of this guide is intended for implementing ingestion yourself.

## API client packages

If you want to write the ingestion yourself, we recommend you to use one of our packages in order to communicate with the TrailerVote services, as these packages inject the correct [media types](media-types), [authentication](authentication), [headers](request-and-response-headers) and data, as well as giving you a normalised way of handling [exceptions](media-type-errors) and other [errors](media-type-errors).

The current packages available are:

| language | package | latest | install |
|----------|---------|--------|---------|
| ruby | [trailer_vote-api](./ruby) | [![Gem Version](https://badge.fury.io/rb/trailer_vote-api.svg)](https://badge.fury.io/rb/trailer_vote-api) | `gem install trailer_vote-api` |
| javascript | [@trailervote/api](./javascript) | [![NPM Package Version](https://badge.fury.io/js/@trailervote%2Fapi.svg)](https://npmjs.org/package/@trailervote/api) | `yarn add @trailervote/api` |

Please [contact us](mailto:info@trailervote.com) if you use a different language and/or framework, along with the versions of that language and/or framework.

## REST API

If your language is not _yet_ available, but you would like to ingest data into our system, you can use the REST API. It is important to understand our [API design considerations](/api/reference), [headers](request-and-response-headers) and [media types](media-types). The [`Allow`](request-and-response-headers#allow) can always be used to determine which REST methods are allowed on a certain endpoint.

> If you have chosen the preferred method, you are done reading.
