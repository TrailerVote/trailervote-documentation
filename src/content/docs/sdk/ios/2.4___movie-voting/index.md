---
title: Movie Voting
categories: ['sdk', 'ios', 'implementation']
---

`[TVRateViewController](Classes/TVRateViewController.html)` is a class responsible for displaying the fullscreen UI with movie voting card, giving the user the ability to choose from three available voting types: `Yes`, `Maybe` and `No`.

![](movie_voting.png)

User can tap the corresponding vote button at the bottom of the screen or simply swipe the movie card itself in the corresponding direction. After the user has voted on the movie, the movie is automatically added to the user interests feed (See [User interests feed](./user-interests-feed) for the details).

Instantiate the view controller by calling the `[-[TVTrailerVoteFactory rateViewControllerForMovie:]](Classes/TVTrailerVoteFactory.html#/c:objc(cs)TVTrailerVoteFactory(im)rateViewControllerForMovie:)` method of the main factory class:

    let rateVC = TVTrailerVoteFactory.shared().rateViewControllerForMovie(movie)

After instantiation, the view controller can be easily presented:

    present(rateVC, animated: true, completion: nil)
