---
name: Reference Intro
---

# API Reference

The TrailerVote eco system consists of several modules and microservices working together. This documentation will gradually grow as more is exposed and accessible outside of the TrailerVote private network. In general all information will be in the correct documentation but a few things apply to everything:

## API design considerations

Because TrailerVote is composed of different modules and services, certain design choices are made. Whenever possible we use the following conventions:

- Clients **SHOULD NOT** have to do any string manipulation during usage of the API.
- If this is not possible URLs **MUST** be constructed using [URI Templates](https://github.com/bramstein/url-template) or query parameters.
- The only information clients need to use the entire API is one entrypoint: (https://api.trailervote.com, https://staging.trailervote.com, ...). The rest
of the endpoints **SHOULD** be linked in other requests.
- Clients **SHOULD** use standard HTTP caching.
- Clients **SHOULD** supply `If-None-Match` with the last `ETag` on `HEAD` / `GET` requests
- Objects **MUST** be identfied by absolute URLs. Endpoints **SHOULD NOT** expose internal identifiers, unless they are **REQUIRED** to construct a templated URL.
- Clients **MUST** supply `If-Match` with the last `ETag` from a `HEAD` / `GET` request when making a `PUT` request, in order to prevent concurrency issues.
- Clients **MUST** use TLS/SSL for all requests.

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD",
"SHOULD NOT", "RECOMMENDED",  "MAY", and "OPTIONAL" in this section are to be
interpreted as described in [RFC 2119](https://tools.ietf.org/html/rfc2119).
