---
title: Integration Guide
categories: ['sdk', 'android', 'implementation']
---

## Basic Integration

The TrailerVote SDK contains a main class ([`TrailerVoteSdk`](/android)) which contains all the methods necessary for adding the TrailerVote experience to your app.

1. Configuring and initializing the **TrailerVote SDK**
2. Enabling the **TrailerVote In-Theatre feature**
3. Enabling the **TrailerVote Video Player**
4. Adding **TrailerVote analytics** to key events

## Configuring and initializing the TrailerVote SDK

The initialization process of the SDK begins immediately at the first call of `TrailerVoteSdk.init(Context)`. All internal dependencies are initialized as well as public singleton instances.

To start the pre-loading process of the data needed by the SDK, call the

```java
TrailerVoteSdk.startPreLoading();
```

The SDK provides the ways to set the logo image displayed at the trailer recognition screen. To set the logo image, add the drawable with the name `img_recognition_screen_partner_logo`.
You can override the default voting card background as well by adding the drawable with the name `img_recognition_screen_partner_background`.

## Enabling the TrailerVote In-Theatre feature

The main feature of the SDK is the audio recognition of movie trailers. We use the `TrailerVoteRecognitionActivity` for presenting a full-screen user interface and for handling the audio recognition process.

<img src="img_recognition_screen.jpg" width="300" />

Navigate to recognition screen by calling the -`TrailerVoteSdk.openRecognitionScreen(Context)` method of the main SDK class:

```java
TrailerVoteSdk.openRecognitionScreen(context);
```

Note that after a trailer is recognized the SDK will render the voting buttons automatically and prompt the user to vote.

<img src="img_recognition_screen_voting.jpg" width="300" />

After a user votes, the feedback is recorded internally in the SDK and transmitted to TrailerVote. This means that this information is visible in the voted trailers feed and any API that exposes the vote.

*Note: Special advertisement clips are handled differently - the fullscreen `WebView` is presented with the corresponding url being loaded.*

## Enabling the TrailerVote Video Player

<img src="img_player_screen.png" width="300" />

Because moviegoers watch trailers in your movie app, we recommend replacing your video player with the **TrailerVote Video Player**. The TrailerVote Video Player will provide a prompt during the video playback.

To launch the video player, call the

```java
TrailerVoteSdk.openVideoPlayerWithMosieIDs(context, anArrayOfMovieIDs, initialIndex);
```

Given an array of movie ids, the video player will automatically manage the playback queue of trailers and by providing the initial index you can change the initial trailer to start playback with.

## Adding TrailerVote analytics to key events

There are 3 important events that need to be instrumented.

When a user organically opens a movie that has been bookmarked, the SDK needs to be notified via

```java
TrailerVoteSdk.submitBookmarkedMovieOpenedWithId(movieID);
```

Use the following code to notify the SDK.

When a user is sent a push notification or SMS that deep links to a movie showtimes slow, the SDK needs to be notified of the successful transaction via the


```java
TrailerVoteSdk.submitMoviesShowtimesShowForMoviewId(movieID);
```

Use the following code to notify the SDK.

When a user successful purchases a ticket, the SDK needs to be notified via the
```java
TrailerVoteSdk.submitTicketPurchaseForMovieID(movieID);
```

This method will include the identifier of the movie, the theatre location, the date of the show and showtime purchased, and a corresponding source identifier that associates this purchase to any bookmarklet, push notification or SMS. This doubles in purpose to understand the effectiveness of the feature as well as sets up a push notification/local reminder at the showtime to open up the TrailerVote feature to rate trailers as they play on the big screen.

When recognition screen is opened, the event will be submitted automatically.

