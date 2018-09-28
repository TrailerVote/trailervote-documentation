---
title: Media types
categories: ['reference', 'api', 'media-type']
---

This page contains a list of media types used on the API servers. A [media type](https://en.wikipedia.org/wiki/Media_type) (formerly known as MIME type)[[1]](https://www.iana.org/assignments/media-types/media-types.xhtml) is a two-part identifier for file formats and format contents transmitted on the Internet.

TrailerVote uses media types for [content negotiation](https://en.wikipedia.org/wiki/Content_negotiation) and the ones registered by TrailerVote are therefore documented here. Interaction with TrailerVote services requires content negotiation using these media types, and errors SHOULD always be returned with the [errors](media-type-errors) media type. A client **MUST** use an accepted media type for each request.

## Fallback

If there is a fallback available, it will be `text/html` unless otherwise
specified. Clients **MUST** opt-in to this fallback by adding it to the `Accept`
header. The **RECOMMENDED** reduced quality param `q` is `0.8`.

```
Accept: application/vnd.trailervote.type, text/html; q=0.8
```

When a client recieves a response with `text/html`, it **SHOULD** display the
content in a webview or iframe

## Conventions

### .index
If a media type also defines a .index media type that media type will return a list of urls:

`application/vnd.trailervote.feedback.v1.index+json`:
```JSON
{
  "feedback": [
    { "self": { "href": "https://test.trailervote.com/feedback/132asd-21das-12" } },
    { "self": { "href": "https://example.org/feedback.fbk" }}
  ]
}
```

### .create
If an .index media type supports creating objects and you have the required authorization to do so there will also be a .create media type that defines what you should POST to that resource:

`application/vnd.trailervote.feedback.v1.create+json`:
```JSON
{
  "persona": "498e80ca-4be0-40dd-84ab-0036cfa7e765",
  "value": "positive"
}
```

## List of media types
This is a non-exhaustive list of media types used by the TrailerVote services.

### Standard media types
| Media type |   |
|------------|---|
| `text/html` | HTML text / web page |
| `image/png` | Image (PNG) |
| `image/jpeg` | Image (JPEG) |
| `image/gif` | Image (GIF) |
| `image/bmp` | Image (Bitmap) |
| `image/tiff` | Image (TIFF) |
| `image/svg+xml` | Image (SVG) |
| `audio/mpeg` | Audio (MPEG) |
| `audio/ogg` | Audio (OGG) |
| `audio/aac` | Audio (AAC) |
| `video/mpeg` | Video (MPEG) |
| `video/webm` | Video (WebM) |
| `video/mp4` | Video (MP4) |

### Vendor media types
These all start with the vendor prefix `vnd.trailervote` and are specific to TrailerVote services.

- [`application/vnd.trailervote.errors.v1+json`](media-type-errors)
- [`application/vnd.trailervote.audio_fragment.v1+json`](media-type-audio-fragment), `.create`, `.index`
- [`application/vnd.trailervote.configuration.v2+json`](media-type-configuration)
- [`application/vnd.trailervote.client_configuration.v1+json`](media-type-client-configuration)
- [`application/vnd.trailervote.fingerprint.v1`](media-type-fingerprint)
- [`application/vnd.trailervote.feedback.v1+json`](media-type-feedback), `.create`, `.collection`
- [`application/vnd.trailervote.sentiment_feedback.v1+json`](media-type-sentiment-feedback)
- [`application/vnd.trailervote.persona.v1+json`](media-type-persona) `.create`
- [`application/vnd.trailervote.place.v1+json`](media-type-place) `.create`, `.index`
- [`application/vnd.trailervote.product.v1+json`](media-type-product) `.create`, `.index`
- [`application/vnd.trailervote.product.image.v1+json`](media-type-product-image) `.create`, `.index`
- [`application/vnd.trailervote.product.video.v1+json`](media-type-product-video) `.create`, `.index`
- [`application/vnd.trailervote.product_place_link.v1.collection+json`](media-type-product-place-link) `.create`, `.collection`

